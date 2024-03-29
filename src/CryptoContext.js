import React, { Children, createContext, useContext, useState, useEffect } from 'react'


const Crypto= createContext();

function CryptoContet({children}) {
  const [currency, setcurrency] = useState("INR")
  const [symbol, setsymbol] = useState("₹")
  
  useEffect(() => {
    if (currency=="INR") {setsymbol("₹")}
    else if(currency=="USD"){setsymbol("$")}
  }, [currency])
  return (
    <Crypto.Provider value={{currency, symbol, setcurrency}}>
      {children}
    </Crypto.Provider>
  )
}

export default CryptoContet

export const CryptoState = ()=>{
  return useContext(Crypto)
}
