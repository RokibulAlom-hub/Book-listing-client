import { useContext } from "react";
import { Authcontext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const{createUser} = useContext(Authcontext)
    const handleSignUp = e => {
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        createUser(email,password,photo,name)
        .then(result => {
            console.log("user created at firebase",result.user);
            alert('user created successfully')
            const newUser ={email,name,photo}
            fetch('http://localhost:5000/users',{
                method: "POST",
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
            })
        })
        .catch(err => {
            console.log(err.message);
            
        })
    }
    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
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
                            <input type="text" placeholder="photo" name="photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;