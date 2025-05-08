import { updateProfile } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase.init';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProfile = () => {
    const navigate = useNavigate();
    const handleUpdateProfile = (e)=>{
            e.preventDefault();
            const updatedName = e.target.name.value;
            const updateImage = e.target.image.value;
            updateProfile(auth.currentUser, {
                displayName: updatedName, photoURL: updateImage
              }).then((ress) => {
                navigate("/");
              }).catch((error) => {
                toast("An error occured! Please try again later.")
              });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <ToastContainer></ToastContainer>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update now!</h1>
            <p className="py-6">
             Update your profile information with new information and stay updated.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={(e)=>handleUpdateProfile(e)} className="fieldset">
                <label className="label">Username</label>
                <input name='name' type="text" className="input" placeholder="Name" />
                <label className="label">Profile Image URL</label>
                <input name='image' type="text" className="input" placeholder="Image URL" />
                <button type='submit' className="btn btn-neutral mt-4">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateProfile;