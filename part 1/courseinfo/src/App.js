
function App() {
  const course = {
    name: 'Half stack Application development',
    parts : [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
    

  const Header = (props) => {
    return(
      <div>
        <h1>{props.course.name}</h1>
      </div>
    )
  }

  const Part = (props) => {
    return(
      <div>
        <p>{props.sections} {props.ex}</p>
      </div>
    )
  }

  const Content = ({course}) => {
    let parts = course["parts"]
    const [part1,part2,part3] = parts
    return(
      <div>
       <Part sections={part1.name} ex = {part1.exercises}/>
       <Part sections={part2.name} ex = {part2.exercises}/>
       <Part sections={part3.name} ex = {part3.exercises}/>
      </div>
    )
  }

  const Total = ({course}) => {
  let total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises 
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

  return (
    <div className="App">
      <Header course = {course}/>
       
      <Content course={course}/>
       
       <Total course= {course}/>
      
    </div>
  );
}

export default App;
