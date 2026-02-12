
 export default function MainSection(props){
    

    return(
        
          
        
           <div className='bg-gray-50 w-80 p-3 space-y-2 shadow-2xl mt-6 rounded-lg'>
           <img src={props.img} alt="cat" className='w-full h-60  object-cover rounded-xl' />

            <h1 className='text-2xl pt-3 pb-2 font-semibold'>{props.name}</h1>
            <p className='text-md'>Phone: { props.phone}</p>
            <p className='text-md'>Email: { props.email}</p>
            </div>
                
            
     
        
    )
 }