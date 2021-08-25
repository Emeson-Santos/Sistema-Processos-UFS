import React, { createContext, useState } from 'react';

export const AutContext = createContext({});

function AuthProvider({ children }){

    const [name, setNome] = useState('');


    return(
       <AutContext.Provider value={{ name }}>
           {children}
       </AutContext.Provider>
    )
}

export default AuthProvider;