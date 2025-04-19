function func() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "komalyangal@gmail.com" && password === "Komal@90") {
        document.getElementById("successMessage").style.display = "flex";
    } else {
        alert("Invalid Username & password. Please try again.");
    }

    // Clear input fields correctly
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function closePopup() {
    document.getElementById("successMessage").style.display = "none";
}


function othen() {
    const username = document.getElementById("prn").value;
    const mail = document.getElementById("mail").value;
    const pass = document.getElementById("pass").value;
    const name = document.getElementById("box2").value;
}