import { http } from "../BaseApi"
import { LoadData, DELETE_TODO, ADD_TODO } from "./types"



export const LoadApi = function (dispatch) {

    return () => {

        http.get("/todos").then((res) => {
            // console.log(res.data)
            let action = {
                type: LoadData,
                payload: res.data
            }

            dispatch(action)
        })

    }


}

export const Delete = function (dispatch) {

    return (data) => {
        http.delete("/todos/" + data).then((res) => {
            let action = {
                type: DELETE_TODO,
                payload: data
            }
            dispatch(action)

        })


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







