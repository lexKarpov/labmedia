import React from 'react'
import './InfoTooltip.css'

export default function InfoTooltip({ isOpen, onClose, deleteUser}) {
  return (
    <div className={`popup popup_type_image ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__window-wrap popup_type_info-tool">
        <h3 className="popup__message">Вы уверены, что хотите удалить пользователя?</h3>
        <div className="popup__buttons-wrapper">
          <button className="popup__action" onClick={deleteUser}>Да</button>
          <button className="popup__action" onClick={onClose}>Нет</button>
        </div>

      </div>
    </div>
  )
}