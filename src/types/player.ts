export type LoginT = {
  name: string
  password: string
}

export type CreateAccountT = LoginT & { passwordConfirmation: string }
