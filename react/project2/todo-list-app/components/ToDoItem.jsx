import "./ToDoItem.css"

const ToDoItem = () => {
    return(
        <div className="ToDoItem">
            <div className="checkbox_col">
                <input type="checkbox" />
            </div>
            <div className="title_col">할 일</div>
            <div className="date_col">{new Date().toLocaleDateString()}</div>
            <div className="btn_col">
                <button>삭제</button>
            </div>
        </div>
    )
};
export default ToDoItem;