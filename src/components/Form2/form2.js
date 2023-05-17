import React from 'react';
import withFormHandling from '../WithFormHandling/withFormHandling';


const Form2 = ({ formData, handleInputChange, handleSubmit, errors }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nome completo" />
                <input type="text" name="username" value={formData.username} onChange={handleInputChange} placeholder="Nome de usuário" />
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Senha" />
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Endereço de e-mail" />
                {errors.email && <span>{errors.email}</span>}
                <input type="number" name="age" value={formData.age} onChange={handleInputChange} placeholder="Idade" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

const initialState = { name: '', username: '', password: '', email: '', age: '' };

export default withFormHandling(Form2, initialState);
