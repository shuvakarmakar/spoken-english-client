import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="">
      <div className="hero bg-base-200 p-8 md:p-32">
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <img
            src="https://keithspeakingacademy.com/wp-content/uploads/2023/05/Keith_Web.png"
            className="max-w-full md:max-w-sm rounded-lg shadow-2xl"
            alt="Speaker"
          />
          <div className="mx-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8">
              Become a Confident English Speaker
            </h1>
            <p className="text-sm md:text-base leading-relaxed py-4 md:py-10">
              So you are preparing for IELTS, but you are not confident when you
              need to speak English, right? Maybe you’ve been learning English
              since you were at school, but you still get stuck when you speak.
              Also, and I am just guessing here, sometimes you feel the English
              in your head is great, but when you speak, it comes out much
              worse. If this sounds familiar, then you’re what I call a
              Struggling English Student but relax, because I can help you
              become a Confident English Speaker. Once you are a confident
              English speaker, you will be able to ace the IELTS Speaking exam.
              I have helped over 40,000 students from all over the world, with
              my online courses. These courses will develop your speaking skills
              in a fun way, so that you can face the examiner with confidence
              and ace the test.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
