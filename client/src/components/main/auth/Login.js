import React, {useState} from 'react'
import axios from 'axios'

function Login() {
    

    const [user, setUser] = useState({
        email: '', password: ''
    })
    const onChengingInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)

            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
    return (
        <>
            <div className="login_page">
                
                <div className="loging_blog">
                    <h2>Welcome to Our Community</h2>
                <form onSubmit={loginSubmit}>
                    <input type="email" name="email" required 
                    placeholder="Email" value={user.email} onChange={onChengingInput} />

                    <input type="password" name="password" required autoComplete="on"
                    placeholder="Password" value={user.password} onChange={onChengingInput} />
                    
                    <div className="row">
                        <button type="submit">Login</button>
                    </div>
                </form>
                </div>
            </div>
        </>
       
        
    )
}

export default Login
