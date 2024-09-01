
function homepageAnimation() {
          gsap.set(".slidesM", {scale:5})
          
          var tl = gsap.timeline({      
          scrollTrigger: {
                    trigger:".home",
                    start:"top top",
                    end:"bottom bottom",
                    scrub: 1
          }
          })

          tl.to(".video_div",{          
          '--clip': "0%",
          ease: Power2
          }, 'a' )

          tl.to(".slidesM",{  
          scale: 1,
          ease: Power2
          }, 'a')

          tl.to(".lft",{      
          xPercent: -10,
          stagger: 0.03,
          ease: Power4
          }, 'b')

          tl.to(".rgt",{      
          xPercent: 10,
          ease: Power4
          }, 'b')
}

function realpageAnimation() {
          gsap.to(".slide", {
                    scrollTrigger: {
                              trigger: ".real",
                              start: "top top",
                              end: "bottom bottom",
                              scrub: 1
                    },
          
                    xPercent: -200,
                    ease: Power4,

          })
}

function teamAnimation() {
          document.querySelectorAll(".list-items")
          .forEach(function(element) {
                    element.addEventListener("mousemove", function(details) {
                              gsap.to(this.querySelector(".picture"), {
                                        opacity: 1,
                                        x: gsap.utils.mapRange(0, window.innerWidth, -100, 100, details.clientX),
                                        ease: Power4,
                                        duration: 0.5
                              })
                    } )
          
                    element.addEventListener("mouseleave", function(details) {
                              gsap.to(this.querySelector(".picture"), {
                                        opacity: 0,
                              })
                    })
                              
          });
          
}


function teamAnimationHover() {
          document.querySelectorAll(".list-items")
          .forEach(function(visible){
                              visible.addEventListener("mousemove", function() {
                                        gsap.to(this.querySelector(".bluelayer"), {
                                                  opacity: 1,
                                                  y: gsap.utils.mapRange(window.innerHeight, 0, -30, 0),
                                                  ease: Power4,
                                                  duration: 0.5
                                        })
                              })
                              
                              visible.addEventListener("mouseleave", function() {
                                        gsap.to(this.querySelector(".bluelayer"), {
                                                  opacity: 0,
                                                  y: gsap.utils.mapRange(0, window.innerHeight, -50, 0),
                                                  ease: Power4,
                                                  duration: 0.5
          
          
                                        })
                              })
          });
}

function paraAnimation() {
          var clutter = "";
document.querySelector(".text-para")
.textContent.split("")
.forEach(function(e) {
          if(e === "") clutter += `<span>&nbsp;</span>`
          clutter += `<span>${e}</span>`
})
document.querySelector(".text-para").innerHTML = clutter;

gsap.set(".text-para span",{opacity: .1})

gsap.to(".text-para span", {
          scrollTrigger: {
                    trigger: ".para",
                    start: "top 60%",
                    end: "bottom 90%",
                    scrub: 2,
                    
          },
          opacity: 1,
          stagger: .03,
          ease: Power4
})
}

function locoMotive() {
          (function () {
                    const locomotiveScroll = new LocomotiveScroll();
            })();
}

function capsuleAnimation() {
          gsap.to(".capsule:nth-child(2)", {
                    scrollTrigger: {
                              trigger: ".capsules",
                              start: "top 70%",
                              end: "bottom bottom",
                              scrub: 1,
                    },
                    y: 0,
                    ease: Power4
          })
}

function pageColorAnimation() {
          document.querySelectorAll(".section").forEach(function(changeColor) {
                    ScrollTrigger.create({
                              trigger: changeColor, // parametre name
                              start: "top 50%",
                              end: "bottom 50%",
                              onEnter: function() {
                                        document.body.setAttribute("theme", changeColor.dataset.color);
                              },
                              onEnterBack: function(){
                                        document.body.setAttribute("theme", changeColor.dataset.color);
                              }
                    })
          })
}
  

