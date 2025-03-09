//BUSINESS LOGINNNNNNNNNNNNNN

document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("business-login");
    const popup = document.getElementById("business-login-popup");
    const closeBtn = document.getElementById("close-popup");

    // Open popup when login button is clicked
    loginBtn.addEventListener("click", function () {
        popup.style.display = "flex";
    });

    // Close popup when close button is clicked
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Close popup when Escape key is pressed
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            popup.style.display = "none";
        }
    });

    // Close popup when clicking outside the form
    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

//JOB LOGINNNNNNNNNNNNNNNNNNN

document.addEventListener("DOMContentLoaded", function () {
    const jobLoginBtn = document.getElementById("job-login");
    const jobPopup = document.getElementById("job-login-popup");
    const closeJobBtn = document.getElementById("close-job-popup");

    // Open popup when job login button is clicked
    jobLoginBtn.addEventListener("click", function () {
        jobPopup.style.display = "flex";
    });

    // Close popup when close button is clicked
    closeJobBtn.addEventListener("click", function () {
        jobPopup.style.display = "none";
    });

    // Close popup when Escape key is pressed
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            jobPopup.style.display = "none";
        }
    });

    // Close popup when clicking outside the form
    window.addEventListener("click", function (event) {
        if (event.target === jobPopup) {
            jobPopup.style.display = "none";
        }
    });
});

//BUSINESS REGGGGGGGG

document.addEventListener("DOMContentLoaded", function () {
    const businessLoginBtn = document.getElementById("business-login");
    const businessLoginPopup = document.getElementById("business-login-popup");
    const businessCloseBtn = document.getElementById("close-popup");

    const businessRegisterBtn = document.getElementById("business-register");
    const businessRegisterPopup = document.getElementById("business-register-popup");
    const businessRegisterCloseBtn = document.getElementById("close-business-register");

    // Open Business Login Popup
    businessLoginBtn.addEventListener("click", function () {
        businessLoginPopup.style.display = "flex";
    });

    // Close Business Login Popup
    businessCloseBtn.addEventListener("click", function () {
        businessLoginPopup.style.display = "none";
    });

    // Open Business Registration Popup
    businessRegisterBtn.addEventListener("click", function () {
        businessRegisterPopup.style.display = "flex";
    });

    // Close Business Registration Popup
    businessRegisterCloseBtn.addEventListener("click", function () {
        businessRegisterPopup.style.display = "none";
    });

    // Close popups when Escape key is pressed
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            businessLoginPopup.style.display = "none";
            businessRegisterPopup.style.display = "none";
        }
    });

    // Close popups when clicking outside the form
    window.addEventListener("click", function (event) {
        if (event.target === businessLoginPopup) {
            businessLoginPopup.style.display = "none";
        }
        if (event.target === businessRegisterPopup) {
            businessRegisterPopup.style.display = "none";
        }
    });
});


//JOB REGGGGGGGGG

document.addEventListener("DOMContentLoaded", function () {
    // Elements for Job Aspirant Registration
    const jobRegisterBtn = document.getElementById("job-register");
    const jobRegisterPopup = document.getElementById("job-register-popup");
    const jobRegisterCloseBtn = document.getElementById("close-job-register");

    // Open Job Registration Popup
    jobRegisterBtn.addEventListener("click", function () {
        jobRegisterPopup.style.display = "flex";
    });

    // Close Job Registration Popup
    jobRegisterCloseBtn.addEventListener("click", function () {
        jobRegisterPopup.style.display = "none";
    });

    // Close popups when Escape key is pressed
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            jobRegisterPopup.style.display = "none";
        }
    });

    // Close popups when clicking outside the form
    window.addEventListener("click", function (event) {
        if (event.target === jobRegisterPopup) {
            jobRegisterPopup.style.display = "none";
        }
    });

    // DOB Auto-Formatting & Calendar Sync
    const dobInput = document.getElementById("job-dob");
    const dobCalendar = document.getElementById("job-dob-calendar");

    // Auto-format Date of Birth input (DD/MM/YYYY)
    dobInput.addEventListener("input", function (event) {
        let value = event.target.value.replace(/[^0-9/]/g, ""); // Allow only numbers and /
        
        // Remove extra /
        let parts = value.split("/");
        if (parts.length > 3) {
            value = parts.slice(0, 3).join("/");
        }

        // Remove slashes and reconstruct the date
        let rawValue = value.replace(/\D/g, "");
        if (rawValue.length > 8) rawValue = rawValue.slice(0, 8);

        let formattedValue = "";
        if (rawValue.length > 4) {
            formattedValue = `${rawValue.slice(0, 2)}/${rawValue.slice(2, 4)}/${rawValue.slice(4)}`;
        } else if (rawValue.length > 2) {
            formattedValue = `${rawValue.slice(0, 2)}/${rawValue.slice(2)}`;
        } else {
            formattedValue = rawValue;
        }

        event.target.value = formattedValue;
    });

    // Sync calendar input with text input
    dobCalendar.addEventListener("change", function () {
        if (dobCalendar.value) {
            let [year, month, day] = dobCalendar.value.split("-");
            dobInput.value = `${day}/${month}/${year}`;
        }
    });

    // Clicking on text input opens the calendar picker
    dobInput.addEventListener("focus", function () {
        dobCalendar.showPicker(); // Opens the date picker when clicking the text input
    });
});
