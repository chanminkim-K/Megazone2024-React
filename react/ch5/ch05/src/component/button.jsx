/**
 * props.color.toUpperCase() => 오류 발생
 * 
 * - 원인
 *   두 번째 버튼은 color 가 undefined 임
 *   undefined 이므로 toUpperCase()를 적용할 수 없음
 * 
 *   값이 전달될 수도 있꼬, 값이 전달되지 않을 수도 있음
 * 
 *   => 기본값을 설정하면 해결됨
 */
// props 는 객체 참조 변수이므로 
// 객체의 프로퍼티를 사용해서 구분 처리하고 있음
// const Button = (props) => {
//     console.log(props);
//     return <button style={{color: props.color}}>
//         {props.text} - {props.color.toUpperCase()}
//         </button>
// }
// //props.color.toUpperCase() => 오류 발생 해결 방법
// // 아래의 코드를 추가한 후,         
// // 브라우저에서 새로고침해서 확인
// Button.defaultProps = {
//     color : "green",
// };

// 객체 구조 분해 할당을 사용한 처리
// 객체의 프로퍼티 명과 동일하게 매개변수로 정의
const Button = ( {text, color = "green", children} ) => {

    const onCilckButton = () => {

    }

    return (
        <button
        onClick={ () => {
            console.log(text);
        }} 
        style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
    )
}

// Button.defaultProps = {
//     color : "green",
// };

export default Button;