import React from "react"
import './ClearFilter.css'

export default function ClearFilter({clearFilter}) {
  return (
    <button
      className="clearFilter hover"
      type="button"
      onClick={clearFilter}
    >
      Очистить фильтр
    </button>
  )
}