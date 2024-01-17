import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import './Login.scss'


const Login = ({ setUser }) => {
  return (
    <div className='login__div'>
      <h3>Linkedin login page</h3>
      {/* <img src="" alt="" /> */}
      <div className="login__btn">

        <GoogleLogin
          onSuccess={credentialResponse => {
            let user = jwtDecode(credentialResponse.credential)
            localStorage.setItem('profile', user)
            setUser(true)
            console.log(user)
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>
    </div>
  )
}

export default Login