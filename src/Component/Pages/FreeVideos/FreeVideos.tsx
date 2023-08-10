import React from 'react';

const FreeVideos = () => {
    const videos = [
        'https://www.youtube.com/embed/66bXMjs7Q2A',
        'https://www.youtube.com/embed/JXqPHZ8smb8',
        'https://www.youtube.com/embed/A2X3G0DbkI0',
        'https://www.youtube.com/embed/topBLaz4zgk',
        'https://www.youtube.com/embed/aQcj7K33MX4',
        'https://www.youtube.com/embed/zDSgmdpbBLk',
        'https://www.youtube.com/embed/WohEYmqsquI',
        'https://www.youtube.com/embed/0r0h5hvwq-A',
        'https://www.youtube.com/embed/HRTNtGP_EMU',
        'https://www.youtube.com/embed/B30RAx4ipRs',
        'https://www.youtube.com/embed/9gpmxN5SlNM',
        'https://www.youtube.com/embed/28U3deacl0o',
        'https://www.youtube.com/embed/xru-t2mRDDQ',
        'https://www.youtube.com/embed/6Hk_x7VLyCw',
        'https://www.youtube.com/embed/WLQ6HyFbfKU',
        'https://www.youtube.com/embed/yXfKI1vLZJk',
        'https://www.youtube.com/embed/qU07t-VHrew',
        'https://www.youtube.com/embed/oCbphSaK4QY',

    ];

    return (
        <div className='bg-gray-100 p-10'>
            <h1 className='text-center text-4xl text-black font-semibold mb-6'>
                    All are Free Videos from Youtube !
                </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 px-6 md:px-10'>
                {videos.map((video, index) => (
                    <div key={index} className='mb-4 md:mb-0'>
                        <iframe
                            className='w-full h-64 md:h-auto'
                            src={video}
                            title={`YouTube video ${index + 1}`}
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FreeVideos;
