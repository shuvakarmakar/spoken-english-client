import React from 'react';
import imageLession from '../../../assets/Live-Lesson-Categories.png'

const FreeLiveLessons = () => {
    return (
        <div>
            <div
                className=''
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(to bottom, white, skyblue)',
                    padding: '20px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h1 className='text-center text-5xl text-black font-semibold mt-12'>Speaking FREE Live Lessons!</h1>
                <h3 className='text-center text-2xl my-6 text-black font-medium'>Here is the Latest Live Lesson</h3>
                <div className='text-center'>
                    <iframe
                        className='items-center mt-6'
                        width='560'
                        height='315'
                        src='https://www.youtube.com/embed/66bXMjs7Q2A'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className='bg-gray-100 py-10'>
                <div className='container mx-auto px-6 flex flex-col md:flex-row'>
                    <div className='md:w-1/2 md:pr-6'>
                        <h3 className='text-center text-2xl my-6 text-black font-medium'>The Speaking Academy offers</h3>
                        <p className='text-center text-lg text-gray-800'>
                            FREE live lessons on lots of different topics.
                        </p>
                    </div>
                    <div className='md:w-1/2 md:pl-6'>
                        <p className='text-lg text-gray-800'>
                            In the lessons, we choose a popular topic and then look at:
                        </p>
                        <ul className='mt-4 list-disc list-inside text-gray-800'>
                            <li>vocabulary, including idioms and collocations</li>
                            <li>grammar</li>
                            <li>pronunciation</li>
                            <li>tips and techniques</li>
                        </ul>
                        <p className='mt-4 text-lg text-gray-800'>
                            You can watch on my YouTube Channel or Facebook Page.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 '>
                <h3 className='text-center text-2xl text-black font-bold'>More Free Speaking Lessons</h3>
                <div className='flex justify-center mt-4'>
                    <img src={imageLession} alt='More Free Speaking Lessons' className='mx-auto my-10' />
                </div>
            </div>
            <div className='bg-gray-100'>
                <div className='flex justify-center gap-2 px-10'>
                    <iframe
                        width='560'
                        height='315'
                        src='https://www.youtube.com/embed/66bXMjs7Q2A'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                    <iframe
                        width='560'
                        height='315'
                        src='https://www.youtube.com/embed/JXqPHZ8smb8'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                    <iframe
                        width='560'
                        height='315'
                        src='https://www.youtube.com/embed/66bXMjs7Q2A'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default FreeLiveLessons;
