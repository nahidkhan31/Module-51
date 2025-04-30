import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Profiles = () => {
  const { user } = use(AuthContext);
  return (
    <div className="max-w-sm mx-auto">
      <h1>Name: {user.displayName}</h1>
      <p>Email: {user.email}</p>
      {/* <img src={user.photoURL} alt="" /> */}
    </div>
  );
};

export default Profiles;
