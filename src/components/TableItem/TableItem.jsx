import React from "react";
import './TableItem.css'

export default function TableItem ({username, email, registration_date, rating, id, buttonDelete, openPopup}) {
  return(
      <div className={buttonDelete? "table__item table__item_type_user" : "table__item"}>
        <h3 className={buttonDelete? "table__name table__name_type_user" : "table__name"}>{username}</h3>
        <p className={buttonDelete? "table__description table__description_type_user" : "table__description"}>{email}</p>
        <p className={buttonDelete? "table__description table__description_type_user" : "table__description"}>{registration_date}</p>
        <p className={buttonDelete? "table__description table__description_type_user" : "table__description"}>{rating}</p>
        {
          buttonDelete? <button className="table__delete-user hover" onClick={()=> openPopup(id)}/> : null
        }
      </div>
  )
}