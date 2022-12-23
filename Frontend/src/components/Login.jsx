import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import shareVideo from '../assets/share.mp4'
import Klickker from '../assets/Klickker.png'
import { GoogleLogin } from 'react-google-login'
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { client }  from '../client'

const clientId = "294529217362-fi6ej889nqe7nki1d0cm6v04kntcuo2o.apps.googleusercontent.com"

const Login = () => {

  const navigate = useNavigate();

  const onSuccess = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));

    const { name, googleId, imageUrl } = response.profileObj;

    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    }

    client.createIfNotExists(doc)
    .then(() => {
      navigate('/', {replace: true})
    })
  }

  const onFailure = (response) => {
    console.log("Login failed! res: ", response)
  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: " "
      })
    };

    gapi.load('client:auth2', start);
  })



  return (
    <div className='flex justify-center justify-start flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video src={shareVideo}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className='w-full h-full object-cover'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
        <div className='flex items-center justify-center p-5' >
          <img src={Klickker} alt="Klickker" width="130px" className='mr-1 ml-2'/>
          <h1 className='font-bold text-white text-6xl shadow'>Klickker</h1>
        </div>
        <div className='shadow-2xl'>
          <GoogleLogin
          clientId={clientId}
          render={(renderProps) => (
            <button
            type='button'
            className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none shadow-lg shadow-slate-500'
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            >
              <FcGoogle className='mr-4'/>
              Sign in with Google
            </button>
          )}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          />

        </div>
        </div>
      </div>
    </div>
  )
}

export default Login
