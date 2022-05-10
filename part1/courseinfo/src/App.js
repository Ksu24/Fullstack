/*
TEMPLATE:
const METHOD = (props) => {
  return (
    <div>
      
    </div>
  )
}
*/

const Header = (props) => {    //создает элемент заголовок, возвращает заголовок, который передается через свойства

  return (
  <div>
    <h1>{props.name}</h1>    
  </div>
  )
}

const Part = (props) => {            //создает описание учебной части, название части и кол-во упражнений в ней

  return (
  <div>
    <p> {props.part.name} {props.part.exercises} </p>
  </div>
  )
}

const Content = (props) => {          //

  return (
    <div>
      {props.parts.map((part) => <Part part={part} />) }
    </div>
  )
}

const Total = (props) => {
let sum = 0
props.parts.forEach((part) => {
sum += part.exercises
})

  return (
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}


function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
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

  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
  );
}

export default App;
