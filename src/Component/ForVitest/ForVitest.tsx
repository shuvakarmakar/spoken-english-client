import React from 'react';

const ForVitest = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold mb-4">My Blog</h1>
            <div className="max-w-2xl mx-auto">
                <article className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Blog Post Title 1</h2>
                    <p className="text-gray-600 mb-4">Published on: September 15, 2023</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in quam a enim pretium sollicitudin. Nulla facilisi. Etiam at fringilla odio.</p>
                </article>
                <article className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Blog Post Title 2</h2>
                    <p className="text-gray-600 mb-4">Published on: September 20, 2023</p>
                    <p>Suspendisse potenti. Fusce aliquet luctus enim, et vulputate lorem eleifend ac. Nunc a nulla nec nulla malesuada accumsan.</p>
                </article>
                <article className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Blog Post Title 3</h2>
                    <p className="text-gray-600 mb-4">Published on: September 25, 2023</p>
                    <p>Integer nec justo quis tortor bibendum auctor id vel elit. Vestibulum feugiat congue odio, a egestas justo auctor eget.</p>
                </article>
            </div>
        </div>
    );
};

export default ForVitest;