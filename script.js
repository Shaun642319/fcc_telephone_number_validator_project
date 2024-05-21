const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const checkNum = num => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/i;
  if(regex.test(num)) {
    result.innerHTML += `<p class="valid-text">Valid US number: ${num}</p>`;
  } else {
    result.innerHTML += `<p class="invalid-text">Invalid US number: ${num}</p>`;
  };
};


checkBtn.addEventListener("click", () => {
  if(userInput.value === "") {
    alert("Please provide a phone number");
    return;
  }
  checkNum(userInput.value);
  userInput.value = "";
});

userInput.addEventListener("keydown", e => {
  if(e.key === "Enter") {
    if(userInput.value === "") {
      alert("Please provide a phone number");
      return;
    }
    checkNum(userInput.value);
    userInput.value = "";
  }
});

clearBtn.addEventListener("click", () => {
  result.innerHTML = "";
});
