async function add() {
  const input = document.getElementById("inp");

  let con = document.getElementById("con");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    const text = input.value.trim();
    let li = document.createElement("li");
    

    if (text == "") {
      alert("enter task");
      return;
    }
    li.innerHTML = text;
    con.append(li);
    li.addEventListener("click",()=>{
      li.remove();
    })
  });
}
add()


