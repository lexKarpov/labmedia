import React, {useEffect, useState} from "react";
import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import getUsers from "../../utils/api";
import UsersContext from "../../contexts/UsersContext";

function App() {
  const [users, setUsers] = useState([])
  const [lengthList, setLengthList] = useState(5)
  const [activeSelector, setActiveSelector] = useState('')
  useEffect(_ => {
    getUsers()
      .then(res => setUsers(res))
      .catch(err => console.log(err))
  }, [])

  function showMore(){
    setLengthList( lengthList + 5)
  }

  function clearFilter() {
    console.log('clear')
  }

  function filterUsers(selector) {
    setActiveSelector(selector)
    switch (selector) {
      case 'rating':
        const ratingList = [...users].sort((a, b) => a.rating - b.rating)
        setUsers(ratingList)
        break
      default:
        const registration_dateList = [...users].sort(function(a,b){
          return new Date(b.registration_date) - new Date(a.registration_date);
        });
        setUsers(registration_dateList)
    }
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
        />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
