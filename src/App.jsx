import React, {useState} from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';



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
    const total = good + neutral + bad;
    return total;
  }
 
  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    const percentage = ((good / total) * 100).toFixed();
    return percentage;
  }
  
    
  const nameFeedback = Object.keys(options);

  return (
      <> 
      <Section title="Please leave feedback">  
        <FeedbackOptions options={nameFeedback} onLeaveFeedback={handleChange} />
      </Section>

     <Section title="Statistics">
          <Statistics 
          good={good} 
          neutral={neutral }
           bad={bad} 
          total={countTotalFeedback()} 
          positivePercentage={countPositiveFeedbackPercentage()}>

          </Statistics>
      </Section>
     
    </>
  );
};
