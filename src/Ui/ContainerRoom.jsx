


const ContainerRoom = ({ children }) => {
    return ( 
      <div
        className="
          max-w-[100%]
          mx-auto
          xl:px-8 
          md:px-10
          sm:px-2
          px-4
          border-sky-500
        "
      >
        {children}
      </div>
     );
  }
   
  export default ContainerRoom;
  