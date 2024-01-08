export const SIGN_IN_PATH = '/SignIn';
export const HOME_PATH = '/';
export const REGISTER_PATH = '/Register';
export const MENU_PATH = '/Menu';

export const HOME = 'HOME';
export const REGISTER = 'REGISTER';
export const MENU = 'MENU';

export const authParams = {
  clientId: "4%2F0AfJohXkrniX5avF726ciBUb56uGk3d35-cdW_q2wDT7QRvnEC3aiu3SVySd9TY5zQ4u9qg",
  clientSecret: "812724055388-9uil6qt15eoqqu5mac4nhf76bf4irc84.apps.googleusercontent.com",
  scope: "profile email",
  responseType: "code",
  approvalPrompt: "force",
  accessType: "offline",
  redirectUri: "http://localhost:3000/auth_code",
  grantType: "authorization_code",
} as const;