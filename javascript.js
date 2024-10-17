function submitQuiz() {
    const email = localStorage.getItem('userEmail');
    const password = localStorage.getItem('userPassword');
    let selectedOptions = [];

    // Get all questions
    const questions = document.querySelectorAll('.question');

    // Iterate through each question
    questions.forEach((question) => {
        const checkboxes = question.querySelectorAll('input[type="checkbox"]');

        // Initialize an array with zeros to represent the options (4 options per question)
        let answers = [0, 0, 0, 0];

        // Iterate through checkboxes and set the corresponding index to 1 if checked
        checkboxes.forEach((checkbox, idx) => {
            if (checkbox.checked) {
                answers[idx] = 1;
            }
        });

        // Add the answers array for the current question to the selectedOptions array
        selectedOptions.push(answers);
    });

    // Check if any answers are selected
    if (selectedOptions.length > 0) {
        // Construct the data object to send to the backend
        const formData = {
            email,
            password,
            answers: selectedOptions
        };

        // Replace with your actual URL
        const url = 'https://vgzaeecyqb.execute-api.us-east-1.amazonaws.com/default/Testevaluation';

        // Headers
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        // Options for the POST request
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(formData),
            redirect: 'follow'
        };

        // Send data to the endpoint using fetch API
        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);

                // Display the result in the result div
                const resultDiv = document.getElementById('result');
                resultDiv.innerHTML = ''; // Clear previous results

                // Display any message from the Lambda function
                if (result.message === "Results stored successfully") {
                    const messageDiv = document.createElement('p');
                    messageDiv.textContent = result.message;
                    messageDiv.style.fontWeight = 'bold';  // Make the message stand out
                    resultDiv.appendChild(messageDiv);
                    const totalMarks = result.totalMarks || 0;
                    const score = result.score || 0;
                    const percentage = result.percentage || 0;
                    const passFailMessage = percentage >= 37 ? 'Pass' : 'Fail';
                    const details = result.details || "No details available.";

                    // Append the result summary
                    resultDiv.innerHTML += `
                        <h3>Result of Test:</h3>
                        <p><strong>Total Marks:</strong> ${totalMarks}</p>
                        <p><strong>Score:</strong> ${score}</p>
                        <p><strong>Percentage:</strong> ${percentage}%</p>
                        <p><strong>Status:</strong> ${passFailMessage}</p>
                        <p><strong>Summary Of Marks:<br></strong>${details}</p>
                    `;
                }
                else if (result.message === "Test already submitted.You Can Close the Window now") {
                    const messageDiv = document.createElement('p');
                    messageDiv.textContent = result.message;
                    messageDiv.style.fontWeight = 'bold';  // Make the message stand out
                    resultDiv.appendChild(messageDiv);              // Extract results or use default values if not present
                
                }
            })
            .catch((error) => {
                console.error('Error:', error);

                // Display an error message
                const resultDiv = document.getElementById('result');
                resultDiv.innerHTML = `
                    <h3>Error:</h3>
                    <pre>${error}</pre>
                `;
            });
    } else {
        // Handle case where no options were selected
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <h3>No answers submitted.</h3>
            <p><strong>Total Marks:</strong> 0</p>
            <p><strong>Score:</strong> 0</p>
            <p><strong>Percentage:</strong> 0%</p>
            <p><strong>Status:</strong> Fail</p>
            <p><strong>Summary:</strong> All Questions are Unattempted..!</p>
        `;
    }
}
