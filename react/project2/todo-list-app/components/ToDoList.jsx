import { useState  } from "react";
import "./ToDoList.css"
import ToDoItem from "./ToDoItem";

const ToDoList = ({todo, onUpdate}) => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearchResult = () => {
        return search === ""
            ? todo
            : todo.filter( (it) => 
                it.content.toLowerCase().includes(search.toLowerCase()));
    }
    return (
        <div className="ToDoList">
            <h4>Todo List 🌱</h4>
            <input
                value={search}
                onChange={onChangeSearch} 
                className="searchbar" 
                placeholder="검색어를 입력하세요" 
            />
            <div className="list_wrapper">
                {getSearchResult().map( (it) => (
                    <ToDoItem key={it.id} {...it} onUpdate={onUpdate} />
                ))}
            </div>
        </div>
    );
};
export default ToDoList;