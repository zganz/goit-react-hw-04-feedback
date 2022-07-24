// import React from 'react';
import React, { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  onButtonClick = event => {
    const clickTarget = event.target.textContent.toLowerCase();
  };

  return (
    <div>
      <Section title="Оставьте отзыв">
        <FeedbackOptions
          // options={Object.keys(this.state)}
          onLeaveFeedback={this.onButtonClick}
        />
      </Section>
      <Section title="Cтатистика">
        {/* {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )} */}
      </Section>
    </div>
  );
}
// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onButtonClick = event => {
//     const clickTarget = event.target.textContent.toLowerCase();
//     this.setState(prevState => {
//       return {
//         [clickTarget]: prevState[clickTarget] + 1,
//       };
//     });
//   };

//   countTotalFeedback() {
//     let total = 0;
//     total = this.state.good + this.state.neutral + this.state.bad;
//     return total;
//   }

//   countPositiveFeedbackPercentage() {
//     let total = 0;
//     for (const key in this.state) {
//       total = total + this.state[key];
//     }
//     let percentage = Math.round((this.state.good / total) * 100);
//     return percentage;
//   }

//   render() {
//     return (
//       <div>
//         <Section title="Оставьте отзыв">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onButtonClick}
//           />
//         </Section>

//         <Section title="Cтатистика">
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
