


const Pagination = ({ totalPost, postePerPage, setCurrentPage }) => {

    let pages = []

    for( let i = 1; i <= Math.ceil(totalPost/postePerPage); i++){

       pages.push(i);

    }

  


    return (
        <div>

            {
                 
                 pages.map( (pages, index) => {
                    
                    return <div className="join">
                    <button onClick={() => setCurrentPage(pages) } className="join-item btn hover:bg-black text-blue-500  " key={index}> {pages} </button>
                    </div>
         
                   

                   
                 })

            }
            
        </div>
    );
};

export default Pagination;