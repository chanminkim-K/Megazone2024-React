import './App.css'
import { useReducer, useRef } from "react";
import Header from '../components/Header'
import ToDoEditor from '../components/ToDoEditor'
import ToDoList from '../components/ToDoList'
import TestComp from '../components/TestComp';
import { act } from 'react';
import { useCallback } from 'react';



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

// reducer 함수
function reducer(state, action){
  // 상태 변화 코드
  switch (action.type){
    case "CREATE":{
      return [action.newItem, ...state];
    }
    case "UPDATE":{
      return state.map((it) =>
        it.id === action.targetId
          ? {
            ...it,
            isDone: !it.isDone,
          }
          : it
        );
    }
    case "DELETE":{
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}

function App() {
  // 1. 할 일 아이템의 상태 관리
  //    State 변수 todo의 기본값을 빈 배열로 초기화
  // const [todo, setTodo] = useState([]); 

  // 2. 목 데이터 설정
  //    State 변수 todo의 기본값으로 목 데이터 전달
  const [todo, dispatch] = useReducer(reducer, mockTodo); 

  // 3. 아이템 추가 함수 만들기
  //    <추가> 버튼 클릭시 App에 할 일 데이터 전달하고 추가 이벤트 발생했음을 알려야 함
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      }
    });
    idRef.current += 1;
  }

  // 4. 아이템 수정 함수 만들기
  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  },[]);

  // 5. 아이템 삭제 함수 만들기
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  },[]);
  
  return (
    <div className='App'>
      {/* <TestComp /> */}
      <Header />
      <ToDoEditor onCreate={onCreate}/>
      <ToDoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
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