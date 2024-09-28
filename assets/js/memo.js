var data = localStorage;
var checkboxes = document.getElementsByName('memo');
var note = document.getElementById('note');

for (let checkbox of checkboxes) {
    let number = checkbox.value;
    switch(data.getItem(number)) {
        // Reflect saved data on the page
        case "0":
            checkbox.checked = false;
            break;
        case "1":
            checkbox.checked = true;
            break;
        default:
            // Data initialization
            checkbox.checked = false;
            data.setItem(number, 0);
    }
    checkbox.addEventListener('change', ()=>{
        data.setItem(number, parseInt(data.getItem(number)) ^ 1);
    });
}

// Data initialization
if (!data.hasOwnProperty('note')) {
    data.setItem('note', '');
}
// Reflect note
note.value = data.getItem('note');
// Update note
note.addEventListener('input', ()=>{
    data.setItem('note', note.value);
});
