import React from "react";
import './Main.css'
import SearchForm from "../Form/Form";
import Selector from "../Selector/Selector";
import Table from "../Table/Table";

export default function Main ({filterUsers, showMore, lengthList, activeSelector, clearFilter, deleteUser}) {
  return(
    <main className="main">
      <SearchForm/>
      <Selector
        filterUsers={filterUsers}
        activeSelector={activeSelector}
        clearFilter={clearFilter}
      />
      <Table
        showMore={showMore}
        lengthList={lengthList}
        deleteUser={deleteUser}
      />
    </main>
  )
}