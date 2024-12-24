import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import UserInfoCard from './UserInfoCard';

const Main = () => {
  const [username, setUsername] = useState("")
  const [userData, setUserData] = useState(Object)

  const gitHubUrl =  `https://api.github.com/users/${username}`;


  const getUserData = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    if (jsonData && jsonData.message !== "Not Found") {
        setUserData(jsonData); 
        console.log(jsonData)
    }
    else if (username !== "") {
        console.log('Username does not exist');
    }
    else {
        setUserData({})
    }
};

  useEffect(()=>{
    getUserData()
  },[username])

  return (
    <div>
      <div>
          <div className='heading'><h3 >GitHub User Information Script</h3></div>
            <SearchBar username={username}
                setUsername={setUsername} />
            <UserInfoCard userData={userData} />
        </div>
    </div>
  )
}

export default Main