import React from "react";
import './Selector.css'

export default function Selector ({filterUsers, activeSelector, clearFilter}) {
  console.log(activeSelector)
  return(
    <div className="selector">
      <p className="selector__description">Сортировка:</p>
      <ul className="buttons">
        <li className="buttons__item">
          <button className="buttons__button buttons__button_active hover" onClick={() =>filterUsers('date')}>Дата регистрации</button>
        </li>
        <li className="buttons__item">
          <button className="buttons__button hover" onClick={() =>filterUsers('rating')}>Рейтинг</button>
        </li>
      </ul>
      <button className="buttons__button hover" onClick={clearFilter}>Сбросить фильтр</button>
    </div>
  )
}