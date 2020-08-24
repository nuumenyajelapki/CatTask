import React, { useState } from 'react';
import '../index.css';
import UndrCardTxt from './UndrCardTxt'
import UndrSelected from './UndrSelected'
import TopTxt from './topTxt'

function undrSelected(isSelected, type){
    if(!isSelected){
        return <UndrCardTxt />
    } else {
        if(type == 1) return <UndrSelected txt="Печень утки разваренная с артишоками"/>
        if(type == 2) return <UndrSelected txt="Головы щучьи с чесноком да свежайшая сёмгушка."/>
        if(type == 3) return <UndrSelected txt="Филе из цыплят с трюфелями в бульоне."/>
    }
}

function topTxt(leave){
    if(!leave){
        return <TopTxt txt="Сказочное заморское яство" />
    } else return <TopTxt txt="Котэ не одобряет?" />
}

function Card(props){
    const [isSelected, select] = useState(false)
    let activeCard = 'card-bot'
    let activeCircle = 'card__weight-circle'
    let leave = false
    if(isSelected){
        activeCard += ' activeCard'
        activeCircle += ' activeCircle'
    }
    if(props.disabled == "false"){
        return(
            <div onClick={() => {
                select(!isSelected)
            }}
            onMouseLeave={() => {
                if(isSelected) {
                    leave = true
                    alert("Котэ не одобряет?")
                }
            }} 
            className="card">
                <div className={activeCard}>
                    <div className="card-top">
                        <section className="card__txt">
                            {topTxt(leave)}
                            <div className="card__txt-2">Нямушка</div>
                            <div className="card__txt-3">{props.secondLine}</div>
                            <div className="card__txt-4">{props.offer}</div>
                        </section>
                        <section className="card__weight">
                            <div className={activeCircle}>
                                <div className="card__weight-txt1">{props.weight}</div>
                                <div className="card__weight-txt2">кг</div>
                            </div>
                        </section>
                    </div>
                </div> 
                {undrSelected(isSelected, props.type)}
            </div>
        );
    } else {
        return(
            <div className="card">
                <div className="card-bot disabledCard">
                    <div className="card-top disabledCardTop">
                        <section className="card__txt">
                            <TopTxt txt="Сказочное заморское яство" />
                            <div className="card__txt-2">Нямушка</div>
                            <div className="card__txt-3">{props.secondLine}</div>
                            <div className="card__txt-4">{props.offer}</div>
                        </section>
                        <section className="card__weight">
                            <div className="card__weight-circle disabledCircle">
                                <div className="card__weight-txt1">{props.weight}</div>
                                <div className="card__weight-txt2">кг</div>
                            </div>
                        </section>
                    </div>
                </div> 
                <div className="card__dopTxt-txt" style={{color: '#FFFF66'}}>Печалька, {props.secondLine} закончился.</div>
            </div>
        );
    }
}

export default Card;