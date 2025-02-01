import React from "react";
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import '../style.css'

class HeartButton extends React.Component{
    state={
        isChecked: false,
    };

    onClick=()=>{
        this.state.isChecked ?
        this.setState({
            isChecked: false,
        })
        :
        this.setState({
            isChecked: true,
        });
    }

    render(){
        return(
            <div className="icons-list" onClick={this.onClick}> 
                {this.state.isChecked ?
                <HeartFilled style={{color:'orange', fontSize: '25px'}}/> :
                <HeartOutlined style={{fontSize:'25px'}}/>}
            </div>
        )
    }
}

export default HeartButton;