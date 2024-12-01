import { useContext } from "react";
import { Authcontext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const { logInuser} = useContext(Authcontext)
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        logInuser(email,password)
        .then(result => {
            console.log("logged in successfully",result.user);
            alert('logged in successfuly')
             })    
        .catch(err => {
            console.log(err.message);
            
        })
    }
    return (
        <div>
                   <div className="hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <button className="btn btn-primary">Log In </button>
                        </div>
                    </form>
                </div>
            </div>
        </div> 
        </div>
    );
};

export default Login;