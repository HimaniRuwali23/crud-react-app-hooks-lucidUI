import React, { useState } from "react";
import empList from "./data.js";
import EmployeesData from "./View/EmployeesData";
import { Button, Panel } from "lucid-ui";

const App = () => {
  const [empData, setEmpData] = useState(empList);
  return (
    <div className="container">
      <div className="row">
        <h1> List of Employees</h1>
      </div>
      <Panel>
        <Panel.Header>
          <strong>View Employees</strong>
        </Panel.Header>
        <EmployeesData empData={empData} />
        <Panel.Footer>
          <Button type="button" kind="primary" size="large">
            Add Employee
          </Button>
        </Panel.Footer>
      </Panel>
    </div>
  );
};

export default App;
