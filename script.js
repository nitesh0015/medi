var txtInput = document.querySelector("#speak").innerText;
var voiceList = document.querySelector("#voiceList");
var btnSpeak = document.querySelector("#btnSpeak");
var synth = window.speechSynthesis;
var save_date;
var voices = [];

if (speechSynthesis !== undefined) {
  speechSynthesis.onvoiceschanged = PopulateVoices;
}
for (let i = 0; i <= 5; i++) {
  btnSpeak.addEventListener("click", () => {
    let s = document.getElementsByClassName("medicine" + i)[0].innerText;
    var toSpeak = new SpeechSynthesisUtterance(s);
    console.log(toSpeak);
    var selectedVoiceName =
      voiceList.selectedOptions[0].getAttribute("data-name");
    voices.forEach((voice) => {
      if (voice.name === selectedVoiceName) {
        toSpeak.voice = voice;
      }
    });
    synth.speak(toSpeak);
  });
}
function PopulateVoices() {
  voices = synth.getVoices();
  const { userAgent } = navigator;
  var selectedIndex;
  if (userAgent.includes("Firefox/")) {
    console.log("Firefox");
    // Firefox
    selectedIndex = voiceList.selectedIndex < 0 ? 1 : voiceList.selectedIndex;
  } else if (userAgent.includes("Edg/")) {
    console.log("Edge");
    selectedIndex = voiceList.selectedIndex < 0 ? 4 : voiceList.selectedIndex;
    // Edge (Chromium)
  } else if (userAgent.includes("Chrome/")) {
    console.log("chrome");
    // Chrome
    selectedIndex = voiceList.selectedIndex < 0 ? 1 : voiceList.selectedIndex;
  } else if (userAgent.includes("Android /")) {
    console.log("Android");
    // Safari
    selectedIndex = voiceList.selectedIndex < 0 ? 7 : voiceList.selectedIndex;
  }
  voiceList.innerHTML = "";
  voices.forEach((voice) => {
    var listItem = document.createElement("option");
    listItem.textContent = voice.name;
    listItem.setAttribute("data-lang", voice.lang);
    listItem.setAttribute("data-name", voice.name);
    voiceList.appendChild(listItem);
  });
  voiceList.selectedIndex = selectedIndex;
}
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}
function hindi() {
  //document.getElementById("demo").innerHTML = "<strong>रंग : सफेद</strong>";
  const j = document.getElementsByTagName("FONT");
  console.log(j);
  console.log(document.getElementsByClassName("medicine" + i)[0].innerText);
}
var countDownDate = new Date("March 13 , 2023 00:00:01").getTime();

// Run myfunc every second
  var myfunc = setInterval(function () 
{
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  // Calculating the days, hours, minutes and seconds left
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));

  save_date = days;
  if (save_date <= 10) {
    alert(save_date + " Days remaining to Expiry date");
  }
  console.log(save_date);
  // Result is output to the specific element
  document.getElementById("days").innerHTML = days;

  // Display the message when countdown is over
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = "";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("mins").innerHTML = "";
    document.getElementById("secs").innerHTML = "";
    document.getElementById("end").innerHTML = "TIME UP!!";
  }
}, 1000);
PopulateVoices();
