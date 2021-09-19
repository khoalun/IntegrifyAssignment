import React from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import UserDetailsCard from "../UserDetailsCard/UserDetailsCard";

const UserDetails = () => {
  const [userDetail, setUserDetail] = React.useState(null);
  const { userId } = useParams();
  React.useEffect(() => {
    const fetchData = async () => {
      const API_BASE_URL = `https://jsonplaceholder.typicode.com/users`;
      console.log("userId", userId);

      const result = await axios.get(`${API_BASE_URL}/${userId}`);

      setUserDetail(result.data);
      console.log("result.data", result.data);
      console.log("userData", userDetail);
    };
    fetchData();
  }, [userId]);
    console.log("userId", userId);  
    let history = useHistory()
    const backToHomepage = () => {
        history.goBack()
    }
    return (
      userDetail && (
        <UserDetailsCard
          fullName={userDetail?.name}
          userName={userDetail?.username}
          email={userDetail?.email}
          phone={userDetail?.phone}
          company={userDetail?.company.name}
          website={userDetail?.website}
          street={userDetail?.address.street}
          suite={userDetail?.address.suite}
          city={userDetail?.address.city}
          zipcode={userDetail?.address.zipcode}
          goBackHandle={backToHomepage}
        />
      )
    );   
};

export default UserDetails;
