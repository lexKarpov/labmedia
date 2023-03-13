import React from "react";
import './Table.css'
import TableItem from "../TableItem/TableItem";

export default function Table () {
  const users = [
    {username: 'alex', email: 'alexis@mail.ru', registration_date: '11.05.2020', rating: 30, id: 20},
    {username: 'tanya', email: 'tanya@mail.ru', registration_date: '4.05.2022', rating: 20, id: 10},
    {username: 'alex', email: 'alexis@mail.ru', registration_date: '23.05.2023', rating: 4, id: 230},
  ]
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
            users.map((user, index)=>
              <TableItem
                key={index}
                username={user.username}
                email={user.email}
                registration_date={user.registration_date}
                rating={user.rating}
                buttonDelete={true}
                id={user.id}
              />
            )
          }

      </ul>
    </div>
  )
}