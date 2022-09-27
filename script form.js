const form = document.getElementById('form');
const nama = document.getElementById('nama');
const nim = document.getElementById('nim');
const tanggal_lahir = document.getElementById('tanggal_lahir');


function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (nama.value === '') {
        showError(nama, 'nama harus diisi');
    } else{
        showSuccess(nama);
    }
    
    if (nim.value === '') {
        showError(nim, 'nim harus diisi');
    } else{
        showSuccess(nim);
    }

    if (tanggal_lahir.value === '') {
        showError(tanggal_lahir, 'nim harus diisi');
    } else{
        showSuccess(tanggal_lahir);
    }
})