import React, { createContext, useState } from 'react';

export const AutContext = createContext({});

function AuthProvider({ children }){

    const [name, setNome] = useState('');


    return(
       <AutContext.AuthProvider value={{ name }}>
           {children}
       </AutContext.AuthProvider>
    )
}

export default AuthProvider;