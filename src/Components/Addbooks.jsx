

const Addbooks = () => {
    
    const handleAddbooks = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const author = e.target.author.value;
        const category = e.target.category.value;
        const price = e.target.price.value;
        const photo = e.target.photo.value;

        const newBooks = { name, author,category, price, photo }
        console.log(newBooks)

        fetch('http://localhost:5000/books',{
            method:'POST',
            headers:{
                "content-type" : "application/json"
            },
            body:JSON.stringify(newBooks),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('book added successfully')
            })
        
    }
    return (
        <div className='lg:w-3/4 mx-auto'>
            <div className="text-center p-10">
                <h1 className="text-5xl font-bold">Add Book!</h1>
                <p className="py-6">
                   Add books here what type and what category you want
                </p>
            </div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleAddbooks} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Book name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Author</span>
                            </label>
                            <input type="text" name='author' placeholder="Author name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' placeholder="Book Category" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Book price" className="input input-bordered" required />
                        </div>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Addbooks;