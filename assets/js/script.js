
  
  const para = document.createElement("h1");
  para.innerHTML = "This is a paragraph.";

  var accent=document.createElement("h2");
  accent.innerHTML = "will added next rank in a child";
  var typi="hello";
 
 document.getElementById("myDIV").appendChild(para);
 document.getElementById("myDIV").appendChild(accent);
 
 for (let i=0; i<3;i++) {
  const para = document.createElement("h1");
  para.innerHTML = "This is a paragraph.";

  var accent=document.createElement("h2");
  accent.innerHTML = "will add next rank in a child";

  var typi=document.createElement("h1");
  typi.innerHTML=("Song "+i);
 

 document.getElementById("myDIV").appendChild(para);
 document.getElementById("myDIV").appendChild(accent);
 document.getElementById("myDIV").appendChild(typi);             
 }