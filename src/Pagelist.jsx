import PageDetails from "./PageDetails";



const Pagelist = ({page}) => {
    return (

        <div className=" flex justify-center">
            
            <div className=" grid  md:grid-cols-3 gap-5">

            {page.map( (page, index) => {


                return (

                  <PageDetails key={index} image={page.image} name={page.name} price={page.price} ></PageDetails>

                )


            })}
            
        </div>

        </div>
        
    );
};

export default Pagelist;