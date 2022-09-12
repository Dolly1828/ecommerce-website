// export const depositMoney = (amount) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'deposite',
//             payload:amount
//         })
//     }
// }

// export const withdrawMoney = (amount) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'withdraw',
//             payload:amount
//         })
//     }
// }


export const AddItem = (number) => {
    return (dispatch) => {
        dispatch({
            type: 'add',
            payload:number
        })
    }
}

export const RemoveItem = (number) => {
    return (dispatch) => {
        dispatch({
            type: 'remove',
            payload:number
        })
    }
}