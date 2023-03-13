import React from "react";
import './Table.css'
import TableItem from "../TableItem/TableItem";
import UsersContext from "../../contexts/UsersContext";

export default function Table ({showMore, lengthList, deleteUser}) {
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
            users?.map((user, index)=>
              index < lengthList ? <TableItem
                key={index}
                username={user.username}
                email={user.email}
                registration_date={user.registration_date}
                rating={user.rating}
                buttonDelete={true}
                id={user.id}
                deleteUser={deleteUser}
              />
                :
                null
            )
          }
      </ul>
      {
        lengthList >= users.length? null : <button className="table__more hover" onClick={showMore}>Показать еще</button>
      }
    </div>
  )
}