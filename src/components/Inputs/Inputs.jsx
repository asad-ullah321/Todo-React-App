import "./inputs.css"
import React from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreatore } from "../../state/index"
export const Inputs = () => {
    const title = useSelector(state=>state.title);
    const dec =useSelector(state=>state.dec);
    const dispatch = useDispatch();
    const {chngtitle, chngdecription, newtodo} = bindActionCreators(actionCreatore, dispatch);
  
    const handlesubmit=(e)=>{
        e.preventDefault();
        const object={title, dec};
        console.log(object);
        newtodo(object);
        chngtitle("");
        chngdecription("");

    }
  return (
    <div className="container py-2">
        <form onSubmit={handlesubmit}>
            <div>
            <label className="form-label">Enter title</label>
            <input className="form-control" type="text" value={title} onChange={(e) => chngtitle(e.target.value)}/>
            </div>
            <label className="form-label">Enter Description</label>
            <div>
            <textarea className="form-control" rows="3" value={dec} onChange={(e) => chngdecription(e.target.value)}></textarea>
            </div>
            <input type="submit" className="my-3"/>
        </form>
    </div>
  )
}
