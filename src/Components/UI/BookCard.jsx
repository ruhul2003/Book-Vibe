import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card w-80 px-10 mx-auto bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200">
            {/* Book Image */}
            <figure className='p-2 bg-gray-50'>
                <img
                    src={book.image}
                    alt={book.bookName}
                    className='rounded-lg h-[250px] '
                />
            </figure>

            {/* Card Body */}
            <div className="card-body p-3">
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-2">
                    {book.tags.map((tag) => (
                        <div key={tag} className="badge text-green-700 bg-green-100 font-semibold text-xs">
                            {tag}
                        </div>
                    ))}
                </div>

                {/* Book Name & Author */}
                <h2 className="card-title text-xl font-bold">{book.bookName}</h2>
                <p className='font-medium text-gray-600 text-sm'>{book.author}</p>

                {/* Footer: Category & Rating */}
                <div className="card-actions justify-between mt-3 pt-3 border-t border-dashed border-gray-300 text-gray-700 text-sm flex items-center">
                    <div>{book.category}</div>
                    <div className="flex items-center gap-1">
                        {book.rating} <FaRegStar className="text-yellow-400" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;