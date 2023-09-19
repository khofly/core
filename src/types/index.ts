export interface IApiResponse<Data> {
  error: boolean;
  message: string;
  data: Data;
}

export type IFormatFileType = "odt" | "ods" | "docx" | "xlsx";

export type IDocsAppType = "odt" | "ods";

export * from "./supabase";