function cardAnimation() {
        const cardGrow = document.querySelectorAll('.card');

        // Loop through each card
        cardGrow.forEach(card => {
          // Get the position of the top of the card relative to the viewport
          const topOffset = card.getBoundingClientRect().top;
        
          // Calculate the scroll position at which the top of the card reaches 50% of the screen height
          const triggerPosition = window.innerHeight / 2 - topOffset;
        
          // GSAP animation
          gsap.to(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 70%", // Start animation when the top of the card reaches the trigger position
              end: "bottom 60%", // Animation duration
              scrub: 0.2, // Smoothly follow the scroll
            },
            width: '65%'
             // Change the width to 200px when the card reaches the trigger position
          });
        });
        
}

function cardColorChange() {
        const cardColor = document.querySelectorAll(".card");
        cardColor.forEach(card => {
        
                var timel = gsap.timeline({      
                        scrollTrigger: {
                                trigger: card,
                                start: "top 80%",
                                end: "bottom 80%", // Animation duration
                                scrub: .2, // Smoothly follow the scroll
                }
                }, 'c')

                timel.to(card, {
                        backgroundColor: "#0000000",
                        ease: Power4,
                        stagger: 0.2
                }, 'c')
                timel.to(".card-heading",{ 
                        color: "#aedee0", 
                        ease: Power4,
                        stagger: 0.2

                }, 'c')

                timel.to(".text-cont",{ 
                        color: "#aedee0", 
                        ease: Power4,

                }, 'c')

                timel.to(".icon",{ 
                        color: "#aedee0", 
                        ease: Power4,
                        stagger: 0.2

                }, 'c')

        },)

}


/////// EVOKE THE FUNCTION /////////////////////////
homepageAnimation();

realpageAnimation();

teamAnimation();

teamAnimationHover();

paraAnimation();

locoMotive();

capsuleAnimation();

pageColorAnimation();

cardAnimation();

cardColorChange();






///////////////////////////////////////////////////// WRONG STUFFS //////////////////////////////////////////////////////

/*document.querySelectorAll(".cards")
          .forEach(function(){
                        gsap.to(this.querySelector(".card"), {
                                ScrollTrigger: {
                                        trigger: ".cards",
                                        start: "50% 50%",
                                        end:  "bottom 50%",
                                        scrub: 1,
                                        markers: true
                                },
                                rotate: 2,
                                //y: gsap.utils.mapRange(window.innerHeight, 0, -30, 0),
                                ease: Power4,
                                //duration: 0.5
                        })
        })
                              
*/


/*function cardAnimation() {
        document.querySelector(".card").forEach(function(grow) {
               grow.addEventListener("mousemove", function() {
                        gsap.to(".card", {
                                width: "65%",
                                //scale: 1.03,
                                ease: Power4,
                        });
               });
               
                        
        });
}


cardAnimation();
*/


/*const boxes = document.querySelectorAll('.card');

boxes.forEach((card, index) => {
        const triggerPoint = window.innerHeight / 2; // 50% of the screen height
        const boxTop = card.getBoundingClientRect().top;
        
        if (boxTop < triggerPoint) {
          gsap.to(".card", { width: '80%', duration: 1 }); // Increase width to 200px
        } else {
          gsap.to(".card", { width: '70%', duration: 1 }); // Set width back to 100px
        }
      });
    
      // Event listener to handle scroll
     /* window.addEventListener('scroll', () => {
        boxes.forEach((card, index) => {
          const triggerPoint = window.innerHeight / 2; // 50% of the screen height
          const boxTop = box.getBoundingClientRect().top;
          
          if (boxTop < triggerPoint) {
            gsap.to(box===, { width: '200px', duration: 1 }); // Increase width to 200px
          } else {
            gsap.to(box, { width: '100px', duration: 1 }); // Set width back to 100px
          }
        });
      });
*/











