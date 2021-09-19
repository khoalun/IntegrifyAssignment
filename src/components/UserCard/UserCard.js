import { Link } from "react-router-dom";

const UserCard = ({
  userFirstLetter,
  userFullName,
  userTag,
  userWebsite,
  userId,
}) => {
  return (
    <div className="border-box">
      <header className="header-text"> {userFirstLetter} </header>
      <div className="text-container">
        <p className="textfirst">
          <b> {userFullName} </b>
        </p>
        <p className="textsecond"> @{userTag} </p>
        <p className="textthird">
          <a href={userWebsite}>{userWebsite}</a>
        </p>
      </div>
      <div className="textbtn">
        <Link to={`/users/${userId}`}>More Details</Link>
      </div>
    </div>
  );
};

export default UserCard;
