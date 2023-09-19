// ----------------------------------------------------------
// It's used to change the html output that we get
// from the server cause without it it's a bit scuffed
// ----------------------------------------------------------

import { formatOdsHtmlResponse } from "./ods/formatOdsHtmlResponse";
import { formatOdtHtmlResponse } from "./odt/formatOdtHtmlResponse";
import { IFormatFileType } from "./types";

export const formatHtmlResponse = (
  format: IFormatFileType,
  html: string
): string[] => {
  switch (format) {
    case "odt":
    case "docx":
      return formatOdtHtmlResponse(html);

    case "ods":
    case "xlsx":
      return formatOdsHtmlResponse(html);

    default:
      return [html];
  }
};
