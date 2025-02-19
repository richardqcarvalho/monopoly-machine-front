export type LoginT = {
  name: string
  password: string
}

export type CreateAccountT = LoginT & { passwordConfirmation: string }

export type PlayerT = {
  id: string
  name: string
}
