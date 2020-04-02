import React, { useState, useEffect } from "react";
import { Button, TextField } from "lucid-ui";

const AddEmpForm = props => {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [project, setProject] = useState("");

  useEffect(() => {
    if (props.editing) {
      setId(props.currentEmp.id);
      setName(props.currentEmp.name);
      setDesignation(props.currentEmp.designation);
      setProject(props.currentEmp.project);
    }
  }, [props]);

  const handleSubmit = e => {
    const emp = { id, name, designation, project, edit: "Edit" };
    if (props.editing) {
      if (emp.name && emp.designation && emp.project) props.updateEmp(emp);
    } else {
      if (emp.name && emp.designation && emp.project) props.addEmp(emp);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <form className="form-control">
          <label>Employee Name</label>
          <TextField
            placeholder="Employee Name"
            value={name}
            onChange={value => setName(value)}
          />
          <label>Employee Designation</label>
          <TextField
            placeholder="Employee Designation"
            value={designation}
            onChange={value => setDesignation(value)}
          />
          <label>Employee Project</label>
          <TextField
            placeholder="Employee Project"
            value={project}
            onChange={value => setProject(value)}
          />
          <Button
            onClick={handleSubmit}
            kind="primary"
            size="small"
            type="button"
          >
            Add Employee
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddEmpForm;
