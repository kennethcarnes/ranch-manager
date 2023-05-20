interface AuthConfig {
  clientID: string;
  domain: string;
  redirect_uri: string;
  audience: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'W2QmNX4rbPe5Tb6wMA3VTO2LKASKUJ3O',
  domain: 'dev-2-pjmgy9.auth0.com',
  redirect_uri: `${window.location.origin}`,
  audience: "hasura"
};
