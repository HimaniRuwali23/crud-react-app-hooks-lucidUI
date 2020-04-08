import React, { useState } from "react";
import empList from "./data.js";
import EmployeesData from "./View/EmployeesData";
import AddEmpForm from "./forms/AddEmpForm";
import EditEmpForm from "./forms/EditEmpForm";
import { Button, Panel, ButtonGroup } from "lucid-ui";
import _ from "lodash";

const App = () => {
  const [empData, setEmpData] = useState(empList.dtRowData);
  const [columnData, setColumnData] = useState(empList.dtColumnData);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const initialUser = [{ id: null, name: "", designation: "", project: "" }];
  const [currentEmp, setCurrentEmp] = useState([]);
  const [editDisabled, setEditDisabled] = useState(true);
  const [empId, setEmpId] = useState(null);
  const addEmp = (emp) => {
    const id = empData.length + 1;
    emp = {
      ...emp,
      id: id,
    };
    setEmpData([...empData, emp]);
    setShowAddForm(false);
  };
  const editEmp = (emp) => {
    currentEmp.push(emp);
    setCurrentEmp([...currentEmp]);
    setEmpId(emp.id);
    setEditDisabled(false);
  };

  const updateEmp = (newEmp) => {
    let data = {};
    currentEmp.find((element) => {
      data = element;
    });
    setEmpData(empData.map((emp) => (emp.id === data.id ? newEmp : emp)));
    setShowAddForm(false);
    setEditing(false);
    setEditDisabled(true);
  };

  const deleteEmp = () => {
    const updateData = empData.filter((data) => data.id !== empId);
    setEmpData(updateData);
    setShowAddForm(false);
    setDeleting(true);
    setEditDisabled(true);
  };
  const onSubmit = () => {
    setShowAddForm(true);
    setDeleting(false);
  };

  const onEdit = () => {
    setEditing(true);
    setDeleting(false);
  };

  return showAddForm ? (
    <AddEmpForm addEmp={addEmp} />
  ) : editing ? (
    <EditEmpForm
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
            <ButtonGroup.Button
              className="btn"
              isDisabled={editDisabled}
              size="small"
              onClick={deleteEmp}
            >
              Delete
            </ButtonGroup.Button>
          </ButtonGroup>
        </Panel.Header>
        <EmployeesData
          empData={empData}
          columnData={columnData}
          editEmp={editEmp}
          deleting={deleting}
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
