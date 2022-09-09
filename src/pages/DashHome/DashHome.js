import React from "react";
import SubHeader from "../../components/SubHeader/SubHeader";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../../App.css";
import "./DashHome.css";
import Panel from "../../components/Panel/Panel";

function DashHome() {
  const staticgraphdata = [
    {
      name: "SUN",
      uv: 0,
    },
    {
      name: "MON",
      uv: 0,
    },
    {
      name: "TUE",
      uv: 2000,
    },
    {
      name: "WED",
      uv: 0,
    },
    {
      name: "THUR",
      uv: 0,
    },
    {
      name: "FRI",
      uv: 0,
    },
    {
      name: "SAT",
      uv: 0,
    },
  ];
  return (
    <div>
      <SubHeader
        title="Dashboard Overview"
        className="dashboard-subheader"
        titleClassName="dashboard-subheader-title"
      />
      <div className="slideInUp dash-home">
        <Panel icon="sell" className="dash-home-panel" title="Today Orders" />
        <Panel
          icon="sell"
          className="dash-home-panel"
          style={{ backgroundColor: "var(--blue)" }}
          title="Month Orders"
        />
        <Panel
          icon="sell"
          className="dash-home-panel"
          style={{ backgroundColor: "var(--green)" }}
          title="Total Orders"
        />
        <div className="dashboard-graph-ctn">
          <div
            className="flex-row"
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <span className="graph-title">Sales</span>
            <Dropdown
              options={[
                "Yearly",
                "Monthly",
                "Two Weeks",
                "Last Week",
                "This Week",
              ]}
              placeholder="This Week"
              controlClassName="category-select-control"
              arrowOpen={
                <span className="material-symbols-outlined category-select-arrow">
                  arrow_drop_up
                </span>
              }
              arrowClosed={
                <span className="material-symbols-outlined category-select-arrow">
                  arrow_drop_down
                </span>
              }
            />
          </div>
          <ResponsiveContainer width={"100%"} height={250}>
            <AreaChart data={staticgraphdata} margin={{ top: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="37.6%"
                    stopColor="rgba(33, 194, 229, 0.7) "
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="102.68%"
                    stopColor="rgba(33, 194, 229, 0)"
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />

              {/* <YAxis /> */}
              <CartesianGrid strokeDasharray="0.2" />
              <Tooltip
                offset={5}
                contentStyle={{
                  backgroundColor: "#4764E6",
                  border: 0,
                  color: "white",
                  height: "60px",
                  fontFamily: "Montserrat-Regular",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "16px",
                }}
                itemStyle={{
                  color: "white",
                  fontFamily: "Montserrat-Regular",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "12px",
                  lineHeight: "16px",
                }}
                // cursor={false}
                formatter={(value, name, props) => [
                  <span>&#8358;{value}</span>,
                ]}
              />
              <Area
                type="monotone"
                dataKey="uv"
                stroke={"#4764E6"}
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DashHome;
