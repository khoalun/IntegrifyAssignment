import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function UserDetailsCard({
  fullName,
  userName,
  email,
  phone,
  company,
  website,
  street,
  suite,
  city,
  zipcode,
  goBackHandle,s
}) {
  return (
    <div>
      <div className="icon-cover" onClick={goBackHandle}>
        <ArrowBackIcon />
      </div>
      <div className="border-box">
        <div className="container-cover">
          <p className="text-infor">-name: {fullName}</p>
          <p className="text-infor">-username:{userName}</p>
          <p className="text-infor">-email:{email}</p>
          <p className="text-infor">-phone:{phone}</p>
          <p className="text-infor">-company:{company}</p>
          <p className="text-infor">-website:{website}</p>
          <ul>
            -address
            <li className="text-infor-address">street:{street}</li>
            <li className="text-infor-address">suite:{suite}</li>
            <li className="text-infor-address">city:{city}</li>
            <li className="text-infor-address">zipcode:{zipcode}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsCard;
