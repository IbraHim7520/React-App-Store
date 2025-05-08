import React, { use, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Form, Link, useNavigate } from 'react-router';
import { Context } from '../Authentication/Context';
import { toast, ToastContainer } from 'react-toastify';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.init';

const Login = () => {
	const navigate = useNavigate();
	const {userLogin} = use(Context)
	const proovider = new GoogleAuthProvider()
	const handleLogin = (e) =>{
		e.preventDefault()
		const email = e.target.email.value;
		const password = e.target.password.value;
		userLogin(email , password).then(success=>{
			navigate('/')
		}).catch(err=> {
			toast(err.message);
		})
	}
	const handleGoogleLogin = () =>{
		signInWithPopup(auth, proovider).then(res=>{
			navigate('/')
		}).catch(err=>{
			toast(err.message);
		})
	}
    return (
		<div className="hero bg-base-200 min-h-screen">
		<ToastContainer></ToastContainer>
		<div className="hero-content flex-col lg:flex-row-reverse">
		  <div className="text-center lg:text-left">
			<h1 className="text-5xl font-bold">Login now!</h1>
			<p className="py-6">
			  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
			  quasi. In deleniti eaque aut repudiandae et a id nisi.
			</p>
		  </div>
		  <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
			<div className="card-body">
			  <Form onSubmit={(e)=>handleLogin(e)} className="fieldset">
				<label className="label">Email</label>
				<input required name='email' type="email" className="input" placeholder="Email" />
				<label className="label">Password</label>
				<input required name='password' type="password" className="input" placeholder="Password" />
				<div><a className="link link-hover">Forgot password?</a></div>
				<button type='submit' className="btn btn-primary mt-4">Login</button>
			  </Form>
			  <h1 className='text-black text-center'>Or Continue with</h1>
			  <div className='flex gap-3 justify-center items-center w-full'>
				<FaGoogle onClick={handleGoogleLogin} size={25}></FaGoogle>
			  </div>
			  <h1 className='font-semibold text-black text-center'>Dont Have and Account? <Link className='link link-primary link-hover' to={'/user-signup'}>Register</Link> </h1>
			</div>
		  </div>
		</div>
	  </div>
    )
};

export default Login;