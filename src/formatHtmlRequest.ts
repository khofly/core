import { formatOdsHtmlRequest } from "./ods/formatOdsHtmlRequest";
import { formatOdtHtmlRequest } from "./odt/formatOdtHtmlRequest";
import { IFormatFileType } from "./types";

export const formatHtmlRequest = (
  format: IFormatFileType,
  html: string[]
): string => {
  switch (format) {
    case "odt":
    case "docx":
      return formatOdtHtmlRequest(html);

    case "ods":
    case "xlsx":
      return formatOdsHtmlRequest(html);

    default:
      return html[0];
  }
};
