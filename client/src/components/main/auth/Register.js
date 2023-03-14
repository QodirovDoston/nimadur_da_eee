import React, {useState} from 'react'
import axios from 'axios'

function Register() {

    const [user, setUser] = useState({
        name: '', email: '', password: ''
    })

    const onChengingInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

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
                            <h2>Welcome to DEV Community</h2>
                            <form onSubmit={registerSubmit}>
                                <input type="text" name="name" required 
                                placeholder="Name" value={user.name} onChange={onChengingInput} />
                                
                                <input type="email" name="email" required 
                                placeholder="Email" value={user.email} onChange={onChengingInput} />

                                <input type="password" name="password" required autoComplete="on"
                                placeholder="Password" value={user.password} onChange={onChengingInput} />
                                
                                <div className="row">
                                    <button type="submit">Sign in</button>
                                </div>
                            </form>
                        </div>
                </div>
        </>
       
    )
}

export default Register
