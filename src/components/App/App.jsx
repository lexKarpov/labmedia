import React, {useEffect, useState} from "react";
import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import getUsers from "../../utils/api";
import UsersContext from "../../contexts/UsersContext";

function App() {
  const [users, setUsers] = useState([])
  const [initialUsers, setInitialUsers] = useState([])
  const [lengthList, setLengthList] = useState(5)
  const [activeSelector, setActiveSelector] = useState('')
  const [counterRating, setCounterRating] = useState(0)
  const [counterDate, setCounterDate] = useState(0)
  useEffect(_ => {
    getUsers()
      .then(res => {
          setUsers(res)
          setInitialUsers(res)
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
  }

  function filterUsers(selector) {
    setActiveSelector(selector)
    let ratingList, registration_dateList
    switch (selector) {
      case 'rating':
        ratingList = [...users].sort((a, b) => a.rating - b.rating)
      if(counterRating % 2 === 0){
        setUsers(ratingList)
      }else{
        setUsers(ratingList.reverse())
      }
        setCounterRating(counterRating + 1)
        break
      default:
        registration_dateList = [...users].sort(function (a, b) {
          return new Date(b.registration_date) - new Date(a.registration_date);
        });
        if(counterDate % 2 === 0){
          setUsers(registration_dateList)
        }else{
          setUsers(registration_dateList.reverse())
        }
        setCounterDate(counterDate + 1)
    }
  }

  function deleteUser(id) {
    console.log(id)
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
          deleteUser={deleteUser}
        />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
