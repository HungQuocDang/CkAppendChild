
  
 
 var i=0;
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

 let pressButton=document.getElementById("heartbutton");
 pressButton.addEventListener("click",heartTouch);
      function heartTouch() {
      document.getElementById("demo").innerHTML="like it";
                            }

          
                       