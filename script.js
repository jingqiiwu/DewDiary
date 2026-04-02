function getTip() {
  let tips = [
    "Always wear SPF, even on cloudy days",
    "Always remove your makeup before cleansing at night",
    "Drink water to keep yourself and your skin hydrated",
    "Less is more",
    "Never skip moisturising, even if you have oily skin",
    "Change your pillowcases regularly to avoid breakouts"
  ];

  let randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tip").innerText = randomTip;
}

function toggleTips() {
  let x = document.getElementById("extraTips");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function submitForm() {
  alert("Message sent 💌");
  return true;
}