import './App.css';
import React from 'react';
import Home from './Home';
import ClassComponent from './ClassComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import RoutesComp from './Components/RoutesComp';
import ComponentC from './Components/usecontext/ComponentC';
import ComponentB from './Components/usecontext/ComponentB';
import UseReducercomp from './Components/useReducer/UseReducercomp';


export const UserContext = React.createContext();


function App() {

  let studentMarks = [10,20,30,40];
  let studentsDetails = {
      name:'virat',
      age:40
  }

  return (
    <div className="App">
      <Header />
      <RoutesComp />

      <hr/>
    {/* useContext */}
      {/* <UserContext.Provider value={"this is Usecontext"}>
          <ComponentC />
      </UserContext.Provider> */}

      {/* useReducer */}
      <UseReducercomp />
      
      {/* <h2 className="text-primary">Welcome to ReactJs</h2>
      <Home name="Tom" age="30" studentMarks={studentMarks}  studentDetails={studentsDetails} /> */}
      {/* <ClassComponent name="jerry" age="35" studentMarks={studentMarks} /> */}
    </div>
  );
}

export default App;
