// ========================================
// COUNTDOWN TIMER
// ========================================

// Change to your wedding date

const weddingDate = new Date(
    "August 22, 2026 11:30:00"
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

    lat: 11.432924,
    lng: 76.004706

};

const openMapBtn =
document.getElementById("openMapBtn");

if(openMapBtn){

    openMapBtn.addEventListener("click", () => {

        const mapUrl =
        `https://www.google.co.in/maps/place/kodenchery+parish+hall/@11.4313818,76.0055301,18.29z/data=!4m15!1m8!3m7!1s0x3ba66bc3af28155f:0xf6fcc1ae2539b57e!2sKodenchery,+Kerala+673580!3b1!8m2!3d11.4323285!4d76.0072749!16s%2Fm%2F05211bh!3m5!1s0x3ba66b432a8b5b59:0x53a128effcc052a6!8m2!3d11.4327406!4d76.0046642!16s%2Fg%2F11f9w5ck50?entry=ttu&g_ep=EgoyMDI2MDgwNS4xIKXMDSoASAFQAw%3D%3D`;

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
