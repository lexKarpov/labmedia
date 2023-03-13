import React from "react"
import Main from "../Main/Main"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function MainScreen(
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
    <div className="App">
      <Header
        title="Список пользователей"
      />
      <Main
        filterUsers={filterUsers}
        showMore={showMore}
        lengthList={lengthList}
        activeSelector={activeSelector}
        clearFilter={clearFilter}
        openPopup={openPopup}
        setActiveSelector={setActiveSelector}
        changeInputValue={changeInputValue}
        valueInput={valueInput}
        searchUser={searchUser}
        preloader={preloader}
      />
      <Footer/>
    </div>
  )
}