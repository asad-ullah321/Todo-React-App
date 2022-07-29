const title=""
const titleReducer=(state = title, action)=>{
    if (action.type==="chngtitle")
    {
        state= action.payload;
        return state;
    }
    else 
        return state;
}
export default titleReducer;