import React from "react";
import './Selector.css'

export default function Selector () {
  return(
    <div className="selector">
      <p className="selector__description">Сортировка:</p>
      <ul className="buttons">
        <li className="buttons__item">
          <button className="buttons__button buttons__button_active">Дата регистрации</button>
        </li>
        <li className="buttons__item">
          <button className="buttons__button">Рейтинг</button>
        </li>
      </ul>


    </div>
  )
}