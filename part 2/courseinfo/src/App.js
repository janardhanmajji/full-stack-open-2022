import React from "react"

  function Course({courses}){

    const Header = ({courses}) => {
      return(
        <div>
          <h1>{courses.name}</h1>
        </div>
      )
    }

    const Content = ({courses}) => {
      return (
        <div>
        {courses.parts.map((part) => <Part part={part}/>)}
        </div>
  
      )
    }

  const tot = courses.parts.reduce((num,parts)=>{
      return num + parts.exercises
  },0)


    const Part = (props) => {
      return(
        <div>
          <p>{props.part.name} {props.part.exercises}</p>
        </div>
      )
    }

    const Total = () => {
      return(
        <div>
          <h2>total of {tot} exercise</h2>
        </div>
      )
    }

    return (
      <div className="App">
        <Header course = {courses}/>
         
        <Content course={courses}/>

        <Total course={courses}/>
      </div>
    );
  

  }

export default Course;
