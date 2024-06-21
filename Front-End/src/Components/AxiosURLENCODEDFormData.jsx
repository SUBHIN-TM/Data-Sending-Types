import { useState } from 'react';
import axios from 'axios';

const AxiosURLENCODEDFormData = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await axios.post('http://localhost:3000/axiosURLENCODEDFormData', formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'   // NOW IT WILL SEND FORM DATA INSTEAD OF JSON
                  }
            });
            console.log('Form submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <div>Axios Form Data URL ENCODED </div>
            <div style={{ padding: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <label style={{ marginRight: '10px' }} htmlFor="name">Name</label>
                    <input
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        type="text"
                    />
                    <br />
                    <label htmlFor="number">Number</label>
                    <input
                        type="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default AxiosURLENCODEDFormData;