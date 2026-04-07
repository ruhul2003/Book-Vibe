
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
                <h2 className="card-title">{expectedBook.bookName}</h2>
                <p>{expectedBook.author}</p>
                <p>{expectedBook.category}</p>
                <p>{expectedBook.description}</p>
                <div>
                    {expectedBook.tags.map((tag) => (
                        <div key={tag} className="badge text-green-700 bg-green-100 font-semibold text-xs">
                            {tag}
                        </div>
                    ))}
                </div>
                <p>Number of pages: {expectedBook.totalPages}</p>
                <p>Publisher : {expectedBook.publisher}</p>
                <p>Year of Publication: {expectedBook.yearOfPublishing}</p>
                <p>Rating : {expectedBook.rating}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                    <button className="btn btn-accent">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;