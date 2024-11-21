import React, { createContext, useState } from 'react'

const context = createContext()

export function ComponentProvider({children}) {
    const [search,setSearch] = useState("")
  return (
    <>
    <context.Provider value={{search,setSearch}}>
        {children}
    </context.Provider>

    </>
  )
}

export default context