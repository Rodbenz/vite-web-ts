export interface Login {
  application_code: string;
  employee_username: string;
  password: string;
  client_ip: string;
  access_type: string;
  browser: string;
  version_no: string;
  checkAD: boolean;
  token_id: string;
}
export interface AuthModel {
  data: {
    auth_app_info: any;
    auth_role_menu: any;
    auth_role_menu_func: any;
    auth_role_profile: any;
  };
  api_token: string;
  refreshToken?: string;
}
