import React, { useState } from 'react';

const withFormHandling = (WrappedComponent, initialState) => {
    const WithFormHandling = (props) => {
        const [formData, setFormData] = useState(initialState);
        const [errors, setErrors] = useState({});

        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData((prevState) => ({ ...prevState, [name]: value }));
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            const formErrors = validateForm();
            if (Object.keys(formErrors).length > 0) {
                setErrors(formErrors);
            } else {
                setErrors({});
                console.log(formData);
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

            return formErrors;
        };

        return <WrappedComponent formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} errors={errors} />;
    };

    return WithFormHandling;
};

export default withFormHandling;
