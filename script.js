// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

const cursor = document.getElementById("cursor");
const cursorBlur = document.getElementById("cursor-blur");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    cursorBlur.style.left = `${e.clientX - 200}px`; // Center blur effect
    cursorBlur.style.top = `${e.clientY - 200}px`;
});

const crsr = document.getElementById("cursor"); 
const h4all = document.querySelectorAll("#nav h4");

// Add smooth transitions in CSS first
crsr.style.transition = "all 0.2s ease-out";

h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.transform = "scale(3)"; // Proper way to scale
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });

  elem.addEventListener("mouseleave", function () {
    crsr.style.transform = "scale(1)";
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

  
  gsap.to("#nav",{
      backgroundColor: "#fff",
      color:"#000",
      duration: 0.5,
      height: "110px",
      scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
      //   markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
      },
    });

    gsap.to("#nav a", {
      color: "#000", // Change link text color
      duration: 0.5,
      scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
      }
    });
    

    gsap.to("#page2", {
        backgroundColor: "#1a465d",
        scrollTrigger: {
          trigger: "#main",
          scroller: "body",
          // markers: true,
          start: "top -25%",
          end: "top -70%",
          scrub: 2,
        },
      });

      document.addEventListener("DOMContentLoaded", function () {
        function revealText() {
            let reveals = document.querySelectorAll(".reveal");
    
            reveals.forEach((section) => {
                let windowHeight = window.innerHeight;
                let sectionTop = section.getBoundingClientRect().top;
                let revealPoint = 150; // Adjust trigger point
    
                if (sectionTop < windowHeight - revealPoint) {
                    section.classList.add("active");
                } else {
                    section.classList.remove("active"); // Remove when out of view
                }
            });
        }
    
        window.addEventListener("scroll", revealText);
        revealText(); // Run once to check on page load
    });
    
    