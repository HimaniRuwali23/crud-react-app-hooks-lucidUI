import React, { useState, useEffect } from "react";
import { Button, TextField, Dialog, Table } from "lucid-ui";
import _ from "lodash";

const EditEmpForm = (props) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [project, setProject] = useState("");

  const [emp, setEmp] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const { Thead, Tbody, Tr, Th, Td } = Table;

  useEffect(() => {
    let data = {};
    if (props.editing || props.deleting) {
      props.currentEmp.find((element) => {
        data = element;
      });
      setId(data.id);
      setName(data.name);
      setDesignation(data.designation);
      setProject(data.project);
      props.currentEmp.map((element) => {
        emp.push(element);
      });
      setEmp([...emp]);
    }
  }, [props]);

  const handleSubmit = () => {
    if (props.editing) {
      props.updateEmp(emp);
    }
    if (props.deleting) {
      const emp = [{ id: "", name: "", designation: "", project: "" }];
      setEmp([...emp]);
      props.deleteEmp(emp);
    }
  };

  const onNameChange = (value, id) => {
    const name = value;
    setEmp((currentEmp) =>
      currentEmp.map((x) =>
        x.id === id
          ? {
              ...x,
              name,
            }
          : x
      )
    );
  };

  const onDesigChange = (value, id) => {
    const designation = value;
    setEmp((currentEmp) =>
      currentEmp.map((x) =>
        x.id === id
          ? {
              ...x,
              designation,
            }
          : x
      )
    );
  };

  const onProjectChange = (value, id) => {
    const project = value;
    setEmp((currentEmp) =>
      currentEmp.map((x) =>
        x.id === id
          ? {
              ...x,
              project,
            }
          : x
      )
    );
  };

  return (
    <div className="container">
      <div className="row">
        <Dialog
          isComplex
          isShown={props.isShown}
          handleClose={props.handleClose}
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
              {emp.map((dt) => (
                <Tr key={dt.id}>
                  <Td>
                    <TextField
                      placeholder="Employee Name"
                      value={dt.name}
                      onChange={(value) => {
                        onNameChange(value, dt.id);
                      }}
                    />
                  </Td>
                  <Td>
                    <TextField
                      placeholder="Employee Designation"
                      value={dt.designation}
                      onChange={(value) => {
                        onDesigChange(value, dt.id);
                      }}
                    />
                  </Td>
                  <Td>
                    <TextField
                      placeholder="Employee Project"
                      value={dt.project}
                      onChange={(value) => {
                        onProjectChange(value, dt.id);
                      }}
                    />
                  </Td>
                </Tr>
              ))}
              <Tr>
                <Td>
                  <Button
                    size="small"
                    isDisabled={false}
                    onClick={handleSubmit}
                  >
                    {props.editing ? "Update" : "Delete"}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Dialog>
      </div>
    </div>
  );
};

export default EditEmpForm;
