import { Link, routes } from '@redwoodjs/router'
import ToDoApp from 'src/components/ToDoApp/ToDoApp'

const HomePage = () => {
  return (
    <>
      <ToDoApp />
      {/* <ToDoApp todos={'not an arry'} /> */}
    </>
  )
}

export default HomePage
