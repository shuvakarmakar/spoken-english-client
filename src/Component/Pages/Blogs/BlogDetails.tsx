import { useParams } from "react-router-dom";
import { useState } from "react";
import React from 'react'
const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  console.log(blog);

  fetch(`https://spoken-english-server.vercel.app/blog/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setBlog(data);
    });
  return (
    <div className="bg-white">
      <section>
        <div className="w-[96%] md:w-[90%] mx-auto">
          <p className="text-4xl py-5">{blog.blog_name}</p>
          <img src={blog.image} alt="" className="w-full h-[60vh]" />
          <p className="py-5">{blog.blog_short_description}</p>
          <p>{blog.blog_details}</p>
          <p>{blog.date}</p>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
