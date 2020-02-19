const logReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LOG':           
            return state.concat([action.datalog])
        case 'DELETE_LOG':
            return state.concat([action.datalog])
        case 'UPDATE_LOG':
            return state.concat([action.datalog])
        default:
        return state;
    }
}
export default logReducer;