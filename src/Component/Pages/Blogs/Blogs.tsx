import  { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';

const Blogs = () => {
    const [blogs,setBloags]=useState([])
    const [loading,setLoading]=useState(true)

 

    console.log(blogs)
    useEffect(() => {
        // Side effect code goes here
        // This code will run after the component is mounted
    
        async function fetchData() {
            try {
            
              const response = await fetch('https://spoken-english-server.vercel.app/blogs');
              const jsonData = await response.json();
              setLoading(false)
              setBloags(jsonData);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
      
          fetchData(); // Call the async function to fetch data
      }, []);

      if(loading){
        return   <Spinner></Spinner>
      }

    return (
        <div>
            <section className='title flex justify-center items-center gap-5'>
                <div className="flex flex-col items-center">
                  <p className='text-3xl font-bold'>From</p>
                  <p className='text-3xl font-bold'>The</p>
                </div>
                <p className='text-8xl font-bold'>Blogs</p>
            </section>
            <section className='blogs py-5'>
                <div className="w-[96%] md:w-[90%] mx-auto">
                  {
                    blogs.map((blog)=>(
                      <div className="grid grid-cols-3 gap-2 items-center py-3">
                        <p className='text-2xl'>{blog.blog_name}</p>
                        <img src={blog.image} alt="" className='w-full h-[300px]'/>
                        <p className='font-bold'>{blog.blog_short_description}</p>
                       
                      </div>
                    ))
                  }
                </div>
            </section>
        </div>
    );
};

export default Blogs;