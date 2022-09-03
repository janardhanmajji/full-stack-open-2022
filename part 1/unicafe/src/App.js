import { useState } from 'react'



const Statistics = ({good,neutral,bad,all,average,postive}) =>{
  
  if(good === 0 && neutral === 0 && bad === 0){
    return (
      <p>No feedback given</p>
    )
  }
  else
    return (
      <table>
        <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={ isNaN(average)? 0 : average}/>
        <StatisticLine text="positive" value={ isNaN(postive)? 0: postive + " %"}/>
        </tbody>
      </table>
    )
}

const StatisticLine = ({text,value}) => {
  return (
   
      <tr>
       <td>{text}</td>
       <td>{value}</td>
    </tr>

  )
} 



function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function increamentGood(){
    setGood(good+1);
  }

  function increamentNeutral(){
    setNeutral(neutral+1);
  }

  function increamentBad(){
    setBad(bad+1);
  }
  
  let all = (good+bad+neutral);
  let pos = (good/all)*100;
  let avg = (good-bad)/all;

  return (
    <div className="App">
        <h1>give feedback</h1>
        <button onClick={increamentGood}>good</button>
        <button onClick={increamentNeutral}>neutral</button>
        <button onClick={increamentBad}>bad</button>

        <h1>statistics</h1>


        <Statistics good={good} bad={bad} neutral={neutral} all={all} average={avg} postive={pos}/>
    </div>
  );
}

export default App;
