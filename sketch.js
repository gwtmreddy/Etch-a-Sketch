const generate = document.getElementById("generate");
const resetButton = document.getElementById("reset");


function defaultGrid(){
    let container = document.getElementById("container");
    for(let i=0;i<256;i++){
        const div =document.createElement("div");
        div.classList.add("item");
        div.style.height=`37.5px`;
        div.style.width=`37.5px`;
        div.addEventListener("mouseover", () => {
         div.style.backgroundColor = randomColor();
        });
        container.appendChild(div);
    };
};

defaultGrid();

generate.addEventListener("click", () => {
  const gridSize = document.getElementById("gridSize").value;
  const container = document.getElementById("container");
  container.innerHTML = "";

  const cell = gridSize * gridSize;
  const itemSize = 600/gridSize;
  

  for (let i = 1; i <= cell; i++) {
    const items = document.createElement("div");
    items.classList.add("item");
    items.style.height = `${itemSize}px`;
    items.style.width = `${itemSize}px`;
    items.addEventListener("mouseover",()=>{
        items.style.backgroundColor = randomColor();
    });
    container.appendChild(items);
  }; 
});


function randomColor() {
  const letters = "0123456789ABCDEF"
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

resetButton.addEventListener("click",()=>{
    const allItems =document.querySelectorAll(".item");
    allItems.forEach(item =>{
        item.style.backgroundColor ="rgb(255, 255, 255)";
    })
})
