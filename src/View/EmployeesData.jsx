import React, { useState, useEffect } from "react";
import { DataTable, Button } from "lucid-ui";
import _ from "lodash";

const EmployeesData = (props) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [currentlySortedField, setCurrentlySortedField] = useState("id");
  const [
    currentlySortedFieldDirection,
    setCurrentlySortedFieldDirection,
  ] = useState("down");
  const [data, setData] = useState(props.empData);

  useEffect(() => {
    if (props.deleting) {
      setData(props.empData);
    } else {
      dtData();
    }
  }, [props]);

  const [dtColumn, setDtColumn] = useState(props.columnData);

  const handleSelect = (item, selectedIndex) => {
    const updatedData = _.map(data, (row, rowIndex) => {
      if (rowIndex === selectedIndex) {
        return { ...row, isSelected: !row.isSelected };
      } else {
        return row;
      }
    });
    setData(updatedData);
    if (!item.isSelected) {
      props.editEmp(item);
    }
  };
  const handleSelectAll = () => {
    const allSelected = _.every(data, "isSelected");
    const updatedData = _.map(data, (row) => {
      return {
        ...row,
        isSelected: !allSelected,
      };
    });
    setData(updatedData);
    if (!allSelected) {
      props.editAllEmp(data);
    }
  };

  const handleRowClick = (item, rowIndex) => {
    setActiveIndex(rowIndex);
  };

  const handleSort = (field) => {
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
    const updatedData = _.map(data, (row, index) =>
      index === activeIndex ? { ...row } : row
    );
    setData(updatedData);
  };

  return (
    <div>
      <DataTable
        data={data}
        density="extended"
        isFullWidth
        minRows={4}
        isSelectable
        isActionable
        onRowClick={handleRowClick}
        //onSelect={handleSelect}
        onSelectAll={handleSelectAll}
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
      </DataTable>
    </div>
  );
};

export default EmployeesData;
