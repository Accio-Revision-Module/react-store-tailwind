import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebaseConfig'
import Loading from './Loading';
import Error from './Error';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes() {
    const [user, loading, error] = useAuthState(auth);

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error e={error.toString()} />
    }

    if(!user) {
        return <Navigate to={"/login"} />
    }

  return (
    <Outlet />
  )
}

export default PrivateRoutes