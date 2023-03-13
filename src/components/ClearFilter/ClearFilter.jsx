import React from "react";
import './ClearFilter.css'

export default function ClearFilter ({clearFilter}) {
  return(
    <button
      className="form__button form__button_type_clear hover"
      type="button"
      onClick={clearFilter}
    >
      Очистить фильтр
    </button>
  )
}