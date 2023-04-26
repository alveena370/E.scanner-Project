import React, { createContext, useEffect, useState } from "react";

// const initializedUser = {
//   name: "",
//   email: "",
//   _id: "",
// };

export const UserContext = createContext();

// const userContext = () => useContext(Context);
const UserProvider = ({}) => {
  // const UserProvider = ({ children }) => {
  //   //const [user, setUser] = useState(initializedUser);
  //   const [logined, setLogined] = useState();
  //   useEffect(() => {
  //     // console.log("Checking user");
  //     fetch("/api/v1/users/check", {
  //       method: "post",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     })
  //       .then((response) => {
  //         response
  //           .json()
  //           .then((result) => {
  //             console.log(result);
  //             setLogined(result.success);
  //             result.user ? setUser(result.user) : null;
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //           });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);
  return (
    <UserContext.Provider value={{ user, setUser, logined, setLogined }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
