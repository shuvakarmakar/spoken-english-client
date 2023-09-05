import React from 'react';

const CookiePolicy = () => {
    return (
        <div className='bg-[#eeeeee] py-5 changebg'>

            <div className="w-[96%] md:w-[90%] mx-auto">
                <p className='text-3xl font-bold pb-3'> Cookie Policy</p>
                <div className="text-lg">
                    Google, as a third party advertisement vendor, uses cookies to serve ads on this site. The use of DART cookies by Google enables them to serve adverts to visitors that are based on their visits to this website as well as other sites on the internet.
                    <br />
                    To opt out of the DART cookies you may visit the Google ad and content network privacy policy at the following url http://www.google.com/privacy_ads.html Tracking of users through the DART cookie mechanisms are subject to Google’s own privacy policies.
                    <br />
                    Other Third Party ad servers or ad networks may also use cookies to track users activities on this website to measure advertisement effectiveness and other reasons that will be provided in their own privacy policies, Basic English Speaking has no access or control over these cookies that may be used by third party advertisers.
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;