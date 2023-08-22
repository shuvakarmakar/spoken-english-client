import React from 'react';

const PrivecyPolicy = () => {
    return (
        <div className='bg-[#EEEEEE]'>
            <div className="w-[96%] md:w-[90%] mx-auto">
            <p className="text-3xl py-5">Privacy Policy</p>
            <p className='text-xl font-bold'>What personal data we collect and why we collect it Comments</p>

            When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.

An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.

<p className='text-xl font-bold pt-3'>Media</p>
If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.

<p className="text-xl font-bold pt-3">Contact forms</p>
When you use our contact form we will gather your name, location and email address. This information is used solely for the purpose of contacting you to inform you of services that we feel will be of interest to you.


If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.

If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.

When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.

If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.

<p className="text-xl font-bold pt-3">Embedded content from other websites</p>
Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.

These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracing your interaction with the embedded content if you have an account and are logged in to that website.

<p className='text-xl font-bold pt-3'>Who we share your data with</p>
We will not share your data with any third parties, except for Mail Chimp who manage our mailing list for any subscriptions such as the newsletter on this website.

<p className='text-xl font-bold pt-3'>How long we retain your data</p>
If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.

For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.

<p className="text-xl font-bold pt-3">What rights you have over your data</p>
If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.

<p className="text-xl font-bold pt-3">Where we send your data</p>
Visitor comments may be checked through an automated spam detection service.
            </div>
        </div>
    );
};

export default PrivecyPolicy;