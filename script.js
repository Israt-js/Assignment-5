
let titleCount = 1;
let titleCountes = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".seat-1");

for (let i = 0; i < cards.length; i++) {
    const seat1 = cards[i];
    seat1.addEventListener("click", function() {
        const title = seat1.querySelector("span").innerText;
        const priceText = seat1.querySelector("h2").innerText;
        const main = seat1.querySelector("p").innerText;

        const price = parseFloat(priceText);
        const titleContainer = document.getElementById("title-container");
        const p = document.createElement("p");
        p.innerText = main + " " + title + " " + priceText;
        titleContainer.appendChild(p);
        titleCount++;

        totalPrice += price;
        document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);

        const titleCounte = document.getElementById("titleCounte");
        titleCounte.textContent = titleCountes;
        titleCountes++;
    });
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function() {
    const couponInput = document.getElementById("coupon-input");
    const couponCode = couponInput.value.toUpperCase();
    if(totalPrice >= 2200){
        if (couponCode === "NEW15") {
            // Apply 15% discount
            const discount = totalPrice * 0.15;
            const discountedPrice = totalPrice - discount;
            totalPrice = discountedPrice;
            document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);

            document.getElementById("grand-b").innerText = "BDT " + totalPrice.toFixed(2);
            
            alert("Coupon applied successfully! 15% discount has been applied.");
        
        }
        else if(couponCode === "COUPLE20") {
            // Apply 15% discount
            const discount = totalPrice * 0.20;
            const discountedPrice = totalPrice - discount;
            totalPrice = discountedPrice;
            document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);

            document.getElementById("grand-b").innerText = "BDT " + totalPrice.toFixed(2);
            
            alert("Coupon applied successfully! 20% discount has been applied.");
        
        } else{
            alert("Invalid Your coupon code")
        }
    }
    else {
        alert("You need to select at least 4 seats to apply a coupon.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const seats = document.querySelectorAll(".seat-1");

    seats.forEach(seat => {
        seat.addEventListener("click", function() {
            if (seat.style.backgroundColor === 'rgba(15, 214, 15, 0.811)') {
                seat.style.backgroundColor = '';
            } else {
                seat.style.backgroundColor = 'rgba(15, 214, 15, 0.811)';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const seats = document.querySelectorAll(".seat-1");
    const seatsLeftElement = document.querySelector(".seatt");
    let seatsLeft = parseInt(seatsLeftElement.textContent);

    seats.forEach(seat => {
        seat.addEventListener("click", function() {
            seat.classList.toggle("selected");
            seatsLeft--;
            seatsLeftElement.textContent = seatsLeft + " Seats left";
        });
    });
});

