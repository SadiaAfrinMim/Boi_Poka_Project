import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {yearOfPublishing,tags,publishe,rating,review,image,author,bookName,category,bookId,totalPages} =book
    return (
       <Link to={`/books/${bookId}`}>
        <div>
           <div class="card bg-base-100 border-2 p-6 shadow-xl">
  <figure className='bg-gray-200 py-8 rounded-xl '>
    <img
    className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div class="card-body space-y-4">
   <div className='flex gap-4 justify-center'>
   {
        tags.map((tag,index)=> <button key={index} className='btn text-green-400 btn-xs border-1 border-green-400'>{tag}</button>)
    }
   </div>
    
    <h2 class="card-title">
      {bookName}
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>By: {author}</p>
    <div className='border-t-2 border-dashed '></div>
    <div className='flex justify-between items-center'>
      <h2>Page: {totalPages}</h2>
      <h2>Rating: {rating}</h2>
    </div>
    <div class="card-actions justify-between">
       
      <div class="badge badge-outline">{category}</div>
      <div class="rating">
  <input type="radio" name="rating-4" class="mask mask-star-2 bg-pink-500" />
  
  
</div>
    </div>
  </div>
</div>
        </div>
       </Link>
    );
};

export default Book;