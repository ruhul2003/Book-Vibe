import React, { Suspense, use } from 'react';
import BookCard from '../UI/BookCard';

const BookPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
    const Books = use(BookPromise); // React 18+ with Suspense
    console.log(Books);

    return (
        <div className="w-10/12 mx-auto my-10">
            {/* Page Title */}
            <h1 className='text-center font-bold text-4xl md:text-5xl mb-16'>Books</h1>

            {/* Grid Container */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {Books.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </div>
    );
};

export default function SuspenseWrapper() {
    return (
        <Suspense fallback={<div className='text-center mt-10 text-lg'>Loading books...</div>}>
            <AllBooks />
        </Suspense>
    );
}