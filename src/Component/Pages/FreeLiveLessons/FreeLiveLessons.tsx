import React from 'react';

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
            <div>
                <h3 className='text-center text-2xl my-6 text-black font-medium'>The Speaking Academy offers <br />
FREE live lessons
on lots of different topics.</h3>
            </div>
        </div>
    );
};

export default FreeLiveLessons;
