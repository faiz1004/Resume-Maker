document.getElementById('profilePicture').addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('profilePreview').src = e.target.result;
    };
    reader.readAsDataURL(file);
});

document.getElementById('generate').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const about = document.getElementById('about').value;
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const projects = document.getElementById('projects').value;
    const skills = document.getElementById('skills').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const portfolio = document.getElementById('portfolio').value;

    const resumePreview = document.getElementById('resumePreview');
    resumePreview.innerHTML = `
        <div class="resume-content">
            <img src="${document.getElementById('profilePreview').src}" alt="Profile Picture" style="width: 100px; height: 100px; border-radius: 50%; margin-bottom: 10px;">
            <h2 style="color: #007bff;">${name}</h2>
            <p style="font-size: 14px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 14px;"><strong>Phone:</strong> ${phone}</p>
            <p style="font-size: 14px;"><strong>Address:</strong> ${address}</p>
            <h3 style="color: #0056b3;">About</h3>
            <p style="font-size: 14px;">${about}</p>
            <h3 style="color: #0056b3;">Education</h3>
            <p style="font-size: 14px;">${education}</p>
            <h3 style="color: #0056b3;">Work Experience</h3>
            <p style="font-size: 14px;">${experience}</p>
            <h3 style="color: #0056b3;">Projects</h3>
            <p style="font-size: 14px;">${projects}</p>
            <h3 style="color: #0056b3;">Skills</h3>
            <p style="font-size: 14px;">${skills}</p>
            <h3 style="color: #0056b3;">Links</h3>
            <p style="font-size: 14px;"><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>
            <p style="font-size: 14px;"><strong>GitHub:</strong> <a href="${github}">${github}</a></p>
            <p style="font-size: 14px;"><strong>Portfolio:</strong> <a href="${portfolio}">${portfolio}</a></p>
        </div>
    `;

    // Clear fields after generating the resume
    clearFields();
});

// Print resume functionality
document.getElementById('printBtn').addEventListener('click', function () {
    const resumePreview = document.getElementById('resumePreview').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write(`
        <html>
            <head>
                <title>Print Resume</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                    }
                    .resume-content {
                        margin: 20px;
                    }
                </style>
            </head>
            <body onload="window.print(); window.close();">
                ${resumePreview}
            </body>
        </html>
    `);
    printWindow.document.close();
});

// Clear fields function
function clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    document.getElementById('about').value = '';
    document.getElementById('education').value = '';
    document.getElementById('experience').value = '';
    document.getElementById('projects').value = '';
    document.getElementById('skills').value = '';
    document.getElementById('linkedin').value = '';
    document.getElementById('github').value = '';
    document.getElementById('portfolio').value = '';
}
