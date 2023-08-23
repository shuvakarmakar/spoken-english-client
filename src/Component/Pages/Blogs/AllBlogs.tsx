import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import './BlogsStyle.css'

interface Blog {
  _id: string;
  blog_name: string;
  image: string;
  blog_short_description: string;
}

const AllBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          " https://spoken-english-server-xi.vercel.app/blogs"
        );
        const jsonData = await response.json();
        setLoading(false);
        setBlogs(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="bg-[#EEEEEE]">
      <section className="title flex justify-center items-center gap-5">
        <div className="flex flex-col items-center justify-start">
          <p className="text-xl font-bold">From</p>
          <p className="text-xl font-bold text-left">The</p>
        </div>
        <p className="text-6xl font-bold">Blogs</p>
      </section>
      <section className="blogs py-5">
        <div className="w-[96%] md:w-[90%] mx-auto">
          {blogs.map((blog) => (
            <div key={blog._id} className="mb-8 md:mb-12 relative shadow-xl p-1 md:p-3 bg-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4  py-7">
                <p className="text-2xl text-justify">{blog.blog_name}</p>
                <img
                  src={blog.image}
                  alt=""
                  className="w-full h-[300px] mt-5"
                />
                <p className="font-bold text-justify mt-5">
                  {blog.blog_short_description}
                </p>
              </div>
              <div className="flex justify-center mb-3">
                <Link
                  className="blogsBtn"
                  to={`blog/${blog._id}`}
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllBlogs;
