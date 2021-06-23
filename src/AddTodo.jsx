import React, { useState } from "react"
import { connect } from "react-redux"
import { Add, InputData, UpdateTodo } from "./action/TodoAction"

export function AddTodo(props) {

    // const [tempvalue, settemp] = useState("")

    function clickme() {
        //console.log("dtrsdyrsyrstr")
        props.addtodo({
            title: props.tempvalue,
            complete: false,
        })
        // settemp("")
    }

    function clickme2() {
        //console.log("dtrsdyrsyrstr")
        props.update({
            title: props.tempvalue,
            complete: false,
            id: props.SelectId
        })
        // settemp("")
    }

    function change(event) {
        props.settemp(event.target.value)

    }

    let btn = <button onClick={clickme}>Submit</button>

    if (props.indexvalue !== undefined) {
        btn = <button onClick={clickme2}>Update</button>
    }

    return (
        <>
            <h1>Add Todd</h1>
            <input value={props.tempvalue} onChange={change} /><br />
            {btn}
        </>
    )
}

function myStateToProp(state) {
    return {
        tempvalue: state.todoReducer.temp,
        indexvalue: state.todoReducer.index, SelectId: state.todoReducer.updatedid
    }
}

//console.log(mapDispatchToProp)
function mapDispatchToProp(dispatch) {

    return {
        "addtodo": Add(dispatch),
        "settemp": InputData(dispatch),
        "update": UpdateTodo(dispatch)
    }

}

export default connect(myStateToProp, mapDispatchToProp)(AddTodo)
