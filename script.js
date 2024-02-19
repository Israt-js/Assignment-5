
let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".seat-1");

for (let i = 0; i < cards.length; i++) {
    const seat1 = cards[i];
    seat1.addEventListener("click", function() {
        const title = seat1.querySelector("span").innerText;
        const priceText = seat1.querySelector("h2").innerText;

        const price = parseFloat(priceText);
        const titleContainer = document.getElementById("title-container");
        const p = document.createElement("p");
        p.innerText = titleCount + " " + title;
        titleContainer.appendChild(p);
        titleCount++;

        totalPrice += price;
        document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
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
        
        } else{
            alert("Invalid Your coupon code")
        }
    }
    else {
        alert("You need to select at least 4 seats to apply a coupon.");
    }
});

