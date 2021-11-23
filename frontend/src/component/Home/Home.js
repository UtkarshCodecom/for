import React, { Fragment, useEffect } from "react";
import "./Home.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";

const Home = ({ products }) => {
  const columns = [
    {
      field: "index",
      headerName: "INDEX",
      minWidth: 150,
      renderCell: (params) => {
        return (
          <>
            <Link style={{ textDecoration: 'none', color: "black" }} to={`/nse/${params.getValue(params.id, "index")}`}>
              <p>{params.getValue(params.id, "index")}</p>
            </Link>

          </>
        );
      },
    },
    { field: "current", headerName: "CURRENT", width: 135 },
    { field: "change", headerName: "% TRADED", width: 140 },
    {
      field: "open",
      headerName: "OPEN",
      width: 109,
    },
    {
      field: "high",
      headerName: "HIGH",
      width: 109,
    },
    {
      field: "low",
      headerName: "LOW",
      width: 109,
    },
    {
      field: "prevclose",
      headerName: "PREV. CLOSE",
      width: 160,
    },
    {
      field: "prevday",
      headerName: "PREV. DAY",
      width: 160,
    },
    {
      field: "onew",
      headerName: "1 W Ago",
      width: 160,
    },
    {
      field: "onem",
      headerName: "1 M Ago",
      width: 160,
    },
    {
      field: "oney",
      headerName: "1 Y Ago",
      width: 160,
    },
    {
      field: "yearwh",
      headerName: "52W H",
      width: 160,
    },
    {
      field: "yearwl",
      headerName: "52W L",
      width: 160,
    },
    {
      field: "today",
      headerName: "Today",
      width: 160,
      renderCell: (params) => <img src={params.value} />,
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: Math.random(),
        index: item.index,
        current: item.last,
        change: item.percentChange,
        open: item.open,
        high: item.high,
        low: item.low,
        prevclose: item.previousClose,
        prevday: item.previousDay,
        onew: item.oneWeekAgo,
        onem: item.oneMonthAgo,
        oney: item.oneYearAgo,
        yearwh: item.yearHigh,
        yearwl: item.yearLow,
        today: item.chartTodayPath,
      });
    });
  return (
    <>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={20}
          className="productListTable"
        />
      </div>
    </>
  );
};

export default Home;
