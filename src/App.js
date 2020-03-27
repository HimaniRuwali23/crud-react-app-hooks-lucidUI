import React,  {useState}  from 'react';
import { Button, Panel } from 'lucid-ui';

const App = () => {
  
  return (
    <div className="container">
      <div className="row">
        <h1> List of Employees</h1>
      </div>
    <Panel>
    <Panel.Header>
      <strong>View Employees</strong>
    </Panel.Header>
        
        <Panel.Footer>
        <Button type="button" kind="primary" size="large">Add Employee</Button>
        </Panel.Footer>
       
       </Panel>
       </div>
  );
}

export default App;
