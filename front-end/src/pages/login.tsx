import React, { ChangeEvent, useState } from 'react';
import myfetch from '../utils/myfetch'

export default function Login() {
    
    const [state, setState] = useState({
      user: {
        email: '',
        password: ''
        }
    })
    const {
        user
    } = state
    
    async function handleFormSubmit(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        try {
            await myfetch.post("http://localhost:8080/user/login")
            console.log("Success\br", user.email + "\br" + user.password)
        }
        catch(error) {
            setState({
                ...state
                }
            )
            console.error(error)
        }
    }
    return (
        <>  
            <title> Login </title>
            <div>
                <h1> LOGIN </h1>
                <form onSubmit={() => handleFormSubmit}>
                    <div>
                        <input type="text" placeholder='Email' onChange={(e) => setState(e.target.value)} />
                        <input type="password" placeholder='Senha'  onChange={(e) => setState(e.target.value)} />
                        <input type="submit" value="Entrar" />
                    </div>
                </form>
            </div>

        </>
    )
}