const initialState = false;

const authentication = (state = initialState, action) =>{
    switch(action.type)
    {
        case "LOGIN": return true;
        case "LOGOUT": return false;
        default: return state;
    }
}

export default authentication;