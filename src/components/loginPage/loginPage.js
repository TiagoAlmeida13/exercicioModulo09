import React, { useState } from 'react';
import Form1 from '../Form1/form1';
import Form2 from '../Form2/form2';

const LoginPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleForm1Submit = (formData) => {
        console.log('Form1 submitted with data:', formData);
        setIsLoggedIn(true);
    };

    const handleForm2Submit = (formData) => {
        console.log('Form2 submitted with data:', formData);
    };

    return (
        <div>
            <h1>Login</h1>
            {!isLoggedIn && <Form1 onSubmit={handleForm1Submit} />}
            {isLoggedIn && (
                <>
                    <h1>Cadastro de novo usuário</h1>
                    <Form2 onSubmit={handleForm2Submit} />
                </>
            )}
        </div>
    );
};

export default LoginPage;