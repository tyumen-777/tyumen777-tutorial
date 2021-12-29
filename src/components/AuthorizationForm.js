import React from 'react';

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '290px',
        margin: '0 auto'
    }
};

const AuthorizationForm = () => {
    let email = '';
    let password = '';

    const handleChange = (e) => {
        if (e.target.type === 'text') {
            email = e.target.value.trim()
        } else {
            password = e.target.value
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.length && password.length !== 0) {
            console.log({ email, password })
            e.target.reset()
        } else {
            alert('Заполните Email или Пароль')
        }
    };

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <input type="text" placeholder="E-Mail" onChange={handleChange}/>
            <input type="password" placeholder="Пароль" onChange={handleChange}/>
            <button type="submit">Войти</button>
        </form>
    );
};

export default AuthorizationForm;