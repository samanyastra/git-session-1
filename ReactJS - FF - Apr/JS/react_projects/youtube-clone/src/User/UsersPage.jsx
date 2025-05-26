import { useState, useEffect } from "react";

import axios from "axios";
import UserCard from "./UserCard";

const UsersPage = () => {

    // need a variable to store the data - Done
    // install axios library  - Done
    // useEffect to load the data on page load

    const [users, setUsers] = useState([]) // filter
    const [backUpUsers, setBackUpUsers] = useState([]) // display

    const [searchQuery, setSearchQuery] = useState("")


    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then(res => {
                console.log(res.data.users)
                setUsers(res.data.users)
                setBackUpUsers(res.data.users)
            })
            .catch((err) => {

            })
    }, [])


    const searchHandler = () => {
        console.log(searchQuery)
        // clean the user input
        let cleanUserQuery = searchQuery.toLowerCase();
        let result = users.filter(user => (user.firstName.toLowerCase().includes(cleanUserQuery) || user.lastName.toLowerCase().includes(cleanUserQuery)))
        setBackUpUsers(result)
      
    }

    const filterByGender = (e) => {
        let selectedGender = e.target.value
        console.log(selectedGender)
          // get the user data
        //   console.log(users, "---")
          let filteredUsers = users.filter(user => user.gender==selectedGender)
          console.log(filteredUsers)
          setBackUpUsers(filteredUsers)
       
        // filter the user data
        // show the filtered user data in the UI
    }

    return <>
        <h1>User Management</h1>
        <hr />
        <div className="user-search-container">
            <input className="user-search" type="text" placeholder="search users" onChange={e => setSearchQuery(e.target.value)} />
            <button type="button" onClick={searchHandler}  className="user-search">Search</button>
            
            <select className="user-search" onChange={filterByGender}>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </select>
        </div>
        <div className="user-cards-container">

            {
                backUpUsers.map( user => <UserCard 
                    firstName={user.firstName}
                    lastName={user.lastName}
                    phoneNumber={user.phone}
                    gender={user.gender}
                
                />)
            }
        </div>
        {/* <UserCard firstName={"satish"} lastName={"madem"} phoneNumber={"1234567890"} gender={"Male"} /> */}
    </>
}

export default UsersPage;

/**
 * 
 * users = 30
 * filter = 17 (female)
 * 
 * 
 * backUPusers  = 30
 * 
 * user.filter() => baclUPUsers
 * 
 */