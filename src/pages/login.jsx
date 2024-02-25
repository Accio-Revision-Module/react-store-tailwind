import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Error from '../components/common/Error';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

function Login() {
  const [{email, password}, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError("")
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const validate = () => {
    let e = "";
    if(email && password) {
      return true;
    } else {
      e = "Please enter all required fields"
    }
    
    setError("Please enter all required fields")
    return false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(loading) return;
    if(!validate()) return;
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (e) {
      setError(e.toString())
    } finally {
      setLoading(false);
    }

  }

  return (
    <main className='p-4 flex flex-col justify-center items-center gap-8 bg-gray-100'>
      <h1 className='text-5xl font-bold'>Login</h1>
      {error && (
        <Error e={error} />
      )}
      <form onSubmit={handleSubmit} className='flex flex-col justify-start items-start gap-4 w-full md:w-2/5 m-auto'>
        <input value={email} name='email' onChange={handleChange} type="email" placeholder='Enter your email address' className='border-gray-200 border-2 rounded p-2 outline-none text-lg w-full' />
        <input value={password} name='password' onChange={handleChange} type="password" placeholder="Enter your password" className='border-gray-200 border-2 rounded p-2 outline-none text-lg w-full' />

        <p>
          Don't have an account? Signup <Link to={"/signup"} className='text-blue-600'>here</Link>
        </p>
        <button className="bg-blue-500 hover:bg-transparent text-white hover:text-blue-500 p-2 rounded border-blue-500 border-2 transition">
          {loading ? "Loading..." : "Login"}
        </button>

      </form>
    </main>
  )
}

export default Login