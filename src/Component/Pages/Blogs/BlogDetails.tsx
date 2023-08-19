import { useParams } from "react-router-dom";
import React,{ useState, useEffect } from "react";
interface Blog {
  _id: string;
  blog_name: string;
  image: string;
  blog_short_description: string;
  blog_details: string;
  date: string;
}

const BlogDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    fetch(`https://spoken-english-server.vercel.app/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });
  }, [id]);

  if (!blog) {
    return null; // You might want to render something while loading
  }

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
