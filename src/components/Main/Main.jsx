import React from "react"
import './Main.css'
import Selector from "../Selector/Selector"
import Table from "../Table/Table"
import Form from "../Form/Form"

export default function Main(
  {
    filterUsers,
    showMore,
    lengthList,
    activeSelector,
    clearFilter,
    openPopup,
    setActiveSelector,
    valueInput,
    changeInputValue,
    searchUser,
    preloader
  }
) {
  return (
    <main className="main">
      <Form
        activeSelector={activeSelector}
        setActiveSelector={setActiveSelector}
        valueInput={valueInput}
        changeInputValue={changeInputValue}
        searchUser={searchUser}
        clearFilter={clearFilter}
      />
      <Selector
        filterUsers={filterUsers}
        activeSelector={activeSelector}
        clearFilter={clearFilter}
      />
      <Table
        showMore={showMore}
        lengthList={lengthList}
        openPopup={openPopup}
        clearFilter={clearFilter}
        preloader={preloader}
      />
    </main>
  )
}