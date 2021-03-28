import React,{useState} from 'react';
import '../Estilos/Style.css';

function Information(props){

    return(
        <div className='information'>
            <header>
                <img src={props.image} className='image'></img>
            </header>
            <main className='main'>
                <p className='text'>
                    {props.info}
                </p>
                <div className='person'>
                    <p className='name'>{props.name}</p>
                    <p className='profetion'>{props.profetion}</p>
                </div>
            </main>
        </div>
    )
}
export default Information;