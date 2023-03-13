import React from "react"
import './Form.css'
import ClearFilter from "../ClearFilter/ClearFilter"

export default function Form({activeSelector, changeInputValue, valueInput, searchUser, clearFilter}) {
  return (
    <form className="form" onSubmit={searchUser}>
      <label className="form__label">
        <button className="form__button form__button_type_submit hover" type="submit"/>
        <input
          value={valueInput}
          onChange={(e) => {
            changeInputValue(e.target.value)
          }}
          className="form__input"
          placeholder="Поиск по имени или e-mail"
        />
      </label>
      <div className="form__button-wrapper">
        {
          activeSelector ?
            <ClearFilter clearFilter={clearFilter}/>
            :
            null
        }
      </div>
    </form>

  )
}
