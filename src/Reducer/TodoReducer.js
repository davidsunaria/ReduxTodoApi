import { DELETE_TODO, LoadData, ADD_TODO, Temp, EDIT, Update2 } from "../action/types"
import { http } from "../BaseApi"



let intial = {
    todos: [],
    index: undefined,
    temp: "",
    updatedid: undefined
}



function TodoReducer(state = intial, action) {
    // console.log(action.payload)

    switch (action.type) {


        case ADD_TODO:

            let adddata = state.todos.concat(action.payload)

            //console.log(action.payload)
            return { ...state, todos: adddata, temp: "" }

        case LoadData:

            let todolist2 = state.todos.concat(action.payload)
            return { ...state, todos: todolist2 }

        case DELETE_TODO:
            // console.log(action.payload)
            let newstate = { ...state }
            //  let index = null

            // for (let i = 0; i < newstate.todos.length; i++) {
            //     if (newstate.todos[i].id == action.payload) {
            //         index = i
            //         break
            //     }
            // }


            let deleted = newstate.todos.filter((singledata) => {
                //  console.log(action.payload)
                if (singledata.id == action.payload) {
                    return false
                }
                else {
                    return true
                }
            })
            // let todolist5 = state.todos.filter((valus) => valus.id !== action.payload)


            return { ...state, todos: deleted }

        case Temp:

            return { ...state, temp: action.payload }

        case EDIT:
            let newstate5 = { ...state }
            let newindex = null
            let newid = action.payload
            for (let i = 0; i < newstate5.todos.length; i++) {
                if (newstate5.todos[i].id == action.payload) {
                    newindex = i
                    break
                }
            }
            // console.log(newindex)
            return { ...state, temp: newstate5.todos[newindex].title, index: newindex, updatedid: newid }

        case Update2:
            let newstate6 = [...state.todos]
            newstate6[state.index] = action.payload
            console.log(newstate6)
            return { ...state, todos: newstate6, temp: "", index: undefined, updatedid: undefined }

    }

    return state

}





export default TodoReducer;