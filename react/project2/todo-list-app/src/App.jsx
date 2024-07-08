import './App.css'
import { useState, useRef } from "react";
import Header from '../components/Header'
import ToDoEditor from '../components/ToDoEditor'
import ToDoList from '../components/ToDoList'

/**
 * 목 데이터 설정하기
 *  - 목 데이터 : 모조품 데이터 = 테스트를 목적으로 사용하는 데이터
 */
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  // 1. 할 일 아이템의 상태 관리
  //    State 변수 todo의 기본값을 빈 배열로 초기화
  // const [todo, setTodo] = useState([]); 

  // 2. 목 데이터 설정
  //    State 변수 todo의 기본값으로 목 데이터 전달
  const [todo, setTodo] = useState(mockTodo); 

  // 3. 아이템 추가 함수 만들기
  //    <추가> 버튼 클릭시 App에 할 일 데이터 전달하고 추가 이벤트 발생했음을 알려야 함
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem =  {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  }

  // 4. 아이템 수정 함수 만들기
  const onUpdate = (targetId) => {
    setTodo(
      todo.map( (it) =>
        it.id === targetId ? {...it, isDone: !it.isDone} : it
      )
    );
  };
  
  return (
    <div className='App'>
      <Header />
      <ToDoEditor onCreate={onCreate}/>
      <ToDoList todo={todo} onUpdate={onUpdate}/>
    </div>
  )
}

export default App
/** 
 * 컴포넌트 별 구현해야 할 기능
 * 
 *  - App : 할 일 데이터 관리하기
 *  - Header : 오늘의 날짜 표시
 *  - ToDoEditor : 새로운 할 일 아이템 생성 => Create
 *  - ToDoList : 검색에 따라 필터링된 할 일 아이템 렌더링 => Read
 *  - ToDoItem : 할 일 아이템의 수정 및 삭제 => Update, Delete
 * 
 */