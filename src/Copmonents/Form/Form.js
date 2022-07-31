import './Form.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Form = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    const [error, setError] = useState('')
    const signIn = () => {
        if (login === 'admin' && password === 'admin') {
            navigate('/dashboard')
        } else {
            setError("Parol yoki login noto'g'ri kiritildi")
        }
    }

    return <div className="centered">
        <div className="card">
            <h1>Tizimga Kirish</h1>
            {error && <p style={{ 'color': 'red' }} >{error}</p>}
            <div>
                <label>Login</label><br />
                <input onChange={(e) => setLogin(e.target.value)} type={'text'} placeholder='login' />
            </div>
            <div>
                <label>Parol</label><br />
                <input onChange={(e) => {
                    setPassword(e.target.value)
                }} type={'password'} placeholder='parolingizni kiriting' />
            </div>
            <button onClick={signIn} className="btn">Kirish</button>
        </div>
    </div>
}

export default Form;