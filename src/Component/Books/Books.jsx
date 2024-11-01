import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch('./booksfakedata.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div>
            <h2 className="text-4xl font-bold text-center py-14">Books</h2>
            <div className="grid mb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    books.map(book=><Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;