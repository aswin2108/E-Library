import React from "react";


const HomeSmCard = ({image, title}) => {
    return (
        <>
           <div className="lg:hidden bg-white shadow rounded-md w-24 md:56">
               <div className="w-full h-40">
                   <img src={image}
                   alt="Book"
                   className="w-full h-full object-cover rounded-t-md"
                   />
               </div>
               <div>
                   <h3 className="text-sm my-1 text-center font-light">{title}</h3>
               </div>
           </div>
        </>
    );
};


const HomeLgCard = ({image, title}) => {
    return (
    <>
       <div className="hidden lg:block w-64 h-48 overflow-hidden">
           <div className="w-full h-40 transform transition duration-1000 hover:scale-105">
               <img src={image}
               alt="Book"
               className="w-full h-full object-cover rounded-md shadow-lg"
               />
           </div>
           <div>
               <h3 className="text-xl my-1 font-medium">{title}</h3>
           </div>
       </div>
    </>
  );
;}

const BooksCategory = (props) => {
    return (
        <>
           <HomeSmCard {...props} />
           <HomeLgCard {...props} />
        </>
    );
};

export default BooksCategory;