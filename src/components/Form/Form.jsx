import React, {useState} from "react";
import './Form.css'
import search from '../../UI/icons/form/search.svg'
import clear from '../../UI/icons/form/clear.svg'

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
          <button className="form__button form__button_type_submit" type="submit"/>
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="form__input"
          />
        </label>

        <button className="form__button form__button_type_clear" type="button">
          Очистить фильтр
        </button>
      </form>

  )
}
