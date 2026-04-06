import React from 'react';
import { use } from 'react';


const BookPromise = fetch('/booksData.json').then(res => res.json());



const AllBooks = () => {


    const Books = use(BookPromise);
    console.log(Books);


    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>Books</h1>

            {Books.map(
                (book) => {
                    return (
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={book.image}
                                    alt="book1" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {book.BookName}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">{}</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    );
};

export default AllBooks;