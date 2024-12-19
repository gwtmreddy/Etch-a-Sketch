const generate = document.getElementById("generate");
const resetButton = document.getElementById("reset");
const opacityToggle = document.getElementById("opacityToggle")
let toggle = 0;

function defaultGrid() {
  let container = document.getElementById("container");
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.style.height = `37.5px`;
    div.style.width = `37.5px`;
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = randomColor();
    //opactiy
      if (toggle == 1) {
        let currentOpacity = parseFloat(div.style.opacity) || 0.1;
        if (currentOpacity >= 1) {
          div.style.opacity = "0.1";
        } else {
          currentOpacity += 0.1;
          div.style.opacity = currentOpacity.toFixed(1);
        }
      } else {
        div.style.opacity = 1;
      }
    });
    container.appendChild(div);
  }
}

defaultGrid();

generate.addEventListener("click", () => {
  const gridSize = document.getElementById("gridSize").value;
  const container = document.getElementById("container");
  container.innerHTML = "";

  const cell = gridSize * gridSize;
  const itemSize = 600 / gridSize;

  for (let i = 1; i <= cell; i++) {
    const items = document.createElement("div");
    items.classList.add("item");
    items.style.height = `${itemSize}px`;
    items.style.width = `${itemSize}px`;
    items.addEventListener("mouseover", () => {
      items.style.backgroundColor = randomColor();
      
    //opactiy
      if(toggle==1){
       let currentOpacity = parseFloat(items.style.opacity) || 0.1; 
         if (currentOpacity>=1) {
         tems.style.opacity = "0.1";
        } else {
          currentOpacity += 0.1;
          items.style.opacity = currentOpacity.toFixed(1); 
       }
      }
      else{
       items.style.opacity=1;
      }     
    });
    container.appendChild(items);
  }
});

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

resetButton.addEventListener("click", () => {
  const allItems = document.querySelectorAll(".item");
  allItems.forEach((item) => {
    item.style.backgroundColor = "rgb(255, 255, 255)";
    item.style.opacity=0.1;
  });
});


opacityToggle.addEventListener("click", () => {
  if (toggle == 0) {
    toggle = 1; 
  } else {
    toggle = 0;
  }
});
