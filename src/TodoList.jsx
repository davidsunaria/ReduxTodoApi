import { connect } from "react-redux"
import React, { useState, useEffect } from "react"
import { LoadApi, Delete } from "./action/TodoAction"

function TodoList(props) {

    function clickme(id) {
        props.deletetodo(id);
    }

    let todos = props.list.map(value => {
        return <>
            <h2 key={value.id}>{value.title} <button onClick={
                () => {
                    clickme(value.id)
                }
            }>Delete</button></h2>
        </>
    })

    useEffect(() => {
        props.loadData();
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

function mapDispatchToProp(dispatch) {
    return {
        "loadData": LoadApi(dispatch),
        "deletetodo": Delete(dispatch)
    }
}



export default connect(myStateToProp, mapDispatchToProp)(TodoList)