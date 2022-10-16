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

     //QUEST 7---------------------
     const skillevaluation = {
      MySQL: 5,
      Oracle:3,
      MongoDB:2,
      C: 4,
      Cpp: 3,
      Java: 4,
      Jee: 5,
      php: 4,
      NodeJS: 4,
      ExpressJS: 5,
      Spring: 3,
      " ": 0
    };
    
    function addEvaluation(skillevaluation) {
      //star
      const star = document.createElement("span");
      star.innerHTML = "<span class='fa fa-star'> </span>";
      
    
      //span for all stars
      for (var key in skillevaluation) {
        var stars_span = document.createElement("span");
        const span = document.createElement("span");
        for (var i = 0; i < skillevaluation[key]; i++) {
          stars_span.innerHTML += star.innerHTML;
        }
        span.appendChild(stars_span);
        document.getElementById(key).appendChild(span);
      }
    }
    addEvaluation(skillevaluation);

    //QST 8-----------------------------------
    var ctx = document.getElementById("myChart").getContext("2d");
    console.log(Object.keys(skillevaluation));

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(skillevaluation),
        datasets: [{
          /*backgroundColor: barColors,*/
          data: Object.values(skillevaluation),
          fill: false,
          backgroundColor: "#0077B6",
          borderColor: "#0077B6",
          borderCapStyle: 'butt'
        }]

      },
      options: {
        legend: {display: false},
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 5
          }
      }

    }
  
  });

  };



   
