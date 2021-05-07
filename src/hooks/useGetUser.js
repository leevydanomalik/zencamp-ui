import { useEffect, useState } from 'react'
import { auth } from '../fire'

const useGetUser = () => {
    const [currentUser, setCurrentUser] = useState(auth.currentUser)

    useEffect(() => {
        auth.onAuthStateChanged(data => setCurrentUser(data))
    }, [])

    return {currentUser}
}

export default useGetUser
