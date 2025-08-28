const display = document.getElementById('display');
const keys = document.querySelectorAll('.keys button');

let calculation = '';

// Handle button clicks
keys.forEach(key => {
    key.addEventListener('click', () => {
        const value = key.value;

        if (value === 'C') {
            calculation = '';
            display.value = '';
        } else if (value === '=') {
            try {
                // Prevent evaluation of invalid expressions
                if (calculation.trim() !== '') {
                    const result = eval(calculation);
                    display.value = result;
                    calculation = result.toString();
                }
            } catch (error) {
                display.value = 'Error';
                calculation = '';
            }
        } else {
            // Prevent multiple operators in a row
            const lastChar = calculation.slice(-1);
            if ('+-*/'.includes(value) && '+-*/'.includes(lastChar)) {
                calculation = calculation.slice(0, -1) + value;
            } else {
                calculation += value;
            }
            display.value = calculation;
        }
    });
});
