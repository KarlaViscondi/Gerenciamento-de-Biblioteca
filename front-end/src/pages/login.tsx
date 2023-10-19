import React, { useState } from 'react';
import myfetch from '../utils/myfetch'

export default function Login() {

    const [state, setState] = React.useState({
      user: {
        email: '',
        password: ''
        }
    })
    const {
        user
    } = state
    
    async function handleFormSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault()        // Evita o recarregamento da página
        setState({ ...state})
        try {
            await myfetch.post('user/login', user)
                setState({
                    ...state
                })
            }
        catch(error) {
            setState({
                ...state
                }
            )
            console.error(error)
        }
    }
}