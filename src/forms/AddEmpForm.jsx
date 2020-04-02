import React, {useState, useEffect} from 'react';
import { Button, TextField } from 'lucid-ui';


const AddEmpForm = (props) => {
    const [id, setId]=useState(null);
    const [name, setName]=useState("");
    const [designation, setDesignation]=useState("");
    const [project, setProject]=useState("");

    const [emp, setEmp] = useState('');

    useEffect(() => {
        //setEmp(props.currentEmp)
       console.log("currentEmp", props.currentEmp)
        const name=props.currentEmp.name;
        const designation=props.currentEmp.designation;
        const id=props.currentEmp.id;
        if(props.editMode){
        setId(id);
        setName(name);
        setDesignation(designation);
        setProject(project);
        }
        
    }, [props])


    const handleSubmit = e =>{
        const emp={id,name,designation,project,edit:<Button size="small"> Edit</Button>, delete: <Button size="small"> Delete</Button>};
        //console.log("submit",emp)
        if(emp.name && emp.designation) props.addEmp(emp);
    }

    return (
        <div className="container">
            <div className="row">
            <form className="form-control">
                <label>Employee Name</label>
                <TextField
                placeholder='Employee Name'
                value={name}
                onChange={value=>setName(value)}
                />
                <label>Employee Designation</label>
                <TextField
                placeholder='Employee Designation'
                value={designation}
               
                onChange={value=>setDesignation(value)}
                />
                <label>Employee Project</label>
                <TextField
                placeholder='Employee Project'
                value={project}
                onChange={value=>setProject(value)}
                />
                <Button
                onClick={handleSubmit}
                kind="primary"
                size="small"
                type="button"
                >
                {props.editMode ? "Update" : "Add Employee" }   
                </Button>
            
            </form>
        </div>
        </div>
       
    )
}

export default AddEmpForm;