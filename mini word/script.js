
const colorInput    = document.getElementById("colorInput");
const fontSizeInput = document.getElementById("fontSizeInput");
const fontSelect    = document.getElementById("fontSelect");
const myParagraph   = document.getElementById("myParagraph");


function updateParagraphStyle() {
  myParagraph.style.color      = colorInput.value;
  myParagraph.style.fontSize   = fontSizeInput.value + "px";
  myParagraph.style.fontFamily = fontSelect.value;
}


colorInput.addEventListener("input", updateParagraphStyle);
fontSizeInput.addEventListener("input", updateParagraphStyle);
fontSelect.addEventListener("change", updateParagraphStyle);


updateParagraphStyle();
