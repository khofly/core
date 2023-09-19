import { IDocsAppType } from ".";

export interface IDocument {
  id: string;
  user_id: string;
  name: string;
  html: string[];
  ext: IDocsAppType;
  password: string;
  created_at: string;
  updated_at: string;
}

export interface ITeam {
  id: string;
  admin_id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface IProfile {
  id: string;
  display_name: string;
  email: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
}

export interface IApiKey {
  id: string;
  user_id: string;
  value: string;
  created_at: string;
}
export interface ISupabase {
  public: {
    Tables: {
      documents: {
        Row: IDocument; // The data expected to be returned from a "select" statement.

        Insert: {
          user_id: string;
          name: string;
          html: string;
          ext: string;
          password: string;
        }; // The data expected passed to an "insert" statement.

        Update: {
          name?: string;
          html?: string;
          password?: string;
        }; // The data expected passed to an "update" statement.
      };

      api_keys: {
        Row: IApiKey; // The data expected to be returned from a "select" statement.

        Insert: {
          key: string;
          user_id: string;
        }; // The data expected passed to an "insert" statement.
      };
    };
  };
}
