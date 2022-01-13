let text;

const input = document.createElement("input");
document.body.appendChild(input);
input.addEventListener("input", (e) => {
  text = e.target.value;
});

const btn = document.createElement("button");
btn.innerHTML = "Save";
btn.addEventListener("click", function () {
  const newText = text.toLowerCase();
  const splitText = newText.split("_");
  const splitTextArray = [];
  splitTextArray.push(splitText);

  console.log(splitTextArray);
});
document.body.appendChild(btn);
