import React from "react";
import './Table.css'
import TableItem from "../TableItem/TableItem";
import UsersContext from "../../contexts/UsersContext";
import ClearFilter from "../ClearFilter/ClearFilter";
import UserNotFound from "../UserNotFound/UserNotFound";

export default function Table ({showMore, lengthList, openPopup, clearFilter}) {
  const users = React.useContext(UsersContext)
  return(
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
            users.length > 0 ?
            users.map((user, index)=>
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
              <UserNotFound clearFilter={clearFilter}/>
          }
      </ul>
      {
        lengthList >= users.length? null : <button className="table__more hover" onClick={showMore}>Показать еще</button>
      }
    </div>
  )
}