import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
//import Wrapper from './Components/Helper/Wrapper';

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
    <React.Fragment>
      <AddUser onAddUsers={addUserHandler}/>
      <UsersList users={usersList}/>
    </React.Fragment>
  );
}


//Other options to Wrappers are:
// <> 
//......
//......
//</>

//and 

// <React.Fragment> 
//......
//......
//</React.Fragment>
export default App;
