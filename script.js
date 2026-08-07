// ========================================
// COUNTDOWN TIMER
// ========================================

// Change to your wedding date

const weddingDate = new Date(
    "December 31, 2026 11:30:00"
).getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ========================================
// GOOGLE MAPS BUTTON
// ========================================

// Replace with your venue coordinates

const venue = {

    lat: 11.576542,
    lng: 75.825614

};

const openMapBtn =
document.getElementById("openMapBtn");

if(openMapBtn){

    openMapBtn.addEventListener("click", () => {

        const mapUrl =
        `https://www.google.com/maps/search/?api=1&query=${venue.lat},${venue.lng}`;

        window.open(mapUrl, "_blank");

    });

}



// ========================================
// WHATSAPP SHARE
// ========================================

const shareBtn =
document.getElementById("shareBtn");

if(shareBtn){

    shareBtn.addEventListener("click", () => {

        const text =
        "You're invited to our Wedding Celebration ❤️";

        const pageUrl =
        window.location.href;

        const whatsappUrl =
        `https://wa.me/?text=${encodeURIComponent(text + " " + pageUrl)}`;

        window.open(
            whatsappUrl,
            "_blank"
        );

    });

}



// ========================================
// RSVP SYSTEM
// ========================================

const attendBtn =
document.getElementById("attendBtn");

const declineBtn =
document.getElementById("declineBtn");

const rsvpOptions =
document.getElementById("rsvpOptions");

const attendForm =
document.getElementById("attendForm");

const successBox =
document.getElementById("successBox");

const declineBox =
document.getElementById("declineBox");

const backBtn =
document.getElementById("backBtn");

const confirmBtn =
document.getElementById("confirmBtn");

const plusBtn =
document.getElementById("plusBtn");

const minusBtn =
document.getElementById("minusBtn");

const guestCountDisplay =
document.getElementById("guestCount");

let guestCount = 1;


// ========================================
// ATTEND BUTTON
// ========================================

if(attendBtn){

    attendBtn.addEventListener("click", () => {

        rsvpOptions.classList.add("hidden");

        attendForm.classList.remove("hidden");

    });

}



// ========================================
// DECLINE BUTTON
// ========================================

if(declineBtn){

    declineBtn.addEventListener("click", () => {

        rsvpOptions.classList.add("hidden");

        declineBox.classList.remove("hidden");

    });

}



// ========================================
// BACK BUTTON
// ========================================

if(backBtn){

    backBtn.addEventListener("click", () => {

        attendForm.classList.add("hidden");

        rsvpOptions.classList.remove("hidden");

    });

}



// ========================================
// PLUS BUTTON
// ========================================

if(plusBtn){

    plusBtn.addEventListener("click", () => {

        guestCount++;

        guestCountDisplay.textContent =
        guestCount;

    });

}



// ========================================
// MINUS BUTTON
// ========================================

if(minusBtn){

    minusBtn.addEventListener("click", () => {

        if(guestCount > 1){

            guestCount--;

            guestCountDisplay.textContent =
            guestCount;

        }

    });

}



// ========================================
// CONFIRM ATTENDANCE
// ========================================

if(confirmBtn){

    confirmBtn.addEventListener("click", () => {

        const guestName =
        document
        .getElementById("guestName")
        .value
        .trim();

        const guestPhone =
        document
        .getElementById("guestPhone")
        .value
        .trim();

        if(
            guestName === "" ||
            guestPhone === ""
        ){

            alert(
                "Please enter your name and WhatsApp number."
            );

            return;
        }

        attendForm.classList.add("hidden");

        successBox.classList.remove("hidden");

        document.getElementById(
            "successName"
        ).innerHTML =
        `See you there, ${guestName}!`;



        // ====================================
        // SEND RSVP TO BACKEND
        // ====================================

        const rsvpData = {

            name: guestName,

            phone: guestPhone,

            guests: guestCount,

            status: "Attending",

            submittedAt:
            new Date().toISOString()

        };

        console.log(
            "RSVP Submitted:",
            rsvpData
        );



        /*
        Example API call:

        fetch("/api/rsvp", {

            method: "POST",

            headers: {
                "Content-Type":
                "application/json"
            },

            body:
            JSON.stringify(rsvpData)

        })
        .then(res => res.json())
        .then(data => {

            console.log(data);

        })
        .catch(err => {

            console.error(err);

        });

        */

    });

}



// ========================================
// FLOATING PETALS
// ========================================

const petalsContainer =
document.querySelector(".petals");

if(petalsContainer){

    for(let i=0;i<30;i++){

        const petal =
        document.createElement("div");

        petal.classList.add("petal");

        petal.innerHTML = "❁";

        petal.style.left =
        Math.random()*100 + "vw";

        petal.style.opacity =
        Math.random();

        petal.style.fontSize =
        (Math.random()*15+10)
        + "px";

        petal.style.animationDuration =
        (Math.random()*10+10)
        + "s";

        petalsContainer.appendChild(
            petal
        );

    }

}



// ========================================
// OPTIONAL PAGE LOADED
// ========================================

window.addEventListener(
"load",
() => {

    console.log(
        "Wedding Invitation Loaded Successfully ❤️"
    );

});

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let started = false;

document.body.addEventListener("click", function firstClick(){

    if(!started){

        music.play().catch(()=>{});

        started = true;
    }

    document.body.removeEventListener("click", firstClick);

});

musicBtn.addEventListener("click", () => {

    if(music.paused){

        music.play();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-bell"></i>';

        musicBtn.classList.remove("muted");

    }else{

        music.pause();

        musicBtn.innerHTML =
        '<i class="fa-solid fa-bell-slash"></i>';

        musicBtn.classList.add("muted");

    }

});