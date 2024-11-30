import { Link } from "react-router-dom";

const Books = ({ aBook,allbooks,setAllbooks }) => {
    console.log(aBook);
    const { _id, name, author, category, price, photo } = aBook;
    const handleDelete = _id => {
        fetch(`http://localhost:5000/books/${_id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            
            alert('succeesfully deleted')
            const remaining = allbooks.filter(book => book._id !== _id);
            setAllbooks(remaining)
        }
        )
    }
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-lg">
                <figure>
                    <img src={photo} alt={`${name} cover`} className="w-full h-48 object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg font-semibold">{name}</h2>
                    <p className="text-sm text-gray-500">by {author}</p>
                    <p className="badge badge-primary">{category}</p>
                    <p className="text-lg font-bold text-primary mt-2">${price}</p>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-sm btn-info" >
                            Details
                        </button>
                        <Link to={`/update/${_id}`} className="btn btn-sm btn-warning" >
                            Edit
                        </Link >
                        <button className="btn btn-sm btn-error" onClick={() => handleDelete (_id)} >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;