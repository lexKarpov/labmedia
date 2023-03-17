import React from "react"
import './UserNotFound.css'
import {Link} from "react-router-dom"

export default function UserNotFound() {
  return (
    <div className="no-user">
      <h2 className="no-user__message">Поиск не дал результатов</h2>
      <Link to="/" className="goHome hover">На главную</Link>
    </div>
  )
}