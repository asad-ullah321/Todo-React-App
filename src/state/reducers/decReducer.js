const title=""
const decReducer=(state = title, action)=>{
    if (action.type==="chngdecription")
    {
        state= action.payload;
        return state;
    }
    else 
        return state;
}
export default decReducer;