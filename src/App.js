import React, { useState } from "react";
import empList from "./data.js";
import EmployeesData from "./View/EmployeesData";
import AddEmpForm from "./forms/AddEmpForm";
import { Button, Panel, ButtonGroup } from "lucid-ui";

const App = () => {
  const [empData, setEmpData] = useState(empList.dtRowData);
  const [columnData, setColumnData] = useState(empList.dtColumnData);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const initialUser = { id: null, name: "", designation: "", project: "" };
  const [currentEmp, setCurrentEmp] = useState(initialUser);
  const [editDisabled, setEditDisabled] = useState(true);
  const addEmp = emp => {
    const id = empData.length + 1;
    emp = {
      ...emp,
      id: id
    };
    setEmpData([...empData, emp]);
    setShowAddForm(false);
  };
  const editEmp = emp => {
    setCurrentEmp(emp);
    setEditDisabled(false);
  };

  const updateEmp = newEmp => {
    setEmpData(empData.map(emp => (emp.id === currentEmp.id ? newEmp : emp)));
    setShowAddForm(false);
    setEditing(false);
    setEditDisabled(true);
  };

  const onSubmit = () => {
    setShowAddForm(true);
  };

  const onEdit = () => {
    setEditing(true);
  };

  return showAddForm || editing ? (
    <AddEmpForm
      addEmp={addEmp}
      currentEmp={currentEmp}
      editing={editing}
      updateEmp={updateEmp}
    />
  ) : (
    <div className="container">
      <div className="row">
        <h1> List of Employees</h1>
      </div>
      <Panel>
        <Panel.Header>
          <strong>Actions</strong>
          <ButtonGroup selectedIndices={[0, 1]}>
            <ButtonGroup.Button
              className="btn"
              size="small"
              isDisabled={editDisabled}
              onClick={onEdit}
            >
              Edit
            </ButtonGroup.Button>
            <ButtonGroup.Button className="btn" isDisabled={true} size="small">
              Delete
            </ButtonGroup.Button>
          </ButtonGroup>
        </Panel.Header>
        <EmployeesData
          empData={empData}
          columnData={columnData}
          editEmp={editEmp}
        />
        <Panel.Footer>
          <Button type="button" kind="primary" size="large" onClick={onSubmit}>
            Add Employee
          </Button>
        </Panel.Footer>
      </Panel>
    </div>
  );
};

export default App;
