const form = document.querySelector('#contact'); // Replace 'yourFormId' with the actual ID of your form

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const response = await fetch('https://aumartinvestments.com/.netlify/functions/sendEmail', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        alert('Message sent successfully!');
        form.reset();
    } else {
        alert('Error sending message. Please try again later.');
    }
});
