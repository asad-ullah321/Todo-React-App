const title=""
const updecReducer=(state = title, action)=>{
    if (action.type==="updecription")
    {
        state= action.payload;
        console.log(state);

        return state;
    }
    else 
        return state;
}
export default updecReducer;