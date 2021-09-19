import React from "react";
import UserCard from "../UserCard/UserCard";
import axios from "axios";

const Homepage = () => {
  const [userData, setUserData] = React.useState([]);
  React.useEffect(() => {
      const fetchData = async () => {
        
      const result = await axios.get("https://jsonplaceholder.typicode.com/users");

        setUserData(result.data);
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      <ul>
        {userData.map((user) => {
            return (
            
                <li>
                <UserCard
                  userFirstLetter={user?.name.charAt(0)}
                  userFullName={user?.name}
                  userTag={user?.username}
                  userWebsite={user?.website}
                  userId={user?.id}
                />
              </li>
            );
        })}
          </ul>
          
    </div>
  );
};

export default Homepage;
