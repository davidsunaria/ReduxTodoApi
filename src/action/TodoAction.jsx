import { http } from "../BaseApi"
import { LoadData, DELETE_TODO, ADD_TODO, Temp, UPDATE_TODO, EDIT, Update2 } from "./types"



export const LoadApi = () => {

    return (dispatch) => {

        http.get("/todos").then((res) => {
            // console.log(res.data)
            dispatch({
                type: LoadData,
                payload: res.data
            })
        })

    }


}

export const InputData = (dispatch) => {

    return (data) => {

        dispatch({
            type: Temp,
            payload: data
        })

    }


}

export const Delete = (data) => {

    return (dispatch) => {
        http.delete("/todos/" + data).then((res) => {

            dispatch({
                type: DELETE_TODO,
                payload: data
            })

        })

    }

}

export const Update = (data) => {

    return (dispatch) => {
        //http.delete("/todos/" + data).then((res) => {

        dispatch({
            type: EDIT,
            payload: data
        })

        //  })

    }

}
export const Add = function (dispatch) {

    return (data) => {
        http.post("todos", data).then((res) => {

            let action = {
                type: ADD_TODO,
                payload: res.data
            }

            dispatch(action)
        })

    }

}


export const UpdateTodo = (dispatch) => {
    return (data) => {
        http.patch("/todos/" + data.id, { title: data.title }).then((res) => {
            //console.log(res.data)
            dispatch({
                type: Update2,
                payload: res.data
            })

        })
        console.log(data)
    }

}







