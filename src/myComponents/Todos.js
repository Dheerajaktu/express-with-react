import React from 'react'
import { TodoItem } from '../myComponents/TodoItem'

export const Todos = (props) => {
    return (
        <div className="container">
            {
                props.todoParentData.length === 0 ? 'No Todos to Display' :
                    props.todoParentData.map((data) => {
                        return <TodoItem todoData={data} onDelete={props.onDelete} />
                    })
            }


        </div>
    )
}
