function addTrip() {
    const destinationInput = document.getElementById('destination');
    const dateInput = document.getElementById('date');

    const destination = destinationInput.value;
    const date = dateInput.value;

    if (!destination || !date) {
        alert('Please enter both destination and date!');
        return;
    }

    const tripList = document.getElementById('trip-list');

    const tripDiv = document.createElement('div');
    tripDiv.className = 'trip';

    const tripContent = `
        <h3>${destination}</h3>
        <p>Date: ${new Date(date).toLocaleDateString()}</p>
    `;

    tripDiv.innerHTML = tripContent;

    tripList.appendChild(tripDiv);

    destinationInput.value = '';
    dateInput.value = '';
}