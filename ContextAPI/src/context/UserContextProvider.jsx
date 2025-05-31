import React, { useState } from 'react'
import UserContext from './UserContext'

// The children prop is derived from the App.jsx where the wrapped logic using the global props are nested in the UserContextProvider
const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children} 
    </UserContext.Provider>
  )
}

export default UserContextProvider;