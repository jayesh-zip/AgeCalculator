const calculateButton = document.getElementsByTagName("button");
const birthdateInput = document.getElementById("date");
birthdateInput.max = new Date().toISOString().split("T")[0];
const resultElement = document.getElementById("result");

function calculateAge() {
    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();

    // console.log(birthdate)
    // console.log(currentDate)
    
    ageInMilliseconds = currentDate - birthdate;
    // console.log(ageInMilliseconds)
    
    const ageDate = new Date(ageInMilliseconds);
    // console.log(ageDate)
    
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    
    resultElement.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;
}

// function calculateAge() {
//     const birthdate = new Date(birthdateInput.value);
//     const currentDate = new Date();

//     if (birthdate > currentDate) {
//         resultElement.textContent = "Please enter a valid birthdate.";
//         return;
//     }

//     const years = currentDate.getFullYear() - birthdate.getFullYear();
//     const months = currentDate.getMonth() - birthdate.getMonth();
//     const days = currentDate.getDate() - birthdate.getDate();

//     if (days < 0) {
//         months--;
//         // Get the number of days in the last month
//         const daysInLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
//         days += daysInLastMonth;
//     }

//     if (months < 0) {
//         years--;
//         months += 12;
//     }

//     resultElement.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
// }
