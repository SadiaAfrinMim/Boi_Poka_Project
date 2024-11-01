import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addStoreReadList, addToStoreWishList } from '../Utility/AddtoDB';

const Bookdetails = () => {
    const {bookId}= useParams()
    const id = parseInt(bookId)
    const data = useLoaderData()
    const book = data.find(book => book.bookId === id)
    const {bookId: currentBookID,image,publisher,totalPages,tags,rating,bookName,author,category,review,yearOfPublishing} = book
    console.log(data);

    const handleMarkasRead= (id) =>{
        addStoreReadList(id)
    }
    const handleWishList = (id) =>{
        addToStoreWishList(id)
    }
  
    return (
        <div className='space-y-4 py-10'>
            <div className='grid grid-cols-2 gap-8'>
            <div>
            <h2 className='font-bold text-2xl mb-4'>Book Details: {bookId}</h2>
           <div>
           <img className='w-full' src={image} alt="" />
           </div>
            </div>
            <div className='space-y-6'>
                <h2 className='text-4xl font-bold'>{bookName}</h2>
                <p className='text-xl'>By: {author}</p>
                <div className="divider"></div>
                <p className='text-gray-500'>{category}</p>
                <div className="divider"></div>
                <h2><span className='font-bold text-xl'>Review:</span> {review}</h2>
                <div className='flex gap-2 items-center'>
                    <p className='text-xl font-bold'>Tag: </p>
                    {
                        tags.map((tag,index)=><button key={index} className='btn btn-xs border-1 border-green-500'>{tag}

                        </button>)
                    }
                    <div className="divider"></div>
                </div>
                <div>
                    <p><span className='font-bold'>Number of page:</span> {totalPages}</p>
                    <p><span className='font-bold'>Publisher:</span> {publisher}</p>
                    <p><span className='font-bold'>Year of publishing:</span> {yearOfPublishing}</p>
                    <p><span className='font-bold'>rating:</span>{rating}</p>
                </div>

            <button className='btn btn-outline mr-4 btn-accent' onClick = {()=>handleMarkasRead(bookId)}>Mark as read</button>
            <button onClick={()=>handleWishList(bookId)} className='btn btn-accent'>wishlisht</button>
            </div>
            </div>
        </div>
    );
};

export default Bookdetails;