import React, { useState, useEffect } from "react";
import { Button, TextField, Dialog, Table } from "lucid-ui";
import _ from "lodash";

const EditEmpForm = (props) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [project, setProject] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [emp, setEmp] = useState([]);

  const { Thead, Tbody, Tr, Th, Td } = Table;

  useEffect(() => {
    if (props.editing) {
      let data = {};
      props.currentEmp.find((element) => {
        data = element;
      });
      setId(data.id);
      setName(data.name);
      setDesignation(data.designation);
      setProject(data.project);
      setIsShown(true);
      let empData = [];
      props.currentEmp.map((element) => {
        empData = element;

        emp.push(empData);
        setEmp([...emp]);
      });
    }
  }, [props]);

  const handleSubmit = (e) => {
    const data = { id, name, designation, project };
    emp.push(data);
    setEmp(...emp);
    if (props.editing) {
      //props.updateEmp(emp);
    }
  };

  const handleShow = (isShown) => {
    setIsShown(isShown);
  };

  return (
    <div className="container">
      <div className="row">
        <Dialog
          isComplex
          isShown={isShown}
          handleClose={_.partial(handleShow, !isShown)}
          Header="Edit Employee Data"
          size="medium"
          height={500}
        >
          <Table>
            <Thead>
              <Tr>
                <Th>Employee Name</Th>
                <Th>Employee Designation</Th>
                <Th>Employee Project</Th>
              </Tr>
            </Thead>
            <Tbody>
              {props.currentEmp.map((emp, index) => (
                <Tr key={index}>
                  <Td>
                    <TextField
                      placeholder="Employee Name"
                      value={emp.name}
                      onChange={(value) => setName(emp.name)}
                    />
                  </Td>
                  <Td>
                    <TextField
                      placeholder="Employee Designation"
                      value={emp.designation}
                      onChange={(value) => setDesignation(emp.designation)}
                    />
                  </Td>
                  <Td>
                    <TextField
                      placeholder="Employee Project"
                      value={emp.project}
                      onChange={(value) => setProject(emp.project)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Button
            onClick={handleSubmit}
            kind="primary"
            size="small"
            type="button"
          >
            Update
          </Button>
        </Dialog>
      </div>
    </div>
  );
};

export default EditEmpForm;
