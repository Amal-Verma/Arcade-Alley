import React from 'react';

class Snake extends React.Component{
    constructor(props){
        super(props);
    }

    static getDerivedStateFromProps(props,state){
        setInterval(()=>{
            var body = props.snakeList;
            body[0] = [(body[0][0]+1)%20, body[0][1]]
            props.updateSnakeList(body);
        },5000)
    }

    render(){
        return(
            null
        )
    }
};

export default Snake;