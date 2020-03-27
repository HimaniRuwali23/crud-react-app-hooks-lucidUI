import React, {useState} from 'react';
import { Button, DataTable } from 'lucid-ui';
import _ from 'lodash';


const EmployeesData = (props) => {
    const initialEmpState = {
        activeIndex: 1,
        currentlySortedField: 'id',
        currentlySortedFieldDirection: 'down',
        data:props.empData
      }

      

    const [emp] = useState(initialEmpState)
    return (
        <div>
            <style>
                {
                '.child { display: none; } .lucid-Table-Tr:hover .child { display: block; }'
                }
            </style>
            <DataTable
          data={_.map(emp.data, (row, index) =>
            index === emp.activeIndex ? { ...row, isActive: true } : row
          )}
          density='extended'
          isFullWidth
          minRows={4}
          //isSelectable
          isActionable
        >
        <DataTable.Column
            field='id'
            width={41}
            align='left'
            hasBorderLeft
            isSortable
            isSorted={emp.currentlySortedField === 'id'}
            sortDirection={emp.currentlySortedFieldDirection}
          >
            ID
          </DataTable.Column>
          <DataTable.Column
            field='name'
            width={100}
            align='left'
            hasBorderLeft
            isSortable
            isSorted={emp.currentlySortedField === 'id'}
            sortDirection={emp.currentlySortedFieldDirection}
          >
            Name
          </DataTable.Column>
          <DataTable.Column
            field='designation'
            width={100}
            align='left'
            hasBorderLeft
            isSortable
            isSorted={emp.currentlySortedField === 'id'}
            sortDirection={emp.currentlySortedFieldDirection}
          >
            Designation
          </DataTable.Column>
       
          <DataTable.Column
            field='project'
            width={100}
            align='left'
            hasBorderLeft
            isSortable
            isSorted={emp.currentlySortedField === 'id'}
            sortDirection={emp.currentlySortedFieldDirection}
          >
            Project
          </DataTable.Column>
       
          <DataTable.Column field='edit' align='center' width={50}/>
          <DataTable.Column field='delete' align='center' width={50}/>
        
       
        
          </DataTable>
        </div>
    )
}

export default EmployeesData;