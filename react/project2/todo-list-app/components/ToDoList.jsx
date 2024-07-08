import "./ToDoList.css"
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
    return (
        <div className="ToDoList">
            <h4>Todo List 🌱</h4>
            <input className="searchbar" placeholder="검색어를 입력하세요" />
            <div className="list_wrapper">
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
            </div>
        </div>
    )
};
export default ToDoList;