import React, { use, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Form, Link, useNavigate } from 'react-router';
import { Context } from '../Authentication/Context';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';

const Signup = () => {
	const [wrongRegx, setWrongregx] = useState('');
	const { userSignup } = use(Context)
	const navigate = useNavigate();
	const handleSignup = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const image = e.target.image.value;
		const mail = e.target.email.value;
		const pass = e.target.password.value;
		const conPass = e.target.con_pass.value;
		const PassRegX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
		if (pass !== conPass) {
			alert("Not matched")
			return
		}
		if (PassRegX.test(pass)) {
			
			userSignup( mail , pass )
			.then( res=>{
				const user = res.user;
				return updateProfile(user, {
					displayName: name,
					photoURL:  image
				}).then(succ => {
					setWrongregx("Signup Success!")
					navigate('/')
				})
			}).catch(err => {
				setWrongregx('Something went wrong! Please Try again leter\n', err.message);
			})

		} else {
			setWrongregx('Password Must Be 8 Charecter, 1 Letter and 1 Number')
		}

	}
	return (
		<div className="hero bg-base-200 min-h-screen">
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
						{wrongRegx && <div role="alert" className="alert alert-error">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<span>{wrongRegx}</span>
						</div>}
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
							<FaGoogle size={25}></FaGoogle>
							<FaGithub size={25}></FaGithub>
						</div>
						<h1 className='font-semibold text-black text-center'>Already Have an account?<Link className='link link-primary link-hover' to={'/user-login'}>Login</Link> </h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;