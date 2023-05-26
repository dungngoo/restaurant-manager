import React, { useState } from 'react';
import Modal from 'react-modal';

const CalculateSalaryModal = ({ isOpen, onClose }) => {
    const [hoursWorked, setHoursWorked] = useState('');
    const [wage, setWage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const salaryData = {
            hoursWorked,
            wage,
        };
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <h2>Calculate Salary</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Hours Worked:
                    <input type="number" value={hoursWorked} onChange={(e) => setHoursWorked(e.target.value)} />
                </label>
                <label>
                    Wage:
                    <input type="number" value={wage} onChange={(e) => setWage(e.target.value)} />
                </label>
                <button type="submit">Calculate</button>
                <button onClick={onClose}>Cancel</button>
            </form>
        </Modal>
    );
};

export default CalculateSalaryModal;
