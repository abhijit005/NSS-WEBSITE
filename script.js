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

      document.addEventListener('DOMContentLoaded', function() {
        // Function to split text into spans
        function splitTextIntoSpans(element) {
          const text = element.innerText;
          const words = text.split(' ');
          element.innerHTML = '';
          
          words.forEach((word, index) => {
            // Create span for each word
            const span = document.createElement('span');
            span.className = 'reveal-word';
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            span.style.transitionDelay = `${index * 0.1}s`;
            span.innerText = word;
            element.appendChild(span);
            
            // Add a space after each word (except the last word)
            if (index < words.length - 1) {
              const space = document.createTextNode(' ');
              element.appendChild(space);
            }
          });
        }
        
        // Apply to all paragraphs in vision and mission sections
        const paragraphs = document.querySelectorAll('#vision p, #mission p');
        paragraphs.forEach(p => splitTextIntoSpans(p));
        
        // Create observer for scrolling effect
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const words = entry.target.querySelectorAll('.reveal-word');
              words.forEach((word, index) => {
                setTimeout(() => {
                  word.style.opacity = '1';
                  word.style.transform = 'translateY(0)';
                }, index * 100);
              });
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2 });
        
        // Observe sections
        document.querySelectorAll('#vision p, #mission p').forEach(section => {
          observer.observe(section);
        });
      });

      