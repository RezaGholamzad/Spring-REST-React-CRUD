import React from 'react';
import './App.css';
import InstructorApp from "./component/InstructorApp";
class App extends React.Component{
    render() {
      return (
          <div className="container">
              <InstructorApp/>
          </div>
      );
    }
}

export default App;

