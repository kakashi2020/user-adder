import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {
  
const [usersList, setUsersList] = useState([]);

const addUserHandler = (uName, uAge) =>{
  setUsersList((prevUserList) => {
    return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}]
  })
};

  if (usersList < 1){
    return <AddUser onAddUsers={addUserHandler}/>
  }

  return (
    <div>
      <AddUser onAddUsers={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
