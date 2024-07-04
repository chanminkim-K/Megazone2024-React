function Body({children}){
    console.log(children);
    return <div className="body">{children}</div>
}

// function Body({name, location, favorList}){
//     console.log(name, location, favorList);
//     return(
//         <div className="body">
//             {name}은 {location}에 거주합니다.
//             <br />
//             {favorList.length}개의 음식을 좋아합니다.
//         </div>
//     ) 
// }

Body.defaultProps = {
    favorList: [],
};

export default Body;