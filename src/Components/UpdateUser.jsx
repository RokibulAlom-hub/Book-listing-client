import React, { useContext } from 'react';
import { Authcontext } from '../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const {updateUserData,user,setUser} = useContext(Authcontext);
    console.log(user);
    const loaddata = useLoaderData();
    console.log(loaddata);
    const{_id,email,name,photo} = loaddata;
    const handleUpdate = e =>{
            e.preventDefault()
            const name = e.target.name.value;
            const photoURL = e.target.photoURL.value;
            // const infos = {name,photoURL}
            // console.log(infos);
            const newinfos = {
                displayName:name, photoURL: photoURL,email
            }
            updateUserData(user,{displayName: name, photoURL: photoURL})
            .then(() => {
                setUser({displayName:name, photoURL: photoURL, ...user})
               fetch(`https://books-list-server.vercel.app/users/${_id}`,{
                method:"PUT",
                headers:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(newinfos)
               })
               .then(res => res.json())
               .then(data => {
                console.log(data);
                
               })
            })
            .catch(err => console.log(err.message)
            )
    }
    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" placeholder="photo" name="photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button  className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;