export type AuthInfo = Readonly<{
  access_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  id_token: string;
  expires_in: number;
}>;