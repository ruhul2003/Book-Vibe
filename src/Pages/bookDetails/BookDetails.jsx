import React, { use } from 'react';
import { useParams } from 'react-router';
import { useLoaderData } from 'react-router';

const BookDetails = () => {
    const { bookId } = useParams();
    console.log(bookId);

    const books = useLoaderData();
    console.log(books, "Books from loader");

    const expectedBook = books.find(book => book.bookId == bookId);
    console.log(expectedBook, "Expected Book");

    return (
        <div>
            Book Details
        </div>
    );
};

export default BookDetails;