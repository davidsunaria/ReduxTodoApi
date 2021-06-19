import { DELETE_TODO, LoadData, ADD_TODO } from "../action/types"
import { http } from "../BaseApi"



let intial = {
    todos: [],
    index: undefined
}



function TodoReducer(state = intial, action) {
    // console.log(action.payload)

    switch (action.type) {


        case ADD_TODO:

            let adddata = state.todos.concat(action.payload)

            //console.log(action.payload)
            return { ...state, todos: adddata }

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
                console.log(action.payload)
                if (singledata.id == action.payload) {
                    return false
                }
                else {
                    return true
                }
            })
            // let todolist5 = state.todos.filter((valus) => valus.id !== action.payload)


            return { ...state, todos: deleted }






    }

    return state

}





export default TodoReducer;