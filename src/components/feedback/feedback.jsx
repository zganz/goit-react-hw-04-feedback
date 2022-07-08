
import React from 'react';
import css from './feedback.module.css'
   

export class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

      btnGood = () => {
        this.setState(prevState => {
            return {good: prevState.good + 1,}
        })
      }

      btnNeutral = () => {
        this.setState(prevState => {
            return {neutral: prevState.neutral + 1,}
        })
    }

    btnBad = () => {
        this.setState(prevState => {
            return {bad: prevState.bad + 1,}
        })
    }



    countTotalFeedback() {
        let total = 0;
        // for (const key in this.state) {
        //   total = total + this.state[key];
        // }
        total = this.state.good + this.state.neutral + this.state.bad
        return total;
      }
    
      countPositiveFeedbackPercentage() {
        let total = 0;
        for (const key in this.state) {
          total = total + this.state[key];
        }
        let percentage = Math.round((this.state.good / total) * 100);
        return percentage;
      }


      render(){

        return <div >
            <h1>Оставьте отзыв</h1>
            <ul className={css.btnList}>
                <li className={css.btn}><button type='button' onClick={this.btnGood}>хорошо</button></li>
                <li className={css.btn}><button type='button' onClick={this.btnNeutral}>средне</button></li>
                <li className={css.btn}><button type='button' onClick={this.btnBad}>плохо</button></li>
            </ul>
            <h2>Cтатистика</h2>
            <ul>
                <li><p>Xорошо: <span>{this.state.good}</span></p></li>
                <li><p>Cредне: <span>{this.state.neutral}</span></p></li>
                <li><p>Плохо: <span>{this.state.bad}</span></p></li>
                <li><p>Всего: <span>{this.countTotalFeedback()}</span></p></li>
                <li><p>Хороших отзывов: <span>{this.countPositiveFeedbackPercentage()}%</span></p></li>
            </ul>
        </div>
        
    }





}
