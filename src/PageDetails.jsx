

const PageDetails = ({ image, name, price }) => {
    
   
    return (
        <div>

            <div className="max-w-xs p-6 rounded-md shadow-md bg-black text-gray-50">
            	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
            	<div className="mt-6 mb-2">
            		<span className="block text-xs font-medium tracking-widest uppercase text-violet-400">{name} </span>
            		{/* <h2 className="text-xl font-semibold tracking-wide"> {details} </h2> */}
            	</div>
            	<p className="text-gray-100"> {price} </p>
            </div>
            
        </div>
    );
};

export default PageDetails;