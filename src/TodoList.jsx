import { connect } from "react-redux"
import React, { useState, useEffect } from "react"
import { LoadApi, Delete, update, Update } from "./action/TodoAction"

function TodoList(props) {

    function clickme(id) {
        props.delete2(id);
    }

    function clickme2(id) {
        props.edit(id);
    }

    let todos = props.list.map((value, i) => {
        return <>
            <h2 key={value.id}>{value.title} <button onClick={
                () => {
                    clickme(value.id)
                }
            }>Delete</button>
                <button onClick={
                    () => {
                        clickme2(value.id)
                    }
                }>Update</button>
            </h2>
        </>
    })

    useEffect(() => {
        props.load();
    }, [])

    return (
        <>
            {todos}
        </>
    )
}

function myStateToProp(state) {
    // console.log(state.todoReducer.todos)
    return { list: state.todoReducer.todos }
}

// function mapDispatchToProp(dispatch) {
//     return {
//         "loadData": LoadApi(dispatch),
//         "deletetodo": Delete(dispatch)
//     }
// }



export default connect(myStateToProp, { load: LoadApi, delete2: Delete, edit: Update })(TodoList)