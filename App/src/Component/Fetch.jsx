import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fetch = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then((res) => {
        setBooks(res.data.books);
        console.log("data:", books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {books.map((book) => (
          <div key={book.id}>
            <h2 style={{textAlign:"left"}}>{book.title}</h2>   
        <div style={{display:'flex', justifyContent:"space-between",alignItems:"center",padding:"5px"}}>
            <div>
                <img style={{paddingRight:"30px"}}src={book.imageLinks.thumbnail} alt="" />
            </div>
            <div>
                <p>{book.description}</p>
            </div>
        </div>
            <p style={{textAlign:"left",fontStyle:"italic"}}>Authors: {book.authors.join(", ")}</p>
        <hr />
        </div>
      ))}
    </div>
  );
};

export default Fetch;