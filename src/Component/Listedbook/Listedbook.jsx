import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../Utility/AddtoDB';
import Book from '../Book/Book';

const Listedbook = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');
  const allBooks = useLoaderData();

  useEffect(() => {
    const storeReadList = getStoreReadList();
    const storeReadListInt = storeReadList.map(id => parseInt(id));
    const readBookList = allBooks.filter(book => storeReadListInt.includes(book.bookId));
    setReadList(readBookList);
    console.log(storeReadList, allBooks);
  }, [allBooks]);

  const handleSort = sortType => {
    setSort(sortType);
    let sortedReadList = [...readList];
    
    if (sortType === 'no of pages') {
      sortedReadList.sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortType === 'rating') {
      sortedReadList.sort((a, b) => b.rating - a.rating); 
    }
    
    setReadList(sortedReadList);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-accent m-1">
            {sort ? `Sort by ${sort}` : 'Sort by'}
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a onClick={() => handleSort('no of pages')}>No of Pages</a></li>
            <li><a onClick={() => handleSort('rating')}>Rating</a></li>
          </ul>
        </div>
      </div>
      <h2 className='text-2xl font-bold text-center'>Listed Book: {readList.length}</h2>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className='text-2xl text-center'>Books I Read: {readList.length}</h2>
          {
            readList.map(book => <Book key={book.bookId} book={book}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2 className='text-2xl text-center'>My Wish List</h2>
          <p>No books in your wish list yet!</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Listedbook;
