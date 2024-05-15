const container = document.querySelector("#container");
const targetImage = document.querySelector("#targetImage");

console.log(container);
const kepek = ["delfin.png", "kutya.webp", "macska.jpg"];

for (const kep of kepek) {
  const img = document.createElement("img");
  img.src = "kepek/" + kep;
  img.width = "200";
  console.log("kep:" + img.src);
  container.appendChild(img);
  img.addEventListener("click", function () {
    console.log(this.src);
    targetImage.src = this.src;
  });
}
