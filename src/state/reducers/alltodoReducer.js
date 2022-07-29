const todo = [{title:"Assinment DB", dec:"Dealine: 12pm today"}]
const alltodoReducer=(state = todo, action)=>{
    if (action.type==="addnewtodo")
    {
        if(action.payload.title!=="" &&action.payload.dec!=="")
        {
            let newarray=[...state];
            newarray.push(action.payload);
            state = [...newarray];
        }
        
        return state;
    }
    else if(action.type==="del")
    {
        const newarray = [...state.filter(c => c.title !== action.payload.title)]
        state = [...newarray];
        //console.log(state);
        return state;

    }
    else if(action.type==="updatedetails")
    {
        const index = state.findIndex(c => c.title === action.payload.title)
        const newarray = [...state];
        newarray[index].title=action.newpayload.title;
        newarray[index].dec= action.newpayload.dec;
        state = [...newarray];
        console.log(state);
        return state;
    }
    else 
        return state;
}
export default alltodoReducer;