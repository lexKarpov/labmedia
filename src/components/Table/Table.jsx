import React from "react"
import './Table.css'
import TableItem from "../TableItem/TableItem"
import UsersContext from "../../contexts/UsersContext"
import UserNotFound from "../UserNotFound/UserNotFound"
import Preloader from "../Preloader/Preloader"

export default function Table({showMore, lengthList, openPopup, clearFilter, preloader}) {
  const users = React.useContext(UsersContext)
  return (
    <div className="table">
      <TableItem
        username="Имя пользователя"
        email="E-mail"
        registration_date="Дата регистрации"
        rating="Рейтинг"
        buttonDelete={null}
      />
      <ul className="table table__list">
        {
          preloader ?
            <Preloader/>
            :

            (users.length > 0 ?
              users.map((user, index) =>
                index < lengthList ? <TableItem
                    key={index}
                    username={user.username}
                    email={user.email}
                    registration_date={user.registration_date}
                    rating={user.rating}
                    buttonDelete={true}
                    id={user.id}
                    openPopup={openPopup}
                  />
                  :
                  null
              )
              :
              <UserNotFound clearFilter={clearFilter}/>)
        }
      </ul>
      {
        lengthList >= users.length || preloader
          ?
          null
          :
          <button
            className="table__more hover"
            onClick={showMore}
          >
            Показать еще
          </button>
      }
    </div>
  )
}