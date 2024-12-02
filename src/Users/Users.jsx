import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser);
    const [alluser, setAlluser] = useState(loadedUser)
    const handleDelete = _id => {
            console.log('this is delete id',_id);
            fetch(`http://localhost:5000/users/${_id}`,{
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = alluser.filter(auser => auser._id !== _id)
                setAlluser(remaining)
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            alluser.map((d,id) => <tr key={id} className="space-x-2">
                                <th>{id+1}</th>
                                <td>{d?.name}</td>
                                <td>{d?.email}</td>
                                <td>{d?.photo}</td>
                                <td onClick={() => handleDelete (d?._id)} className="btn">X</td>
                                <Link className="btn" to={`/UpdateUser/${d?._id}`}>Edit</Link>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;