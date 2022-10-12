window.onload = () => { 

  document.getElementById("details").style.display ="none";
  document.getElementById("details2").style.display ="none";
  
    
    // selecting the elements for which we want to add a tooltip
    const target = document.getElementById("tooltip");
    const tooltip = document.getElementById("tooltip-text");

    tooltip.style.display= "none";

    // change display to 'block' on mouseover
    target.addEventListener('mouseover', () => {
      tooltip.style.display = 'block';
    }, false);

    // change display to 'none' on mouseleave
    target.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    }, false);  


  

  const btn = document.getElementById("btn");

  var x = document.getElementById("details");

  
    btn.onclick = function showDetails() {
      if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
      } else {
        x.style.display = "none";
      }
  };

  const btn2 = document.getElementById("btn2");
  var h2 = btn2.clientHeight;
  
  

  var y = document.getElementById("details2");

    
    btn2.onclick = function showDetails2() {
      if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
      } else {
        y.style.display = "none";
      }
    } ;

  };