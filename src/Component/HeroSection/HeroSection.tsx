const HeroSection = () => {
  return (
    <div>
      <div className="hero bg-base-200 p-32">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://keithspeakingacademy.com/wp-content/uploads/2023/05/Keith_Web.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mx-10">
            <h1 className="text-5xl font-bold">
              Become a Confident English Speaker
            </h1>
            <p className="py-10 ">
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
