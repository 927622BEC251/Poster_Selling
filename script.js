const IMAGE_COUNT = 50;

const fallbackQuotes = [
  "Dream big and dare to fail","Stay strong and keep moving","Believe in yourself",
  "Success starts with discipline","Make it happen","Push your limits",
  "Stay focused","Be fearless","Never give up","Rise above the storm",
  "Turn pain into power","Stay hungry stay foolish","Work hard dream big",
  "Chase your dreams","Do it now","Stay positive","Believe in magic",
  "Create your future","Keep going","Be unstoppable","Focus on the goal",
  "Hard work beats talent","Silence is power","Grow through what you go through",
  "Small steps every day","Discipline equals freedom","Progress not perfection",
  "Make yourself proud","Trust the process","Be your own hero",
  "Stay humble hustle hard","Nothing worth is easy","Dream it. Wish it. Do it.",
  "Stay calm and work hard","Success is earned","You are your limit",
  "Push beyond limits","Never settle","Be bold be brave","Your future is now",
  "Keep grinding","No excuses","Strive for greatness","Work until it happens",
  "Stay sharp","Be consistent","Take the risk","Level up your life",
  "Think big act bigger","Win your day"
];

function loadPhotos() {
  const list = document.getElementById("photoList");
  list.innerHTML = "";

  for (let i = 0; i < IMAGE_COUNT; i++) {
    const quote = fallbackQuotes[i % fallbackQuotes.length];

    // ✅ FIXED IMAGE (stable)
    const img = `https://picsum.photos/seed/${i}/500/700`;
    const price = 100;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="poster">
        <img src="${img}" />
        <div class="overlay"></div>
        <div class="quote-text">${quote}</div>
      </div>
      <p>₹${price} / poster</p>
      <button class="addBtn">Add to Cart</button>
    `;

    // ✅ Correct data binding
    card.querySelector(".addBtn").addEventListener("click", () => {
      addToCart(img, quote, price);
    });

    list.appendChild(card);
  }
}

function addToCart(img, quote, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ img, quote, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  openCart(); // 👈 use this instead
}
function openCart() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("cartFrameContainer").style.right = "0";
  document.getElementById("cartFrame").src = "cart.html";
}

function closeCart() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("cartFrameContainer").style.right = "-400px";
}

loadPhotos();