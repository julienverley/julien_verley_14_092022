import React from "react";
import { NavLink } from "react-router-dom";
// import BasicTable from "../components/BasicTable";
// import SortingTable from "../components/SortingTable";
import PaginationTable from "../components/PaginationTable";
import Header from "../components/Header";
import { employeesListContext } from "../context/ContextProvider"; ///
import AtomNavButton from "../components/atoms/AtomNavButton";

const EmployeesList = () => {
  const context = React.useContext(employeesListContext); ///
  console.log(context.employees); //
  return (
    <>
      <Header h1="Current Employees" />
      <div className="body">
        <div className="body-header">
          <div className="body-header-link">
            <NavLink className="navlink" to="/">
              <AtomNavButton content="Home" />
            </NavLink>
          </div>
        </div>
        {/* Table */}
        <br />
        <PaginationTable data={context.employees} />
      </div>
    </>
  );
};

export default EmployeesList;
