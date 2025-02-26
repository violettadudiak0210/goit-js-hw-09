const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', (e) => {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        Object.entries(parsedData).forEach(([key, value]) => {
            form.elements[key].value = value;
            formData[key] = value;
        });
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    e.target.reset();
    formData.email = '';
    formData.message = '';
});
