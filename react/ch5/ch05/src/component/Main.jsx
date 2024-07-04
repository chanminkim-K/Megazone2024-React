import "./Main.css"

function Main(){
    // 변수 선언
    const number = 10;
    const obj = {a:1};
    
    /**
     * session(로그인 성공 상태) 있다고 가정하고,
     * 객체를 초기화 해서,
     * 
     * 로그인 된 경우 => 로그아웃
     * 로그아웃이 된 경우 => 로그인
     * 
     * 1. return 하나로 하는 방법
     * 
     * 2. return 둘로 하는 방법
     */

    const user = { 
        userName : "김찬민",
        loginFlag : true,
    }

    // 로그인 상태에 따른 UI 상태를 반환.
    if(user.loginFlag) {
        return (
            <div className="logout">
                {user.userName}님, 반갑습니다.
            </div>
        )
    }
    else {
        return(
            <div>
                <a href="#">로그인</a>
            </div>
        )
    }
    
  }

  export default Main;