import React from 'react'
import Error from '../components/common/Error';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import Loading from '../components/common/Loading';

function Profile() {
    const [user, loading, error] = useAuthState(auth);

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error e={error.toString()} />
    } 

  return (
    <main className='p-4 flex flex-col justify-center items-center gap-8 bg-gray-100'>
      <h1 className='text-5xl font-bold'>Profile</h1>
      {error && (
        <Error e={error} />
      )}
      <p>UID: {user.uid}</p>
      <p>Email: {user.email}</p>
    </main>
  )
}

export default Profile