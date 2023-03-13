import React, {useEffect, useState} from "react";
import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import getUsers from "../../utils/api";
import UsersContext from "../../contexts/UsersContext";
import Footer from "../Footer/Footer";

function App() {
  const [valueInput, setValueInput] = useState('')
  const [users, setUsers] = useState([])
  const [initialUsers, setInitialUsers] = useState([])
  const [lengthList, setLengthList] = useState(5)
  const [activeSelector, setActiveSelector] = useState('')
  const [counterRating, setCounterRating] = useState(0)
  const [counterDate, setCounterDate] = useState(0)
  const [isSelectedInfoTooltip, setIsSelectedInfoTooltip] = useState(false)
  const [id, setId] = useState('')
  const [preloader, setPreloader] = useState(false)

  function searchUser(e) {
    e.preventDefault()
    if (!valueInput) return null
    const searchedUsser = users.filter(el => {
      if (el.username.toLowerCase() === valueInput.toLowerCase().trim() || el.email.toLowerCase() === valueInput.toLowerCase().trim()) {
        return el
      }
    })
    setUsers(searchedUsser)
  }

  function changeInputValue(value) {
    setValueInput(value)
    setActiveSelector(value)
  }

  useEffect(_ => {
    setPreloader(true)
    getUsers()
      .then(res => {
          setUsers(res)
          setInitialUsers(res)
          setPreloader(false)
        }
      )
      .catch(err => console.log(err))
  }, [])

  function showMore() {
    setLengthList(lengthList + 5)
  }

  function clearFilter() {
    setUsers(initialUsers)
    setActiveSelector('')
    setCounterRating(0)
    setCounterDate(0)
    setValueInput('')
  }

  function filterUsers(selector) {
    setActiveSelector(selector)
    let ratingList, registration_dateList
    switch (selector) {
      case 'rating':
        ratingList = [...users].sort((a, b) => a.rating - b.rating)
        if (counterRating % 2 === 0) {
          setUsers(ratingList)
        } else {
          setUsers(ratingList.reverse())
        }
        setCounterRating(counterRating + 1)
        break
      default:
        registration_dateList = [...users].sort(function (a, b) {
          return new Date(b.registration_date) - new Date(a.registration_date);
        });
        if (counterDate % 2 === 0) {
          setUsers(registration_dateList)
        } else {
          setUsers(registration_dateList.reverse())
        }
        setCounterDate(counterDate + 1)
    }
  }

  function deleteUser(afterSearch) {
    let usersWithoutDeleteUser
    if (afterSearch) {
      usersWithoutDeleteUser = initialUsers.filter(el => el.id !== id.toString())
      setUsers(usersWithoutDeleteUser)
      setInitialUsers(usersWithoutDeleteUser)
    } else {
      usersWithoutDeleteUser = users.filter(el => el.id !== id.toString())
      setUsers(usersWithoutDeleteUser)
      setInitialUsers(usersWithoutDeleteUser)
    }
    closePopup()
    setValueInput('')
  }

  function closePopup() {
    setIsSelectedInfoTooltip(false)
  }

  function openPopup(id) {
    setIsSelectedInfoTooltip(true)
    setId(id)
  }

  return (
    <UsersContext.Provider value={users}>
      <div className="App">
        <Header/>
        <Main
          filterUsers={filterUsers}
          showMore={showMore}
          lengthList={lengthList}
          activeSelector={activeSelector}
          clearFilter={clearFilter}
          openPopup={openPopup}
          setActiveSelector={setActiveSelector}
          changeInputValue={changeInputValue}
          valueInput={valueInput}
          searchUser={searchUser}
          preloader={preloader}
        />
        <Footer/>
        <InfoTooltip
          onClose={closePopup}
          isOpen={isSelectedInfoTooltip}
          deleteUser={deleteUser}
        />

      </div>
    </UsersContext.Provider>
  );
}

export default App;
