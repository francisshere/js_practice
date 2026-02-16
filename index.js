// your JavaScript file
const container = document.querySelector("#container");
const container2 = document.querySelector("#container-2");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const p = document.querySelector("#red-p");
p.classList.add("paragraph");
p.textContent = "Hey I'm red!";
p.style.color = "red";

const h3 = document.querySelector("#blue-h3");
h3.classList.add("heading");
h3.textContent = "I'm a blue H3!";
h3.style.color = "blue";

const div = document.createElement("div");
div.classList.add("black-pink-div");
div.style.backgroundColor = "red";
div.style.border = "1px solid black";

const h1 = document.createElement("h1");
h1.classList.add("div-heading");
h1.textContent = "Im in a div";

const p2 = document.createElement("p");
p2.classList.add("div-paragraph");
p2.textContent = "ME TOO!";

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(container2);

container2.appendChild(div);
container2.appendChild(h1);
container2.appendChild(p2);
