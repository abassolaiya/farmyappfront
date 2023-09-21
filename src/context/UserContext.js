// import {createContext, useState} from "react";

// export const UserContext = createContext({});

// export function UserContextProvider({children}) {
//   const [userInfo,setUserInfo] = useState({});
//   return (
//     <UserContext.Provider value={{userInfo,setUserInfo}}>
//       {children}
//     </UserContext.Provider>
//   );
// }


import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    return storedUserInfo ? JSON.parse(storedUserInfo) : {};
  });

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}



