import React, {useState} from 'react';
import { Button } from 'lucid-ui';

const empList = [
    {
        id: 1,
        name: 'Avneesh',
        designation: 'React developer',
        project:'Appnexus',
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
];

export default empList;