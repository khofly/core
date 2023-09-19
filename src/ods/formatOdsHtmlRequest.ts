const formatOdsHtmlTable = (html: string): string => {
  const formattedHtml = html
    // Remove tbody
    .replace(/<tbody>/g, "")
    .replace(/<\/tbody>/g, "")

    // strong -> b
    .replace(/<strong/g, "<b")
    .replace(/<\/strong>/g, "</b>")

    // em -> i
    .replace(/<em/g, "<i")
    .replace(/<\/em>/g, "</i>")

    // th -> td
    .replace(/<th/g, "<td")
    .replace(/<\/th>/g, "</td>")

    // Add attributes to table
    .replace(
      /<table>/,
      // '<!DOCTYPE html><html><head><meta http-equiv="content-type" content="text/html; charset=utf-8"/><style type="text/css">body,div,table,thead,tbody,tfoot,tr,th,td,p { font-family:"Liberation Sans"; font-size:x-small }a.comment-indicator:hover + comment { background:#ffd; position:absolute; display:block; border:1px solid black; padding:0.5em;  } a.comment-indicator { background:red; display:inline-block; border:1px solid black; width:0.5em; height:0.5em;  }comment { display: none;  }</style></head><body><table cellspacing="0" border="0">'
      '<table cellspacing="0" border="0">'
    )

    // Left, center & right align doesn't work,
    // we need:          <td ... align="center">...</td>
    // tiptap uses:      <td ...><p style="text-align: center">...</p></td>
    .replace(
      /<td\s+colspan="(\d+)"\s+rowspan="(\d+)"><p(?:\s+style="text-align:\s*(\w+)")?>([^<]*)<\/p><\/td>/gi,
      (match, colspan, rowspan, align, content) => {
        align = align || "left";

        return `<td colspan="${colspan}" rowspan="${rowspan}" align="${align}">${content}</td>`;
      }
    );
  // .concat('</body></html>');

  return formattedHtml;
};

export const formatOdsHtmlRequest = (html: string[]): string => {
  const formattedHtml = html
    .map((t, _i) => {
      return formatOdsHtmlTable(t);

      // Exporting multiple sheets doesn't work for shit
      //       return `
      // <hr>
      // <A NAME="table${i}"><h1>Sheet ${i + 1}: <em>Sheet${i + 1}</em></h1></A>
      // ${formatOdsHtmlTable(t)}
      // <!-- ************************************************************************** -->
      //     `;
    })
    .join("");

  return formattedHtml;
};
