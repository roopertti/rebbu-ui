import { FC } from 'react'
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline
} from 'react-google-login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import Button from '../../00-atoms/Button'

export const LoginButton: FC = () => {
  const onSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    // validate token server side & redirect to app on success
  }

  const onFailure = (err: any) => {
    console.error(err)
  }

  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID!}
      render={(props) => (
        <Button variant="lg" onClick={props.onClick}>
          <FontAwesomeIcon icon={faGoogle} />
          <span> Login with Google</span>
        </Button>
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      isSignedIn
    />
  )
}
