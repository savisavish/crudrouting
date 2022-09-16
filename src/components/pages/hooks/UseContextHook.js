import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../../../App'

const UseContextHook = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <>
            <h5>Context provides a way to pass the data through the component tree with out having ot pass props down manually at every level</h5>
            <p>there are three steps to create useContext</p>
            <li>create a context using a create createContext
            <p>export const UserContext = createContext()</p></li>
            <li>Provide the context value at your high level component
            <p>UserContext.Provider value={'receieved this data from Root componnent'}</p></li>
            <li>Consume the provided context value using useContext method
            <p>import useContext method</p></li>
           Output -  {user} - {channel}
        </>

    )
}
export default UseContextHook;