import React from 'react'

export const TodoItem = ({ todoData, onDelete }) => {
    return (
        <div className="card shadow my-3">
            <h2 className="text-center">To Do Item {todoData.sno}</h2>
            <ul>
                <li><h4>{todoData.title}</h4></li>
                <li><h4>{todoData.desc}</h4></li>
            </ul>
            <div className="col-md-5">
                <button className="btn btn-danger" onClick={() => { onDelete(todoData) }}>Delete</button>
            </div>


        </div>
    )
}
