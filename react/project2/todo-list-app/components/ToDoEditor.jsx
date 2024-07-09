import { useContext, useRef, useState } from "react";
import { ToDoDispatchContext } from "../src/App";

import "./ToDoEditor.css"

const ToDoEditor = () => { // Props 객체 구조 분해 할당
    const {onCreate} = useContext(ToDoDispatchContext);

    const [content, setContent] = useState("");
    const inputRef = useRef(); // 할 일 입력 폼을 제어할 inpuRef 객체 생성
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if(!content){
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent(""); // 새 아이템 추가 후, 입력 폼 초기화
    }

    /* Enter 키를 눌러 아이템 추가하기 */
    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    }

    return (
        <div className="ToDoEditor">
            <h4>새로운 ToDo 작성하기 ✏️ </h4>
            <div className="editor_wrapper">
                <input
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent} 
                    onKeyDown={onKeyDown}
                    placeholder="새로운 Todo..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
};
export default ToDoEditor;