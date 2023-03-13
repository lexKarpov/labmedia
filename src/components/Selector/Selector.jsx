import React from "react";
import './Selector.css'

export default function Selector ({filterUsers, activeSelector, clearFilter}) {
  return(
    <div className="selector">
      <p className="selector__description">Сортировка:</p>
      <ul className="buttons">
        <li className="buttons__item">
          <button
            className={activeSelector === 'date' ? "buttons__button buttons__button_active hover" : "buttons__button hover"}
            onClick={() =>filterUsers('date')}>
            Дата регистрации
          </button>
        </li>
        <li className="buttons__item">
          <button
            className={activeSelector === 'rating' ? "buttons__button buttons__button_active hover" : "buttons__button hover"}
            onClick={() =>filterUsers('rating')}>
            Рейтинг
          </button>
        </li>
      </ul>
      {
        activeSelector ?
          <button className="selector__clear hover" onClick={clearFilter}>Сбросить фильтр</button>
          :
          null
      }
    </div>
  )
}