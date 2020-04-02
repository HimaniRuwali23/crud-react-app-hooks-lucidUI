import React, { useState } from "react";
import empList from "./data.js";
import EmployeesData from "./View/EmployeesData";
import AddEmpForm from "./forms/AddEmpForm";
import { Button, Panel } from "lucid-ui";

const App = () => {
  const [empData, setEmpData] = useState(empList.dtRowData);
  const [columnData, setColumnData] = useState(empList.dtColumnData);
  const [showAddForm, setShowAddForm ]=useState(false);
  const [editing, setEditing] = useState(false)
  const initialEmp = {id: null, name: '', designation: '', project:''};

  const [currentEmp, setCurrentEmp] = useState(initialEmp);

  const addEmp = emp =>{
    emp.id=empData.length+1;
    setEmpData([...empData,emp]);
    //console.log("add Emp",empData)
    setShowAddForm(false);
  }

  const editEmp = (id, emp) => {
    console.log("editEmp", id,emp)
    setEditing(true);
    setCurrentEmp(emp);
  }

  const onSubmit=()=>{
    setShowAddForm(true);
  }

  return (
      showAddForm || editing ?
       (<AddEmpForm addEmp={addEmp} editMode={editing}  currentUser={currentEmp} />)
       :
       (
         <div className="container">
      <div className="row">
        <h1> List of Employees</h1>
      </div>
      <Panel>
        <Panel.Header>
          <strong>View Employees</strong>
        </Panel.Header>
        <EmployeesData empData={empData} columnData={columnData} editEmp={editEmp} />
        <Panel.Footer>
          <Button type="button" kind="primary" size="large" onClick={onSubmit}>
            Add Employee
          </Button>
        </Panel.Footer>
      </Panel>
    </div>
    )
    );

};

export default App;
