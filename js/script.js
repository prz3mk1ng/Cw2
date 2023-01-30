function insertRow() {
    var table = document.querySelector("table");
    var row = table.insertRow(-1);
    var dayOfWeekCell = row.insertCell(0);
    var dayCell = row.insertCell(1);
    var monthCell = row.insertCell(2);
    var yearCell = row.insertCell(3);
    var hourCell = row.insertCell(4);

    // ustawienie wartości komórek na aktualną datę i godzinę
    var currentDate = new Date();
    dayOfWeekCell.innerHTML = currentDate.toLocaleString('pl-PL', { weekday: 'long' });
    dayCell.innerHTML = currentDate.getDate();
    monthCell.innerHTML = currentDate.toLocaleString('pl-PL', { month: 'long' });
    yearCell.innerHTML = currentDate.getFullYear();
    hourCell.innerHTML = currentDate.getHours() + ':' + currentDate.getMinutes();
}