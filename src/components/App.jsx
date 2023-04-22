import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = nameFeedback => {
    this.setState(oldData => {
      let obj = { ...oldData }; 
      obj[nameFeedback] = oldData[nameFeedback] + 1;

      return obj; 
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage =
    (this.state.good / this.countTotalFeedback()) * 100;
      
    return Math.round(positivePercentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    let total = this.countTotalFeedback();

    return (
      <div className={css.container}>
        <Section title="Please Leave feedback">
          <FeedbackOptions
            options={options}
            onLeavefeedback={this.updateState}
          />
        </Section>

        <Section title="Statistics">
        {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            /> ) : 
            (<Notification message="There is no feedback yet..." />)}
        </Section>
      </div>
    );
  }
}