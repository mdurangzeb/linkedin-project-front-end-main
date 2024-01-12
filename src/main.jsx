import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './media.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
<GoogleOAuthProvider clientId="974365626947-4u5upv57c9c5nt087ti6veuu5hmrh02p.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>;
  </>,
)
