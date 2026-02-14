const startInput = document.getElementById('start-date');
const endInput = document.getElementById('end-date');
const calculateBtn = document.getElementById('calculate-btn');
const clearBtn = document.getElementById('clear-btn');
const resultP = document.getElementById('result');
const copyBtn = document.getElementById('copy-btn');

calculateBtn.addEventListener('click', () => {
    const startDate = new Date(startInput.value);
    const endDate = new Date(endInput.value);

    if(!startInput.value || !endInput.value){
        resultP.textContent = "Please select both dates!";
        return;
    }

    if(startDate > endDate){
        resultP.textContent = "Start date cannot be after End date!";
        return;
    }

    const diffTime = endDate - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = (diffDays / 7).toFixed(1);
    const diffMonths = (diffDays / 30).toFixed(1);
    const diffYears = (diffDays / 365).toFixed(2);

    resultP.innerHTML = `
        <strong>Days:</strong> ${diffDays} <br>
        <strong>Weeks:</strong> ${diffWeeks} <br>
        <strong>Months:</strong> ${diffMonths} <br>
        <strong>Years:</strong> ${diffYears}
    `;
});

clearBtn.addEventListener('click', () => {
    startInput.value = '';
    endInput.value = '';
    resultP.textContent = 'Enter dates above';
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(resultP.textContent)
    .then(() => alert('Result copied!'))
    .catch(err => alert('Failed to copy'));
});
