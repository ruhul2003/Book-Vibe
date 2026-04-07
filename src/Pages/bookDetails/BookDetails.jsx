
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
        <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
                <img
                    src={expectedBook.image} className='h-[400px] ' />
            </figure>
            <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;