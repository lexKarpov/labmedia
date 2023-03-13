import React, {useState} from "react";
import './Form.css'

export default function Form({findFilms, handleSmallMetr, toggleSmallMeter}) {
  // const windowWidth = useWindowDimensions().width >= 730
  const [val, setVal] = useState('')

  function writeValue(e) {
    e.preventDefault()
    // setVal(e.target.value)
    console.log('sdfsdf')
  }

  return (
      <form className="form" onSubmit={(e) => writeValue(e, val)}>
        <label className="form__label">
          <button className="form__button form__button_type_submit hover" type="submit"/>
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="form__input"
            placeholder="Поиск по имени или e-mail"
          />
        </label>

        <button className="form__button form__button_type_clear hover" type="button">
          Очистить фильтр
        </button>
      </form>

  )
}
