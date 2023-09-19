import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import "./BlogsStyle.css";
import { useTranslation } from "react-i18next";
import {  Slide, Zoom } from 'react-awesome-reveal';

interface Blog {
  _id: string;
  blog_name: string;
  image: string;
  blog_short_description: string;
}

const Blogs: React.FC = () => {
  const { t } = useTranslation();
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
    <>
      <div className=" bg-slate-100 changebg">
        <div style={{ overflow: "hidden" }} className="changebg">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: "#dce4f3", width: "100%", height: 72 }}
          >
            <path d="M1200 120L0 16.48V0h1200v120z" />
          </svg>
        </div>
        <div className=" bg-slate-100 px-4 md:px-8 lg:px-16 changebg">
          <section className="title flex  justify-center items-center gap-5 py-4 md:py-7">
            <p className="text-5xl md:text-6xl font-bold">{t("blogs.title")}</p>
          </section>
          <section className="blogs py-5 md:py-10 ">
            <div className="w-[95%] mx-auto">
              <div className="">
                {blogs.slice(0, 3).map((blog) => (
                  <div
                    key={blog._id}
                    className="mb-8 md:mb-12 relative border px-2 md:w-[700px] shadow-md mx-auto"
                  >
                    <div className="grid grid-cols-1  gap-2  ">
                      <p className="font-bold text-justify p-2 bg-slate-200  shadow border changebg">
                        {t("blogs.title")}
                      </p>
                      <p className="font-bold text-justify p-2 bg-slate-200  shadow border changebg">
                        {blog.blog_name}
                      </p>
                      <Zoom direction="right">
                      <img
                        src={blog.image}
                        alt=""
                        className="w-full md:h-[450px]  mt-5"
                      />
                      </Zoom>
                      <p className="font-sm text-justify mt-5 p-4 leading-7  font-serif">
                        {blog.blog_short_description}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis illo ex explicabo. Architecto enim nostrum, odit
                        minima nesciunt facere soluta, illum ducimus perferendis
                        explicabo a commodi perspiciatis nobis id assumenda!....
                      </p>
                    </div>
                    <Slide direction="down">
                    <div className="flex justify-center mt-4 md:mt-0">
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <Link
                          className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                          to={`blog/${blog._id}`}
                        >
                          {t("blogs.readMore")}
                        </Link>
                      </button>
                    </div>
                    </Slide>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center  px-10 ">
             <Slide direction="left">
             <Link
                to={"/all-blogs"}
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 px-10 py-2"
              >
                {t("blogs.viewMore")}
              </Link>
             </Slide>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Blogs;
