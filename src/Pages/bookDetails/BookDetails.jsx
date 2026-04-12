import { useParams } from 'react-router';
import { useLoaderData } from 'react-router';
import { useState } from 'react'; // ✅ missing import

const BookDetails = () => {

    const [storedBooks , setStoredBooks] = useState([]); // ✅ moved inside

    const handleMarkAsRead = (bookId) => {
        console.log('Mark as read', bookId);

        const isExistBook = storedBooks.find(book => book === bookId); // ✅ fix here

        if(isExistBook){
            alert('Already marked as read');
            return;
        }    

        const newStoredBooks = [...storedBooks, bookId];
        setStoredBooks(newStoredBooks); 
    }   

    const { bookId } = useParams();
    const books = useLoaderData();

    const expectedBook = books.find(book => book.bookId == bookId);

    if (!expectedBook) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <p className="text-xl font-semibold">Loading...</p>
            </div>
        );
    }

    return (
        <div className='w-full min-h-screen flex items-center justify-center p-4'>

            <div className="card w-7/12 mx-auto items-center bg-blue-200 flex flex-col md:flex-row gap-10 p-6 md:p-10 rounded-lg shadow-sm">

                <img
                    src={expectedBook.image}
                    alt={expectedBook.bookName}
                    className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                />

                <div className="card-body p-0">

                    <h2 className="card-title text-2xl md:text-3xl font-bold">
                        {expectedBook.bookName}
                    </h2>

                    <p className='font-semibold mt-2 text-gray-700'>
                        {expectedBook.author}
                    </p>

                    <p className="text-gray-600">
                        {expectedBook.category}
                    </p>

                    <p className="mt-3">
                        <span className="font-semibold">Review:</span> {expectedBook.review}
                    </p>

                    <div className='flex flex-wrap gap-2 mt-5'>
                        {expectedBook.tags?.map((tag) => (
                            <div key={tag} className="badge text-green-700 bg-green-100 font-semibold text-xs">
                                {tag}
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-col gap-2 text-[#666] mt-6'>
                        <p>Number of pages: {expectedBook.totalPages}</p>
                        <p>Publisher: {expectedBook.publisher}</p>
                        <p>Year: {expectedBook.yearOfPublishing}</p>
                        <p>Rating: {expectedBook.rating}</p>
                    </div>

                    <div className="card-actions flex flex-row gap-5 mt-8">
                        <button onClick={()=> handleMarkAsRead(bookId)} className="btn btn-primary">
                            Mark As Read
                        </button>
                        <button className="btn btn-accent">Wishlist</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default BookDetails;