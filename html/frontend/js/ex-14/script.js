
//         // using only settime out function 

// document.body.style.backgroundColor = "green"
// setTimeout(()=>{
//     document.getElementById("search").innerHTML = "Initializing Hacking..."
// },3000)
// setTimeout(()=>{
//     document.getElementById("getting").innerHTML = "Reading your Files..."
// },5500)
// setTimeout(()=>{
//     document.getElementById("get").innerHTML = "Password files Detected..."
// },9000)

// setTimeout(()=>{
//     document.getElementById("trans").innerHTML = "Sending all passwords and personal files to server..."
// },18000)

// setTimeout(()=>{
//     document.getElementById("cleanup").innerHTML = "Cleaning up..."
// },25000)


// setTimeout(()=>{
//     document.getElementById("hacked").innerHTML = "you are hecked 😎"
// },28000)







// Initializing Hacking...
//     Reading your Files...
//     Password files Detected...
//     Sending all passwords and personal files to server...
//     Cleaning up...



                // better way


const additam =async (itam)=>{
    await randomd();
    let div = document.createElement("div")
    div.innerHTML = itam
    document.getElementById("d").append(div)
}

const randomd = ()=>{
    return new Promise((resolve , reject)=>{
        time = 1+6*Math.random()
        setTimeout(()=>{
            resolve()
        },time*1000)
    })

}


let text = ["Initializing Hacking...","Reading your Files...","Password files Detected...","Sending all passwords and personal files to server...","Cleaning up...","you are hecked 😎"]




for (const itam of text) {
    await additam(itam);
}


