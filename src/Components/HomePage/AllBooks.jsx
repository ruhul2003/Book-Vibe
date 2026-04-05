import React from 'react';
import { use } from 'react';


const BookPromise = fetch ('/booksData.json').then(res => res.json());



const AllBooks = () => {
    
   
   const Books = use(BookPromise);
   console.log(Books);


    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>Books</h1>
        </div>
    );
};

export default AllBooks;