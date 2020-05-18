import React from 'react';
import './BooksList.css';
import Book from './Book';

const BooksList = () => {
  const books = [
    {
      id: 1,
      author: 'Alisson',
      category: 'Horror',
    },
    {
      id: 2,
      author: 'Author1',
      category: 'Action',
    },
    {
      id: 3,
      author: 'Author2',
      category: 'Romance',
    },
    {
      id: 4,
      author: 'Author3',
      category: 'Horror',
    },
  ];

  return (
    <div className="BooksList">
      <table>
        <thead>
          <tr>
            <th>BookID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map(x => (
            <Book key={x.id} book={x} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
