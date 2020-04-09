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
  const [isShown, setIsShown] = useState(false);
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
    setCurrentEmp(emp);
    setEmpId(emp.id);
    setEditDisabled(false);
  };

  const editAllEmp = (emp) => {
    setCurrentEmp(emp);
    setEditDisabled(false);
  };

  const updateEmp = (newEmp) => {
    setEmpData(newEmp);
    setShowAddForm(false);
    setEditing(false);
    setEditDisabled(true);
  };

  const deleteEmp = (newEmp) => {
    setEmpData(newEmp);
    setShowAddForm(false);
    setDeleting(false);
    setEditDisabled(true);
  };

  const handleShow = (isShown) => {
    setIsShown(isShown);
    setShowAddForm(false);
    setEditing(false);
    setDeleting(false);
    setEditDisabled(true);
  };
  const onSubmit = () => {
    setShowAddForm(true);
    setDeleting(false);
  };

  const onEdit = () => {
    setEditing(true);
    setDeleting(false);
    setIsShown(true);
  };

  const onDelete = () => {
    setIsShown(true);
    setEditing(false);
    setDeleting(true);
  };

  return showAddForm ? (
    <AddEmpForm addEmp={addEmp} />
  ) : editing || deleting ? (
    <EditEmpForm
      currentEmp={currentEmp}
      editing={editing}
      updateEmp={updateEmp}
      deleting={deleting}
      deleteEmp={deleteEmp}
      handleClose={_.partial(handleShow, !isShown)}
      isShown={isShown}
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
              onClick={onDelete}
            >
              Delete
            </ButtonGroup.Button>
          </ButtonGroup>
        </Panel.Header>
        <EmployeesData
          empData={empData}
          columnData={columnData}
          editEmp={editEmp}
          editAllEmp={editAllEmp}
          deleting={deleting}
          deleteEmp={deleteEmp}
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
