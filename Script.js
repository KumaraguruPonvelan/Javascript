let calculateBtn=document.getElementById
("calculate-btn");
let result=document.getElementById("result")
let calculate = () => {
    let p = Number(document.getElementById("Principal Amount Rupees").value);
    let r= Number(document.getElementById("Rate").value);
    let t= Number(document.getElementById("Time Period").value);
    let duration = (document.getElementById("duration").value);
    console.log(p, r,t, duration);

    let simpleIntrest= duration =="year" ? (p*r*t)/1200 ;
    console.log(simpleIntrest);
    let Amount= p + simpleIntrest;
    result.innerHTML= '<div>Principal Amount:<span>Rupees
        {p.toFixed(2

    )}</span></div>
    <div></div>'
};
calculateBtn.addEventListener("click")
window.addEventListener("load", calculate);