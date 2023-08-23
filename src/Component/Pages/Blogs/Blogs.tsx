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

const Blogs: React.FC = () => {
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
    <div className="bg-[#eeeeee] px-4 md:px-8 lg:px-16">
      <section className="title flex  justify-center items-center gap-5 py-4 md:py-7">
        <div className="flex flex-col items-center justify-center md:justify-start">
          <p className="text-2xl md:text-xl font-bold">From</p>
          <p className="text-2xl md:text-xl font-bold text-left">The</p>
        </div>
        <p className="text-5xl md:text-6xl font-bold">BLOGS</p>
      </section>
      <section className="blogs py-5 md:py-10">
        <div className="w-[96%] md:w-[90%] mx-auto">
          {blogs.slice(0, 3).map((blog) => (
            <div key={blog._id} className="mb-8 md:mb-12 relative shadow-xl p-1 md:p-3 bg-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4  py-4">
                <p className="text-lg md:text-2xl text-justify">
                  {blog.blog_name}
                </p>
                <img
                  src={blog.image}
                  alt=""
                  className="w-full h-[200px] md:h-[200px] mt-5"
                />
                <p className="font-semibold text-justify mt-5">
                  {blog.blog_short_description}
                </p>
              </div>
              <div className="flex justify-center mt-4 md:mt-0">
                <Link
                  className=" blogsBtn"
                  to={`blog/${blog._id}`}
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center py-1 md:py-2">
          <Link
            to={"/all-blogs"}
            className="blogsBtn"
          >
            View More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
