import React from 'react'
import { useState } from 'react';

export const AddTodo = (props) => {
    const onSubmitForm = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert('Todo Title or Description can not be blank!');
        }
        props.addTodo(title, desc);

    }
    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');
    return (
        <div className="container my-3">
            <form onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Todo Title</label>
                    <input type="text" class="form-control" id="title" value={title} onChange={(e) => { settitle(e.target.value) }} aria-describedby="emailHelp" placeholder="Enter Todo" />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Description</label>
                    <input type="text" class="form-control" id="desc" value={desc} onChange={(e) => { setdesc(e.target.value) }} placeholder="Enter Description" />
                </div>
                <br />
                <button type="submit" class="btn btn-sm btn-success">Add a TODO</button>
            </form>
        </div>
    )
}
