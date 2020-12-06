import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';
import './Login.css';
import google from '../../../images/icons/google.png';

const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    
    const googleSignIn = () => {
      const googleProvider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
          const { displayName, email } = res.user;
          const signInUser = {
            isSignedIn: true,
            name: displayName,
            email: email
          }
          setLoggedInUser(signInUser);
          history.replace(from);
          storeAuthToken();
        })
        .catch(error => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.message = error.message;
          setLoggedInUser(newUserInfo);
        });
    }
        
          const storeAuthToken = () => {
            firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
              .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
              }).catch(function (error) {
                // Handle error
              });
          }
          const loginStyle = {
              border :' 1px solid #666666',
              padding : '20px',
              margin : 'auto',
              textAlign : 'center',
              height : '400px',
              borderRadius : '15px'
          }
          const loginLogo ={
            width : '180px',
            margin: '50px 0',
          }

          const signOut = () => {
            firebase.auth().signOut()
              .then(res => {
                const signedOutUser = {
                  isSignedIn: false,
                  name: '',
                  email: '',
                  error: ''
                }
                setLoggedInUser(signedOutUser);
              })
              .catch(error => {
        
              })
          }

    return (
        <div className="login-page container" style={{ height: "100vh" }}>
            <div className=" d-flex justify-content-center" >
             <Link to='/home'><img style={loginLogo} src={logo} alt="logo"/> </Link> 
            </div>
            <div className="row justify-content-center" >
                <div style={loginStyle} className="col-md-6 d-flex align-items-center justify-content-center">
                  <div className="box mb-5">
                      {
                          loggedInUser.isSignedIn ?
                            <div>
                              <h4 >Now log in as {loggedInUser.name || 'Unknown User!'}</h4>
                                <button className='googleBtn' onClick={signOut}>
                                  <img className="p-1 pr-2" src={google} style={{ width: '30px', float: 'left' }} alt="" /> Log Out
                                </button>
                            </div>
                            :
                            <div>
                              <h1>Login With</h1>
                                <button className='googleBtn' onClick={googleSignIn}>
                                  <img className="p-1 pr-2" src={google} style={{ width: '30px', float: 'left' }} alt="" /> Continue with Google
                                </button>
                            </div>
                        }
                      <p className="pb-5">Don’t have an account? <span onClick={() => { alert('Sorry! You have to Continue with Google 😜') }} style={{ color: "skyblue", cursor: "pointer" }}>Create an account</span></p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Login;




