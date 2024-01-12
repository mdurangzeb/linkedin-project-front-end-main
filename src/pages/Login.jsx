import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


const Login = ({setUser}) => {
  return (
    <div className='login__div'>
        <h3>Linkedin login page</h3>
<GoogleLogin
  onSuccess={credentialResponse => {
    let user = jwtDecode(credentialResponse.credential)
    localStorage.setItem('profile',user)
  setUser(true)
    console.log(user)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
    </div>
  )
}

export default Login