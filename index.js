// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const p = document.querySelector("#red-p");
p.classList.add("paragraph");
p.textContent = "Hey I'm red!";
p.style.color = "red";



container.appendChild(content);
container.appendChild(p);