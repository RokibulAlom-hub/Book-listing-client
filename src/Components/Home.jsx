import { useLoaderData } from "react-router-dom";
import Books from "./Books";
import { useState } from "react";


const Home = () => {
    const loaderBooks = useLoaderData();
    const [allbooks,setAllbooks] = useState(loaderBooks)
    
    return (
        <div>
            <h2 className="text-2xl text-center text-red-700 font-bold">{loaderBooks.length}</h2>
            <div  className="grid grid-cols-2 gap-2">
            {
                allbooks.map(aBook => <Books
                     allbooks={allbooks}
                     setAllbooks={setAllbooks} 
                      aBook={aBook}
                      key={aBook._id}></Books>)
            }
            </div>
        </div>
    );
};

export default Home;