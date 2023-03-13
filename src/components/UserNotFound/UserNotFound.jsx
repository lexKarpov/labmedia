import React from "react";
import './UserNotFound.css'
import ClearFilter from "../ClearFilter/ClearFilter";

export default function UserNotFound ({clearFilter}) {
  return(
    <div className="no-user">
      <h2 className="no-user__message">Пользователь не нейден</h2>
      <ClearFilter clearFilter={clearFilter}/>
    </div>
  )
}