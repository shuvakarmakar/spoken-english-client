import React from "react";
import { Link } from "react-router-dom";
import imageLession from "../../../assets/Live-Lesson-Categories.png";
import { Helmet } from "react-helmet";
import SideIcons from "../Home/Home/Side";

const FreeLiveLessons = () => {
  return (
    <div className="changebg">
      <Helmet>
        {" "}
        <title>ELearner | Free Classes</title>
      </Helmet>
      <SideIcons />
      <div className="flex flex-col items-center justify-center p-4 md:p-10 shadow-md banner-bg darkText">
        <h1 className="text-center text-5xl text-black font-semibold mt-6 md:mt-12 darkText">
          Speaking FREE Live Lessons!
        </h1>
        <h3 className="text-center text-2xl my-4 md:my-6 text-black font-medium darkText">
          Here is the Latest Live Lesson
        </h3>
        <div className="text-center">
          <div className="mx-auto mt-2 md:mt-6 max-w-screen-md">
            <iframe
              className="lg:w-96 lg:h-80"
              src="https://www.youtube.com/embed/66bXMjs7Q2A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 lg:p-10 changebg">
        <div className="container mx-auto px-6 flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-6">
            <h3 className="text-center text-2xl my-6 text-black font-medium darkText">
              The Speaking Academy offers
            </h3>
            <p className="text-center text-lg text-gray-800 darkText">
              FREE live lessons on lots of different topics.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-6">
            <p className="text-lg text-gray-800 darkText">
              In the lessons, we choose a popular topic and then look at:
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-800">
              <li>vocabulary, including idioms and collocations</li>
              <li>grammar</li>
              <li>pronunciation</li>
              <li>tips and techniques</li>
            </ul>
            <p className="mt-4 text-lg text-gray-800">
              You can watch on my YouTube Channel or Facebook Page.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-10 changebg">
        <h3 className="text-center text-3xl text-black font-bold darkText">
          More Free Speaking Lessons
        </h3>
        <div className="flex justify-center mt-4">
          <img
            src={imageLession}
            alt="More Free Speaking Lessons"
            className="mx-auto my-10"
          />
        </div>
      </div>
      <div className="bg-gray-100 p-10 changebg">
        <div className="flex flex-col md:flex-row justify-center md:space-x-2 px-6 md:px-10">
          <div className="mb-4 md:mb-0">
            <iframe
              className="w-full md:w-80 h-48 md:h-auto"
              src="https://www.youtube.com/embed/66bXMjs7Q2A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mb-4 md:mb-0">
            <iframe
              className="w-full md:w-80 h-48 md:h-auto"
              src="https://www.youtube.com/embed/JXqPHZ8smb8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              className="w-full md:w-80 h-48 md:h-auto"
              src="https://www.youtube.com/embed/66bXMjs7Q2A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link
            to="/free-videos"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded "
          >
            View More Videos
          </Link>
        </div>
      </div>
      <div className="bg-gray-100 lg:p-8 md:p-6 changebg darkText">
        <div className="container mx-auto px-6 flex flex-col md:flex-row">
          <div className="md:w-1/2 md:pr-6">
            <h3 className="text-2xl my-6 text-black font-bold darkText">
              Learning Vocabulary for Speaking
            </h3>
            <p className="text-black darkText">
              Learning Vocabulary for Speaking" is a cornerstone of effective
              communication. With an extensive vocabulary, you can convey ideas
              clearly, engage listeners, and express emotions accurately. It
              empowers you to choose words that resonate with your audience,
              making your speech more captivating and impactful. Furthermore, a
              robust vocabulary enhances your storytelling prowess. You can
              paint vivid pictures with words, immersing your listeners in
              narratives that leave a lasting impression. This skill is valuable
              not only in casual conversations but also in public speaking,
              presentations, and interviews. In language proficiency exams like
              IELTS, a diverse vocabulary can significantly elevate your scores
              in the speaking section. It showcases your language proficiency
              and ability to use words appropriately in different contexts.
              Expanding your vocabulary also fosters cross-cultural
              understanding. As you encounter and learn words from various
              languages and cultures, you gain insights into different
              worldviews and ways of expression. This, in turn, enhances your
              ability to connect with a diverse range of people.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-6 mt-10">
            <div className="flex justify-center mt-4">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/R1AFp1QfSaM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeLiveLessons;
