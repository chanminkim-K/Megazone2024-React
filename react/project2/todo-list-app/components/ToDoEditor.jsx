import "./ToDoEditor.css"

const ToDoEditor = () => {
    return (
        <div className="ToDoEditor">
            <h4>새로운 ToDo 작성하기 ✏️ </h4>
            <div className="editor_wrapper">
                <input placeholder="새로운 Todo..." />
                <button>추가</button>
            </div>
        </div>
    )
};
export default ToDoEditor;