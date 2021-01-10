export interface JwtResponseI {
  dataUser: {
    name: string,
    email: string,
    accessToken: string,
    expiresIn: string
  }
}
