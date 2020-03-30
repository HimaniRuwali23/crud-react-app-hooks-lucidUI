import React, { useState } from "react";
import { DataTable } from "lucid-ui";
import _ from "lodash";

const EmployeesData = props => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [currentlySortedField, setCurrentlySortedField] = useState("id");
  const [
    currentlySortedFieldDirection,
    setCurrentlySortedFieldDirection
  ] = useState("down");
  const [data, setData] = useState(props.empData.dtRowData);
  const [dtColumn, setDtColumn] = useState(props.empData.dtColumnData);

  const handleSelect = (item, selectedIndex) => {
    setData(
      _.map(data, (row, rowIndex) => {
        if (rowIndex === selectedIndex) {
          return { ...row, isSelected: !row.isSelected };
        } else {
          return row;
        }
      })
    );
  };

  const handleRowClick = (item, rowIndex) => {
    setActiveIndex(rowIndex);
  };

  const handleSort = field => {
    const nextCurrentlySortedFieldDirection =
      currentlySortedField === field && currentlySortedFieldDirection === "up"
        ? "down"
        : "up";
    const nextData = _.sortBy(data, field);
    setCurrentlySortedField(field);
    setCurrentlySortedFieldDirection(nextCurrentlySortedFieldDirection);
    setData(
      nextCurrentlySortedFieldDirection === "down"
        ? nextData
        : _.reverse(nextData)
    );
    setActiveIndex(null);
  };

  const dtData = () => {
    setData(
      _.map(data, (row, index) =>
        index === activeIndex ? { ...row, isActive: true } : row
      )
    );
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
