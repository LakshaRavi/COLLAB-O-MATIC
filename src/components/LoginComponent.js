// LoginComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/login', {
                username,
                password
            });

            if (response.data.success) {
                alert('Login successful!');
                // Redirect to another page or perform an action
                window.location.href = '/dashboard';
            } else {
                setErrorMessage('Invalid username or password.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#f9f9f9',
        }}>
            <h1 style={{ marginBottom: '20px' }}>Login</h1>

            <form onSubmit={handleLogin} style={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
                padding: '20px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: '#fff'
            }}>
                <label htmlFor="username" style={{ marginBottom: '8px' }}>Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ marginBottom: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    required
                />

                <label htmlFor="password" style={{ marginBottom: '8px' }}>Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ marginBottom: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    required
                />

                {errorMessage && (
                    <div style={{
                        color: 'red',
                        marginBottom: '16px',
                        fontSize: '14px'
                    }}>{errorMessage}</div>
                )}

                <button type="submit" style={{
                    padding: '10px',
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>Login</button>
            </form>
        </div>
    );
};

export default LoginComponent;
