
import React from 'react';
import css from './feedback.module.css'

export class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };


      render(){

        return <div >
            <h1>Оставьте отзыв</h1>
            <ul className={css.btnList}>
                <li className={css.btn}><button type='button'>хорошо</button></li>
                <li className={css.btn}><button type='button'>средне</button></li>
                <li className={css.btn}><button type='button'>плохо</button></li>
            </ul>
            <h2>Cтатистика</h2>
            <ul>
                <li><p>Xорошо:</p></li>
                <li><p>Cредне:</p></li>
                <li><p>Плохо:</p></li>
                <li><p>Всего:</p></li>
                <li><p>Хороших отзывов:</p></li>
            </ul>
        </div>
        
    }





}
