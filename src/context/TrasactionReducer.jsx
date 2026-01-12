// Reducer Function
export const TransactionReducer = (state, action) => {

    switch (action.type) {
        case "HANDLE_MODAL":
            return {
                ...state,
                showModal: state.showModal ? false : true
            }
              case "CHANGE_THEME":
            return{
                ...state,
               theme : state.theme ? false: true 
            }

        case "SAVE_TRASACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
                showModal: false
            }

        case "REMOVE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }

        case "EDIT_TRANSACTION":
            return {
                ...state,
                 edit: { transaction: action.payload, isEdit: true },
                showModal: true
            }

        case "UPDATE_TRANSACTION":
            return {
                ...state,
                 transactions: state.transactions.map(transaction => transaction.id === action.payload.id ? action.payload : transaction),
               edit: { transaction: {}, isEdit: false },
                showModal: false
            }


        default:
            return state;
    }
} 