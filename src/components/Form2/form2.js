import React, { useState } from 'react';
import withFormHandling from '../WithFormHandling/withFormHandling';

const Form2 = ({ formData, handleInputChange, handleSubmit, errors }) => {
    const [error, setError] = useState(null);

    const validateForm = () => {
        if (!formData.username || !formData.password) {
            setError('Por favor, preencha todos os campos.');
            return false;
        }
        return true;
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handleSubmit();
        }
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nome completo" />
                <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Nome de usuário" />
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Senha" />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Endereço de e-mail" />
                {errors.email && <span>{errors.email}</span>}
                <input type="number" name="age" value={formData.age} onChange={handleInputChange} placeholder="Idade" />
                {error && <span>{error}</span>}
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

const initialState = { name: '', username: '', password: '', email: '', age: '' };

export default withFormHandling(Form2, initialState);
