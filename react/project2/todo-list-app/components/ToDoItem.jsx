import React, {useContext} from "react";
import { ToDoDispatchContext } from "../src/App";
import "./ToDoItem.css"

const ToDoItem = ({ id, content, isDone, createdDate}) => {
    console.log(`${id} ToDoItem 업데이트`);

    const {onUpdate, onDelete} = useContext(ToDoDispatchContext);

    const onChangeCheckbox = () => {
        onUpdate(id);
    }
    const onClickDelete = () => {
        onDelete(id);
    }
    return(
        <div className="ToDoItem">
            <div className="checkbox_col">
                <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
            </div>
            <div className="title_col">{content}</div>
            <div className="date_col">
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    )
};
export default React.memo(ToDoItem);