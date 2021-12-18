import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// components
import Navbar from '../Components/Navbar';
import IndividualBook from '../Components/Individual Book/IndividualBook';

// redux actions
import { getSpecificBook } from '../Redux/Reducer/book/book.action';

const IndividualBookLayout = (props) => {
    const [book, setBook] = useState({
        photo: "",
        title: "",
        description: "",
        author: "",
        aboutAuthor: "",
        publisher: "",
        isbn: "",
        location: ""
    });
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificBook(id)).then((data) => {
            setBook((prev) => ({
                ...prev,
                ...data.payload.books
            }));
        });

    }, []);
    return (
        <>
            <Navbar />
            <div className="container mx-auto py-10 px-4 lg:px-32">
                <IndividualBook
                    image={book?.photo}
                    title={book?.title}
                    description={book?.description}
                    author={book?.author}
                    authorAbout={book?.aboutAuthor}
                    publisher={book?.publication}
                    date={"Not Available"}
                    isbn={book?.ISBN}
                    location={book?.location}
                />
                <div>{props.children}</div>
            </div>
        </>
    );
};

export default IndividualBookLayout
