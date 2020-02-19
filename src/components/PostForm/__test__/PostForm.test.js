import React from 'react';
import ReactDOM from 'react-dom';
import PostForm from './../PostForm';

it ("renders without crahing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<PostForm></PostForm>)
})