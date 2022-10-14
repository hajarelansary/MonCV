window.onload = () => { 

  document.getElementById("details").style.display ="none";
  document.getElementById("details2").style.display ="none";
  
    function fadeIn(el, time) {
      el.style.opacity = 0;
    
      var last = +new Date();
      var tick = function () {
        el.style.opacity = +el.style.opacity + (new Date() - last) / time;
        last = +new Date();
    
        if (+el.style.opacity < 1) {
          (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
            setTimeout(tick, 16);
        }
      };
    
      tick();
    };

  const btn = document.getElementById("btn");

  var x = document.getElementById("details");

  
    btn.onclick = function showDetails() {
      if (x.style.display === "none") {
        x.style.display = "block";
        fadeIn(x,1500)
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
        fadeIn(y,1500)
        x.style.display = "none";
      } else {
        y.style.display = "none";
      }
    } ;

    var tooltip2 = document.querySelectorAll(".coupontooltip");
    document.addEventListener("mousemove", fn, false);
    function fn(e) {
      for (var i = tooltip2.length; i--; ) {
        tooltip2[i].style.left = e.pageX + "px";
        tooltip2[i].style.top = e.pageY + "px";
      }
    }
  


    
  };