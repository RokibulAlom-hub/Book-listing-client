import { useLoaderData } from "react-router-dom";
import Books from "./Books";


const Home = () => {
    const loaderBooks = useLoaderData();
  
    
    return (
        <div>
            <h2 className="text-2xl font-bold">{loaderBooks.length}</h2>
            <div  className="grid grid-cols-2 gap-2">
            {
                loaderBooks.map(aBook => <Books aBook={aBook} key={aBook._id}></Books>)
            }
            </div>
        </div>
    );
};

export default Home;