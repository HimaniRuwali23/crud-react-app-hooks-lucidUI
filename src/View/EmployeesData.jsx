import React, { useState } from "react";
import { DataTable,Button } from "lucid-ui";
import _ from "lodash";

const EmployeesData = props => {
  const editData= (id, emp)=>{
    props.editEmp(id, emp);
  }
  const empData=[
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
        edit: <Button size="small" > Edit</Button>,
        delete: <Button size="small"> Delete</Button>
    }
];
  const [activeIndex, setActiveIndex] = useState(1);
  const [currentlySortedField, setCurrentlySortedField] = useState("id");
  const [
    currentlySortedFieldDirection,
    setCurrentlySortedFieldDirection
  ] = useState("down");
  const [data, setData] = useState(empData);
  const [dtColumn, setDtColumn] = useState(props.columnData);

  const handleRowClick = (item, rowIndex) => {
    setActiveIndex(rowIndex);
    //console.log("handleRow---",item.edit.props.onClick)
    //item.edit.props.onClick(console.log("handleRow",item.id, item))
    console.log("handleRow",item.id, item)
  };

  const handleSelect = (item, selectedIndex) => {
    const updatedData = _.map(data, (row, rowIndex) => {
      if (rowIndex === selectedIndex) {
      return { ...row, isSelected: !row.isSelected };
      } else {
      return row;
      }
      });
      setData(updatedData);
  };

  const handleSort = field => {
    const nextCurrentlySortedFieldDirection =
      currentlySortedField === field && currentlySortedFieldDirection === "up"
        ? "down"
        : "up";
    const nextData = _.sortBy(data, field);
    setCurrentlySortedField(field);
    setCurrentlySortedFieldDirection(nextCurrentlySortedFieldDirection);
    const updatedData =
      nextCurrentlySortedFieldDirection === "down"
        ? nextData
        : _.reverse(nextData);
    setData(updatedData);

    setActiveIndex(null);
  };

  const dtData = () => {
    const updatedData=
      _.map(data, (row, index) =>
        index === activeIndex ? { ...row, isActive: true } : row
      );
    setData(updatedData);
  };

  return (
    <div>
      <DataTable
        data={data}
        density="extended"
        onSelect={handleSelect}
        isFullWidth
        minRows={4}
        isSelectable
        isActionable
        onRowClick={handleRowClick}
        onSort={handleSort}
        
      >

        {dtColumn.map((column, index) => (
          <DataTable.Column
          key={index}
            field={column.field}
            width={column.width}
            align={column.align}
            hasBorderLeft
            isSortable
            isSorted={currentlySortedField === column.field}
            sortDirection={currentlySortedFieldDirection}
          >
            {column.title}
          </DataTable.Column>
        ))}
        <DataTable.Column field="edit" align="center" width={50} />
        <DataTable.Column field="delete" align="center" width={50} />
      </DataTable>
    </div>
  );
};

export default EmployeesData;
