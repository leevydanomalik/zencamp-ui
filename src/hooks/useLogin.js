import  { useState } from 'react'
import { auth } from '../fire'

const useLogin = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const login = async (email, password) => {
        setLoading(true)

        try {
            const res = await auth.signInWithEmailAndPassword(email, password)
            if (!res) return setError('Terjadi kesalahan saat login!')

            setLoading(false);
            setError('');
        } catch (err) {
            setLoading(false);
            if (err.code === 'auth/user-not-found') {
                setError('Pengguna tidak ditemukan!')
            } else {
                setError(err.message);
            }
        }
    }

    return {
        loading,
        error,
        login,
    }
}

export default useLogin
