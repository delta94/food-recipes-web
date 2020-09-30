
import * as auth from '../../../../../core/redux/store/ducks/auth'

describe('[DUCKS] auth', () => {
  const store = {}

  it('Should signInRequest', () => {
    const signInRequest = auth.signInRequest(store, { email: 'any_email@mail.com', password: 'any_password' })

    expect(signInRequest).toEqual({ email: 'any_email@mail.com', password: 'any_password', loading: true })
  })

  it('Should signInSuccess', () => {
    const signInSuccess = auth.signInSuccess(store, { token: 'any_token', user: 'any_user' })

    expect(signInSuccess).toEqual({
      token: 'any_token',
      loading: false,
      signed: true,
      action: 'any_user'
    })
  })

  it('Should signUpRequest', () => {
    const signUpRequest = auth.signUpRequest(store, { name: 'any_name', email: 'any_email@mail.com', password: 'any_password' })

    expect(signUpRequest).toEqual({ name: 'any_name', email: 'any_email@mail.com', password: 'any_password' })
  })

  it('Should signFailure', () => {
    const signFailure = auth.signFailure(store, {})

    expect(signFailure).toEqual({ signed: false })
  })

  it('Should signOut', () => {
    const signOut = auth.signOut(store, {})

    expect(signOut).toEqual({ signed: false })
  })
})
