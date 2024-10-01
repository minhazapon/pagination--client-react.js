import { useEffect, useState } from "react";
import PageDetails from "./PageDetails";



const Paginate = () => {


    const [page, setPage] = useState([])


    useEffect( () =>{

      fetch('http://localhost:5000/paginate')
      .then( res => res.json())
      .then( data => setPage(data) )


    } , [])


    return (
        <div className=" mt-10 mb-10 ml-10 mr-10">

            <div>




             
             <div className=" flex justify-center">
                <div className=" grid  md:grid-cols-3 gap-5">

                  {
                    
                    page.map( page => <PageDetails key={page._id} page={page} ></PageDetails> )

                  }


                </div>
             </div>
















            </div>
            
        </div>
    );
};

export default Paginate;