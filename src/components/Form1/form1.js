import React, { useState } from 'react';
import withFormHandling from '../WithFormHandling/withFormHandling';

const Form1 = ({ formData, handleInputChange, handleSubmit, errors }) => {
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            setLoginSuccess(true);
            handleSubmit();
        } else {
            setFormErrors(errors);
        }
    };

    const validateForm = () => {
        let errors = {};

        if (!formData.email) {
            errors.email = 'Endereço de e-mail é obrigatório';
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                errors.email = 'Endereço de e-mail inválido';
            }
        }

        if (!formData.password) {
            errors.password = 'Senha é obrigatória';
        }

        return errors;
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Endereço de e-mail" />
                {formErrors.email && <span>{formErrors.email}</span>}
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Senha" />
                {formErrors.password && <span>{formErrors.password}</span>}
                <button type="submit">Entrar</button>
            </form>
            {loginSuccess && <h3>Login efetuado com sucesso!</h3>}
        </div>
    );
};

const initialState = { email: '', password: '' };

export default withFormHandling(Form1, initialState);
