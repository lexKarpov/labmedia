import React from "react"
import './SearchedUser.css'
import TableItem from "../TableItem/TableItem"
import UserNotFound from "../UserNotFound/UserNotFound"
import {Link} from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

export default function SearchedUser(
  {
    username,
    email,
    registration_date,
    rating,
    id,
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
          username ?
            <div className="searched-user">
              <TableItem
                username={username}
                email={email}
                registration_date={registration_date}
                rating={rating}
                id={id}
                buttonDelete={buttonDelete}
                openPopup={openPopup}
              />
              <Link to="/" className="goHome hover">На главную</Link>
            </div>
            :
            <UserNotFound/>
        }
      </main>
      <Footer/>
    </div>
  )
}