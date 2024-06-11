import React, { useState } from 'react';
import withFormHandling from '../WithFormHandling/withFormHandling';


const Form1 = ({ formData, handleInputChange, handleSubmit, errors, onSubmit }) => {
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setLoginSuccess(true);
        }
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData.email) {
            formErrors.email = 'Endereço de e-mail é obrigatório';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                formErrors.email = 'Endereço de e-mail inválido';
            }
        }

        if (!formData.password) {
            formErrors.password = 'Senha é obrigatória';
        }

        return formErrors;
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Endereço de e-mail" />
                {errors.email && <span>{errors.email}</span>}
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Senha" />
                {errors.password && <span>{errors.password}</span>}
                <button type="submit">Entrar</button>
            </form>
            {loginSuccess && <h3>Login efetuado com sucesso!</h3>}
        </div>
    );
};

const initialState = { email: '', password: '' };

export default withFormHandling(Form1, initialState);