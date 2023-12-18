
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            successMessage.style.display = 'block';
            contactForm.reset();
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();

        if (name === '' || email === '' || phoneNumber === '') {
            alert('Please fill in all fields');
            return false;
        }

        if (!validatePhoneNumber(phoneNumber)) {
            alert('Please enter a valid 10-digit phone number');
            return false;
        }

        return true;
    }

    function validatePhoneNumber(phoneNumber) {
        const re = /^[0-9]{10}$/;
        return re.test(phoneNumber);
    }
});