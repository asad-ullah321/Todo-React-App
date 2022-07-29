const title=""
const uptitleReducer=(state = title, action)=>{
    if (action.type==="uptitle")
    {
        
        state= action.payload;
        console.log(state);
        return state;
    }
    else 
        return state;
}
export default uptitleReducer;