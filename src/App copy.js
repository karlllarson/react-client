import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import UserForm from './UserForm';
import UserQuery from './UserQuery';
import UserList from './UserList';

function App() {

  const [users, userSetter] = useState([]);
  const idQRef = useRef();
  const idRef = useRef();
  const nameRef = useRef();
  const addressRef = useRef();
  const countryRef = useRef();
  useEffect(() => {
    handleQuery();
  }, []);
  const handleEdit = (id) => {
    console.log(`handleEdit(${id})`)
    let user = users.find( user => user.id === id)
    idRef.current.value = user.id ;
    nameRef.current.value = user.name;
    addressRef.current.value = user.address;
    countryRef.current.value = user.country;
  }
  const handleUpdate = () => {
    console.log(`handleUpdate()`)
    let user =  {}
    user.id = idRef.current.value;
    user.name = nameRef.current.value;
    user.address = addressRef.current.value;
    user.country = countryRef.current.value;
    console.log(JSON.stringify(user));
    let url = `http://localhost:5000/users/${user.id}`;

    let parameters = {
        method: "PATCH",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }
    console.log(url);
    fetch( url, parameters)
        .then( res => res.json())
        .then( json => {
            console.log(json);  
            handleQuery();           
        });
  }  
  const handleDelete = (id) => {
    console.log(`handleDelete(${id})`)
    let parameters = {
      method: "DELETE"
    }
    let url = `http://localhost:5000/users/${id}`;  //localhost:5000/users/:id [DELETE]
    fetch( url, parameters)
      .then( res => res.json())
      .then( json => {
        console.log(json);
        handleQuery();
      })
  }
  const handleInsert = () => {
    let user =  {}
    user.id = idRef.current.value;
    user.name = nameRef.current.value;
    user.address = addressRef.current.value;
    user.country = countryRef.current.value;
    console.log(JSON.stringify(user));
    let url = `http://localhost:5000/users`;

    let parameters = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }
    console.log(url);
    fetch( url, parameters)
        .then( res => res.json())
        .then( json => {
            console.log(json); 
            handleQuery();
        });
  }
  const handleQuery = () => {
    let parameters = {
      method: "GET"
    }
    console.log('handleQuery called') 
    let id = idQRef.current.value
    console.log("ID=",id);
    if (id) {
      let url = `http://localhost:5000/users/${id}`;  //localhost:5000/users/:id [GET]
      fetch( url, parameters)
        .then( res => res.json())
        .then( json => {
          userSetter( [ json.user ] );
        })
    }
    else {
      let url = `http://localhost:5000/users`;        //localhost:5000/users/ [GET]
      fetch( url, parameters)
        .then( res => res.json())
        .then( json => {
          userSetter( json.users );
        })
    }
  }
  return (
    <div className="App">
     <UserQuery handleQuery={handleQuery} idQRef={idQRef} />
     <UserList users={users} handleEdit={handleEdit} handleDelete={handleDelete}/>
     <UserForm handleInsert={handleInsert} handleUpdate={handleUpdate} idRef={idRef} nameRef={nameRef}  addressRef={addressRef}  countryRef={countryRef}/>
    </div>
  );
}

export default App;