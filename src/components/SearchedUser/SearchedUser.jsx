import React from "react"
import './SearchedUser.css'
import TableItem from "../TableItem/TableItem"
import UserNotFound from "../UserNotFound/UserNotFound"
import {Link} from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function SearchedUser(
  {
    searchedUserList,
    buttonDelete,
    openPopup,
  }
) {

  return (
    <div className="App">
      <Header
        title="Результаты поиска:"
      />
      <main className="main">
        {
          searchedUserList.length ?
            <ul className="table">
              {
                searchedUserList.map((user, index) => {
                  return (
                      <TableItem
                        key={index}
                        username={user.username}
                        email={user.email}
                        registration_date={user.registration_date}
                        rating={user.rating}
                        id={user.id}
                        buttonDelete={buttonDelete}
                        openPopup={openPopup}
                      />
                  )
                })
              }

              <Link to="/" className="goHome hover">На главную</Link>
            </ul>
            :
            <UserNotFound/>
        }
      </main>
      <Footer/>
    </div>
  )
}