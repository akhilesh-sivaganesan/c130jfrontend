import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";

function TsvTable() {
  const columns = useMemo(
    () => [
      {
        header: "BUSINESS UNIT",
        accessorKey: "BUSINESS UNIT",
      },
      {
        header: "SHIP",
        accessorKey: "SHIP",
      },
      {
        header: "TVE",
        accessorKey: "TVE",
      },
      {
        header: "PART NUMBER",
        accessorKey: "PART NUMBER",
      },
      {
        header: "DESCRIPTION",
        accessorKey: "DESCRIPTION",
      },
      {
        header: "ASSEMBLY",
        accessorKey: "ASSEMBLY",
      },
      {
        header: "QTY",
        accessorKey: "QTY",
      },
      {
        header: "CODE",
        accessorKey: "CODE",
      },
      {
        header: "OWNER",
        accessorKey: "OWNER",
      },
      {
        header: "NEED DATE",
        accessorKey: "NEED DATE",
      },
      {
        header: "ECD",
        accessorKey: "ECD",
      },
      {
        header: "IMPACT",
        accessorKey: "IMPACT",
      },
      {
        header: "COMMENT",
        accessorKey: "COMMENT",
      },
      {
        header: "STATUS",
        accessorKey: "STATUS",
      },
      {
        header: "Last Edit",
        accessorKey: "Last Edit",
      },
      {
        header: "ADDED DATE",
        accessorKey: "ADDED DATE",
      },
      {
        header: "ON BOARD",
        accessorKey: "ON BOARD",
      },
      {
        header: "CLOSED DATE",
        accessorKey: "CLOSED DATE",
      },
      {
        header: "Duration (Days)",
        accessorKey: "Duration (Days)",
      },
      {
        header: "Duration (Edits)",
        accessorKey: "Duration (Edits)",
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={[
        {
          "BUSINESS UNIT": "AFT",
          SHIP: "5978",
          TVE: "63J-001",
          "PART NUMBER": "3363563-23",
          DESCRIPTION: "Panel ASSY",
          ASSEMBLY: "A171236-01",
          QTY: "1",
          CODE: "1",
          OWNER: "FAB",
          "NEED DATE": "6/12/2023",
          ECD: "7/6/2023",
          IMPACT: "FT's on Flight line ",
          COMMENT: "Pinellas or FAB to produce part",
          STATUS: "Closed",
          "Last Edit": "7/6/2023",
          "ADDED DATE": "6/14/2023",
          "ON BOARD": "TRUE",
          "CLOSED DATE": "7/6/2023",
          "Duration (Days)": "22",
          "Duration (Edits)": "5",
          Manager: "Tamika Rachell",
        },
        {
          "BUSINESS UNIT": "AFT",
          SHIP: "5978",
          TVE: "63J-001",
          "PART NUMBER": "47820-2",
          DESCRIPTION: "FAN",
          ASSEMBLY: "",
          QTY: "1",
          CODE: "3",
          OWNER: "SCM",
          "NEED DATE": "4/10/2023",
          ECD: "DLVD",
          IMPACT: "",
          COMMENT: "(4), On pick",
          STATUS: "Closed",
          "Last Edit": "",
          "ADDED DATE": "6/13/2023",
          "ON BOARD": "FALSE",
          "CLOSED DATE": "6/13/2023",
          "Duration (Days)": "0",
          "Duration (Edits)": "",
          Manager: "Tamika Rachell",
        },
        {
          "BUSINESS UNIT": "AFT",
          SHIP: "5978",
          TVE: "63J-001",
          "PART NUMBER": "3363563-17",
          DESCRIPTION: "Panel ASSY",
          ASSEMBLY: "",
          QTY: "1",
          CODE: "1",
          OWNER: "PIN",
          "NEED DATE": "4/10/2023",
          ECD: "DLVD",
          IMPACT: "",
          COMMENT:
            "MAR on dock 6/7 ,Fed-ex 772365032341, Qty (1)Mar on dock 6/9",
          STATUS: "Closed",
          "Last Edit": "",
          "ADDED DATE": "6/13/2023",
          "ON BOARD": "FALSE",
          "CLOSED DATE": "6/13/2023",
          "Duration (Days)": "0",
          "Duration (Edits)": "",
          Manager: "Tamika Rachell",
        },
        {
          "BUSINESS UNIT": "AFT",
          SHIP: "5979",
          TVE: "81J-003",
          "PART NUMBER": "M83536/11-002L",
          DESCRIPTION: "Relay",
          ASSEMBLY: "",
          QTY: "1",
          CODE: "3",
          OWNER: "SCM",
          "NEED DATE": "4/24/2023",
          ECD: "DLVD",
          IMPACT: "",
          COMMENT: "",
          STATUS: "Closed",
          "Last Edit": "",
          "ADDED DATE": "6/13/2023",
          "ON BOARD": "FALSE",
          "CLOSED DATE": "6/13/2023",
          "Duration (Days)": "0",
          "Duration (Edits)": "",
          Manager: "Tamika Rachell",
        },
        {
          "BUSINESS UNIT": "AFT",
          SHIP: "5979",
          TVE: "81J-003",
          "PART NUMBER": "31MJ118-5",
          DESCRIPTION: "Wire Assy",
          ASSEMBLY: "",
          QTY: "1",
          CODE: "1",
          OWNER: "FAB",
          "NEED DATE": "4/24/2023",
          ECD: "DLVD",
          IMPACT: "",
          COMMENT: "",
          STATUS: "Closed",
          "Last Edit": "",
          "ADDED DATE": "6/13/2023",
          "ON BOARD": "FALSE",
          "CLOSED DATE": "6/13/2023",
          "Duration (Days)": "0",
          "Duration (Edits)": "",
          Manager: "Tamika Rachell",
        },
        {
          "BUSINESS UNIT": "",
        },
      ]}
    />
  );
}

export default TsvTable;
