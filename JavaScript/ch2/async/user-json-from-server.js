/**
 * 1. 대량의 데이터를 서버에 요청을 가정
 * 2. 서버와 통신 시 fetch API 사용 - 왜 사용해야하는지? - 프로미스가 반환되기 때문에
 *      서버 요청 주소 : https://jsonplaceholder.typicode.com/users
 * 3. fetch API 실행 시 await 예약어 사용.
 * 4. response 되는 경우 JSON임. 객체로 변환.
 *    response.json() 실행 시 await 예약어 사용
 * 5. 객체 배열을 화면에 출력하기 위한 함수 구현
 * 
 */

// 1. 통신부 구현
function loadItems() {
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
}

loadItems().then((items) => {
    console.log(items);
    displayItems(items);
})
// 2. 화면 출력부 구현
function displayItems(items){
    const container = document.querySelector(".items");
    container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

function createHTMLString(item) {
    return `
    <li     class="item">
        <h3>${item.name}</h3>
        <p class="item__description">username: ${item.username}, <br>email: ${item.email} </p>
    </li>
    `;
}

// 3. 1번의 함수를 호출