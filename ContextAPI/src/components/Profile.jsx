import { useContext } from "react";
import UserContext from "../context/userContext";

// Consuming the context variables here
function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1 style={{ color: "white" }}>Profile</h1> : {user ? <h1>{user.username}</h1> : <h1 style={{ color: "white" }}>NOT LGGED IN</h1>}
    </div>
  );
}

export default Profile;
