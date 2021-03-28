import React,{useState} from 'react';
import Next from '../Assets/icon-next.svg';
import Prev from '../Assets/icon-prev.svg';
import '../Estilos/Style.css';

function Button(props){
    
    return(
        <div className='button'>
            <div className='prev' onClick={props.left}>
            <img src={Prev}></img>
            </div>
            <div className='next' onClick={props.right}>
            <img src={Next}></img>
            </div>
        </div>
    )
}

export default Button