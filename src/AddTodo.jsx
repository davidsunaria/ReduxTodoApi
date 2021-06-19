import React, { useState } from "react"
import { connect } from "react-redux"
import { Add } from "./action/TodoAction"

export function AddTodo(props) {

    const [tempvalue, settemp] = useState("")

    function clickme() {
        //console.log("dtrsdyrsyrstr")
        props.addtodo({
            title: tempvalue,
            complete: false,
        })
        settemp("")
    }

    function change(event) {
        settemp(event.target.value)

    }

    return (
        <>
            <h1>Add Todd</h1>
            <input value={tempvalue} onChange={change} /><br />
            <button onClick={clickme}>Submit</button>

        </>
    )
}

function myStateToProp(state) {
    return { tempvalue: state.todoReducer.temp }
}

//console.log(mapDispatchToProp)
function mapDispatchToProp(dispatch) {

    return {
        "addtodo": Add(dispatch),
    }

}

export default connect(myStateToProp, mapDispatchToProp)(AddTodo)
