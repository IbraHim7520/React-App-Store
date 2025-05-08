import React, { use, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Form, Link, useNavigate } from 'react-router';
import { Context } from '../Authentication/Context';
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';

import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../firebase.init';

const Signup = () => {
	const provider = new GoogleAuthProvider();
	const { userSignup } = use(Context)
	const navigate = useNavigate();
	const handleGoogleSignup = ()=>{
			signInWithPopup(auth, provider)
			.then(res=>{
				navigate('/');
			}).catch(err=>{
				toast('Something went wrong! Please try again later')
			})
	}
	const handleSignup = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const image = e.target.image.value;
		const mail = e.target.email.value;
		const pass = e.target.password.value;
		const conPass = e.target.con_pass.value;
		const PassRegX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
		if (pass !== conPass) {
			toast("Password Didn't matched")
			return
		}
		if (PassRegX.test(pass)) {
			
			userSignup( mail , pass )
			.then(res=>{
				const user = res.user;
				return updateProfile(user, {
					displayName: name,
					photoURL:  image
				}).then(succ => {
					toast("Signup Success!")
					navigate('/')
				})
			}).catch(err => {
				toast('Something went wrong! Please Try again leter\n', err.message);
			})

		} else {
			toast('Password Must Be 8 Charecter, 1 Letter and 1 Number')
		}

	}
	return (
		<div className="hero bg-base-200 min-h-screen">
		<ToastContainer></ToastContainer>
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="text-center lg:text-left">
					<h1 className="text-5xl font-bold">Register Now!</h1>
					<p className="py-6 text-xl">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
						quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
					<div className="card-body">
						<Form onSubmit={(e) => handleSignup(e)} className="fieldset">
							<label className="label">Username</label>
							<input required name='name' type="text" className="input" placeholder="Username" />
							<label className="label">Image</label>
							<input required name='image' type="text" className="input" placeholder="Image URL" />

							<label className="label">Email</label>
							<input required name='email' type="email" className="input" placeholder="Email" />
							<label className="label">Password</label>
							<input required name='password' type="password" className="input" placeholder="Password" />

							<label className="label">Confirm Password</label>
							<input required name='con_pass' type="password" className="input" placeholder="Confirm Password" />
							<button type='submit' className="btn btn-primary mt-4">Register</button>
						</Form>

						<h1 className='text-black text-center'>Or Continue with</h1>
						<div className='flex gap-3 justify-center items-center w-full'>
							<FaGoogle onClick={handleGoogleSignup} size={25}></FaGoogle>
						</div>
						<h1 className='font-semibold text-black text-center'>Already Have an account?<Link className='link link-primary link-hover' to={'/user-login'}>Login</Link> </h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;