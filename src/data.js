import React, {useState} from 'react';
import { Button } from 'lucid-ui';

const empList = {
    dtRowData:[
        {
            id: 1,
            name: 'Avneesh',
            designation: 'React developer',
            project:'Appnexus',
            isSelected: true,
            edit: <Button size="small"> Edit</Button>,
            delete: <Button size="small"> Delete</Button>
           
        },
        {
            id: 2,
            name: 'Swetansh',
            designation: 'front end Developer',
            project:'Xender',
            edit: <Button size="small"> Edit</Button>,
            delete: <Button size="small"> Delete</Button>
        }
    ],
    dtColumnData:[
        {
            field:'id',
            width:41,
            align:'left',
            title:"ID"
           
        },
        {
            field:'name',
            width:100,
            align:'left',
            title:"Emp Name"
        },
        {
            field:'designation',
            width:100,
            align:'left',
            title:"Emp Designation"
        },
        {
            field:'project',
            width:100,
            align:'left',
            title:"Emp Project"
        },
       
    ]

}





export default empList;