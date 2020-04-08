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
  const [isDisabled, setIsDisabled] = useState(true);

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
      props.currentEmp.map((element) => {
        emp.push(element);
      });
      setEmp([...emp]);
    }
  }, [props]);

  const handleSubmit = (dt) => {
    const updateData = emp.filter((dat) => dat.id === dt.id);
    let data = {};
    updateData.find((element) => {
      data = element;
    });
    props.updateEmp(data);
  };

  const handleChange = (value, index) => {
    setIsDisabled(false);
    const name = value;
    setName(value);
    const data = { id, name, designation, project };
    setEmp(emp.map((empDt) => (empDt.id === data.id ? data : empDt)));
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
              {emp.map((dt, index) => (
                <Tr key={index}>
                  <Td>
                    <TextField
                      placeholder="Employee Name"
                      value={dt.name}
                      onChange={(value) => handleChange(value, index)}
                    />
                  </Td>
                  <Td>
                    <TextField
                      placeholder="Employee Designation"
                      value={dt.designation}
                      onChange={(value) => setDesignation(dt.designation)}
                    />
                  </Td>
                  <Td>
                    <TextField
                      placeholder="Employee Project"
                      value={dt.project}
                      onChange={(value) => setProject(dt.project)}
                    />
                  </Td>
                  <Td>
                    <Button
                      size="small"
                      isDisabled={isDisabled}
                      onClick={() => handleSubmit(dt)}
                    >
                      Update
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Dialog>
      </div>
    </div>
  );
};

export default EditEmpForm;
