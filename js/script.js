// =====================
// WELCOME MESSAGE
// =====================

// Call the welcomeMessage function when the script loads
welcomeMessage();

function welcomeMessage() {
    let userResponse = prompt("What is your name?");

    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    document.getElementById("welcome-speech").innerText =
        `Welcome, ${userResponse}! to My Website.`;
}


// =====================
// MESSAGE US OUTPUT
// =====================

function showMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (name === "" || email === "" || pesan === "") {
        alert("Mohon lengkapi semua data!");
        return;
    }

    if (!gender) {
        alert("Pilih jenis kelamin terlebih dahulu!");
        return;
    }

    document.getElementById("outName").innerText = name;
    document.getElementById("outEmail").innerText = email;
    document.getElementById("outGender").innerText = gender.value;
    document.getElementById("outPesan").innerText = pesan;
}
function clearForm() {
    // Clear input form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pesan").value = "";

    const gender = document.querySelectorAll('input[name="gender"]');
    gender.forEach(radio => radio.checked = false);

    // Clear output
    document.getElementById("outName").innerText = "";
    document.getElementById("outEmail").innerText = "";
    document.getElementById("outGender").innerText = "";
    document.getElementById("outPesan").innerText = "";
}
