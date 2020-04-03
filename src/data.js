import React, { useState } from "react";
import { Button } from "lucid-ui";

const empList = {
  dtRowData: [
    {
      id: 1,
      name: "Avneesh",
      designation: "React developer",
      project: "Appnexus",
      edit: "Edit / Delete"
    },
    {
      id: 2,
      name: "Swetansh",
      designation: "front end Developer",
      project: "Xender",
      edit: "Edit / Delete"
    }
  ],
  dtColumnData: [
    {
      field: "id",
      width: 41,
      align: "left",
      title: "ID"
    },
    {
      field: "name",
      width: 100,
      align: "left",
      title: "Emp Name"
    },
    {
      field: "designation",
      width: 100,
      align: "left",
      title: "Emp Designation"
    },
    {
      field: "project",
      width: 100,
      align: "left",
      title: "Emp Project"
    }
  ]
};

export default empList;
