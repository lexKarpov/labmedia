import React from "react";
import './Main.css'

import SearchForm from "../Form/Form";
import Selector from "../Selector/Selector";
import Table from "../Table/Table";

export default function Main () {
  return(
    <main className="main">
      <SearchForm/>
      <Selector/>
      {/*<Table/>*/}
    </main>
  )
}