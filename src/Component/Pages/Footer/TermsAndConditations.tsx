import React from "react";
import { Helmet } from "react-helmet";

const TermsAndConditations = () => {
  return (
    <div className="bg-[#EEEEEE] changebg">
      <Helmet>
        <title>Terms & Conditions</title>
      </Helmet>
      <div className="w-[96%] md:w-[90%] mx-auto">
        <p className="text-3xl py-5">Terms & Conditions</p>
        <img
          src="https://www.britishcouncil.org/sites/default/files/styles/bc-landscape-800x450/public/terms-of-use.jpg?itok=3l9hbTFG"
          className="w-full md:w-[600px]"
          alt=""
        />
        <div className="py-5">
          Welcome to the British Council, the United Kingdom's international
          organisation for cultural relations and educational opportunities.
          <br />
          <br />
          Thank you for wanting to engage digitally with the British Council. We
          ask that you take time to read these Terms of Use carefully.
          <br />
          <br />
          These Terms of Use apply when you use any British Council Digital
          Services.
          <br />
          <br />
          For an explanation of what we mean by British Council Digital
          Services, please see our answer to the question ’What are British
          Council Digital Services?’ (below).
          <br />
          <br />
          If you do access or use British Council Digital Services, it is
          understood that you agree to these Terms of Use.
          <br />
          <br />
          Please be aware that if you do not accept these Terms of Use you must
          not access or use British Council Digital Services.
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditations;
