const Viwer = ({count}) => {
    return (
        <div>
            <div>현재 카운트: </div>
            {count > 0 ? 
                <h1 style={{color:"green"}}>{count}</h1> : 
             count === 0 ? 
                <h1 style={{color:"gray"}}>{count} </h1> :
                <h1 style={{color:"red"}}>{count} </h1>}
        </div>
    );
};

export default Viwer;