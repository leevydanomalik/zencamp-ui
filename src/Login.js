import React, { useState, useEffect } from 'react'
import useLogin from './hooks/useLogin'


const Login = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { error, loading, login } = useLogin()

    useEffect(() => {
        if (error === '') {
            history.push('/dashboard')
        }
    }, [error, history])

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
    }

    return (

        <div className="Login">

            <form className="login__form" onSubmit={handleSubmit}>
                <h1>Login Account</h1>
                {error && <p>{error}</p>}
                <input type="email" placeholder="Email address" required onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
                <button type='submit'>{loading ? 'Loading...' : 'Login'}</button>
            </form>
        </div>

    )
}

export default Login
