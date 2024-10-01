import { useEffect, useState } from "react";
import PageDetails from "./PageDetails";
import Pagination from "./Pagination";
import Pagelist from "./Pagelist";



const Paginate = () => {


    const [page, setPage] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [postePerPage, setPostPerPage] = useState(6);


    useEffect( () =>{

      fetch('http://localhost:5000/paginate')
      .then( res => res.json())
      .then( data => setPage(data) )


    } , [])


    const lastPostIndex = currentPage * postePerPage 
    const fastPostIndex = lastPostIndex - postePerPage
    const currentPost = page.slice(fastPostIndex, lastPostIndex)
    


    return (
        <div className=" mt-10 mb-10 ml-10 mr-10">

            <div>




             
             {/* <div className=" flex justify-center">
                <div className=" grid  md:grid-cols-3 gap-5">

                  {
                    
                    page.map( page => <PageDetails key={page._id} page={currentPost} ></PageDetails> )

                  }


                </div>
             </div> */}

             <Pagelist page={currentPost} ></Pagelist>
             
             <div className=" flex justify-center mt-10">
                 
             <Pagination totalPost={page.length} postePerPage={postePerPage} setCurrentPage={setCurrentPage} ></Pagination>

             </div>
           
















            </div>
            
        </div>
    );
};

export default Paginate;