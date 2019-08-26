// import React, { createContext, useState } from 'react';
import React, { createContext, useReducer, useEffect } from 'react';

import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    // const [ books, setBooks ] = useState([
    //     {title: "RichDad, PoorDad", author: "Robert Kiyosaki", id: 1},
    //     {title: "The Alchemist", author: "Paulo Coehlo", id: 2},

    // ])

    // const addBook = (title, author) => {
    //     setBooks([{title, author, id: uuid()}, ...books, ])
    // }

    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id))
    // }

    const [ books, dispatch ] = useReducer(bookReducer,  [], () => {
        return localStorage.books ? JSON.parse(localStorage.books) : []
    })

    useEffect(() => {
        localStorage.books = JSON.stringify(books)
    }, [books])

   
    return (  
        <BookContext.Provider value={{ books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;
