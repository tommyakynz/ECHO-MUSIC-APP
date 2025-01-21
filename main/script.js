
window.onload = function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        
        document.getElementById("signUpBtn").style.display = "none";
        document.getElementById("logInBtn").style.display = "none";
        document.getElementById("accountIcon").classList.remove("hidden");
    } else {
        // Show Sign Up and Log In buttons, hide Account Icon
        document.getElementById("signUpBtn").style.display = "block";
        document.getElementById("logInBtn").style.display = "block";
        document.getElementById("accountIcon").classList.add("hidden");
        document.getElementById("signOutBtn").style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const logInBtn = document.getElementById('logInBtn');
    if (logInBtn) {
        logInBtn.addEventListener('click', function () {
            localStorage.setItem('currentPage', 'index.html');
        });
    } else {
        console.error("Log In button not found!");
    }
});



document.addEventListener("DOMContentLoaded", function () {
    
    const signOutBtn = document.getElementById('signOutBtn');
    const accountIcon = document.getElementById('accountIcon');

    // Function to handle sign out
    signOutBtn.addEventListener('click', function () {
        accountIcon.style.display = 'none';
        signOutBtn.style.display = 'none';

        localStorage.removeItem("isLoggedIn");

        window.location.href = "./index.html";
    });
});


function showLoginPage() {
    setTimeout(function () {
        window.location.href = './loginPage.html';
    }, 2000);
}

function showSignUp() {
    setTimeout(function () {
        window.location.href = './signupPage.html';
    }, 2000);
}

function loginUser() {
    localStorage.setItem("isLoggedIn", "true");
    window.location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    if (!searchButton || !searchInput) {
        console.error("Search button or input field not found!");
        return;
    }

    searchButton.addEventListener('click', function () {
        const query = searchInput.value.trim();

        // Log the search term to the console for debugging
        console.log("Search query:", query);

        if (query) {
            // Redirect to discover.html with the search query in the URL
            window.location.href = `discover.html?searchQuery=${encodeURIComponent(query)}`;
        } else {
            alert("Please enter a search term.");
        }
    });
});






// For the scroll up button
document.addEventListener("DOMContentLoaded", function () {
    const scrollUpBtn = document.getElementById('scrollUpBtn');
    
    if (scrollUpBtn) {
        scrollUpBtn.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth" 
            });
        });
    } else {
        console.error("Scroll up button not found!");
    }
});

function showDiscover() {
    setTimeout(function () {
        window.location.href = './discover.html';
    }, 2000);
};

