import React, {useState} from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';



 export const App = () => {
 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);
 const options = { good: setGood, neutral: setNeutral, bad: setBad };
  
  const handleChange = (e) => { 
    const { name } = e.target;
    options[name](prev => prev + 1);
  };

  function countTotalFeedback(){
    return good + neutral + bad;
  }
 
  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    const percentage = total ? ((good / total) * 100).toFixed() : 0;
    return percentage;
  }
  
    
  const nameFeedback = Object.keys(options);
  const total = countTotalFeedback();

  return (
      <> 
      <Section title="Please leave feedback">  
        <FeedbackOptions options={nameFeedback} onLeaveFeedback={handleChange} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
     
    </>
  );
};

