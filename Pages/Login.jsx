import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Form, Link } from 'react-router';

const Login = () => {
    return (
		<div className="hero bg-base-200 min-h-screen">
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
			  <Form className="fieldset">
				<label className="label">Email</label>
				<input type="email" className="input" placeholder="Email" />
				<label className="label">Password</label>
				<input type="password" className="input" placeholder="Password" />
				<div><a className="link link-hover">Forgot password?</a></div>
				<button type='submit' className="btn btn-primary mt-4">Login</button>
			  </Form>
			  <h1 className='text-black text-center'>Or Continue with</h1>
			  <div className='flex gap-3 justify-center items-center w-full'>
				<FaGoogle size={25}></FaGoogle>
				<FaGithub size={25}></FaGithub>
			  </div>
			  <h1 className='font-semibold text-black text-center'>Dont Have and Account? <Link className='link link-hover' to={'/user-signup'}>Register</Link> </h1>
			</div>
		  </div>
		</div>
	  </div>
    )
};

export default Login;