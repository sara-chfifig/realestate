/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu")
const navMenu2 = document.getElementById("nav-menu-2")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")


hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    navMenu2.classList.toggle("top-[0]")
    hamburger.classList.toggle("ri-close-large-line")
})

navLink.forEach(link => {
    link.addEventListener("click" , () => {
      navMenu.classList.toggle("left-[0]")
      navMenu2.classList.toggle("top-[0]")
      hamburger.classList.toggle("ri-close-large-line")
   })
})

 
/*~~~~~~~~~~~~~~~ Caurosel CAUROSEL ~~~~~~~~~~~~~~~*/

let onSlide = false;

window.addEventListener("load", () => {
    autoSlide();

    const buttonPrev = document.querySelector(".carousel__button__prev");
    const buttonNext = document.querySelector(".carousel__button__next");

    if (buttonNext) {
        buttonNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));
    }

    if (buttonPrev) {
        buttonPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
    }
});

function autoSlide() {
    setInterval(() => {
        slide(getItemActiveIndex() + 1);
    },5000); 
}

function slide(toIndex) {
    if (onSlide) return;

    onSlide = true;

    const itemsArray = Array.from(document.querySelectorAll(".carousel__item"));
    const itemActive = document.querySelector(".carousel__item__active");

    if (toIndex >= itemsArray.length) {
        toIndex = 0; 
    } else if (toIndex < 0) {
        toIndex = itemsArray.length - 1; 
    }

    const newItemActive = itemsArray[toIndex];

    if (toIndex > getItemActiveIndex()) {
        // Slide to the next item
        newItemActive.classList.add("carousel__item__pos_next");

        setTimeout(() => {
            newItemActive.classList.add("carousel__item__next");
            itemActive.classList.add("carousel__item__next");
        }, 20);
    } else {
        // Slide to the previous item
        newItemActive.classList.add("carousel__item__pos_prev");

        setTimeout(() => {
            newItemActive.classList.add("carousel__item__prev");
            itemActive.classList.add("carousel__item__prev");
        }, 20);
    }

    // Reset classes after the transition
    newItemActive.addEventListener(
        "transitionend",
        () => {
            itemActive.className = "carousel__item"; // Reset old active item
            newItemActive.className = "carousel__item carousel__item__active"; // Set new active item
            onSlide = false; // Allow the next slide
        },
        { once: true }
    );
}

function getItemActiveIndex() {
    const itemsArray = Array.from(document.querySelectorAll(".carousel__item"));
    const itemActive = document.querySelector(".carousel__item__active");
    return itemsArray.indexOf(itemActive); // Find the index of the active item
}


/*~~~~~~~~~~~~~~~ Effect MOUSEMOVE EFFECT ~~~~~~~~~~~~~~~*/
const sections = [
    { id: "#about", imageClass: ".background-image-about" },
    { id: "#company", imageClass: ".background-image-company" },
    { id: "#contact", imageClass: ".background-image-contact" }
];

function handleMouseMove(e, image) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    const moveX = (x - 0.5) * 50;
    const moveY = (y - 0.5) * 50;

    image.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

sections.forEach(section => {
    const sectionElement = document.querySelector(section.id);
    const imageElement = document.querySelector(section.imageClass);

    if (sectionElement && imageElement) {
        sectionElement.addEventListener('mousemove', (e) => {
            handleMouseMove(e, imageElement);
        });
    }
});


/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".process__tab")
    const tabContent = document.getElementById("tab-content")
    const tabImage = document.getElementById("tab-image")

    const contentData = {
        1: {
            title: "Acquaintance with the customer",
            paragraphs: [
                "The first thing we do is meeting with our clients and talk through their goals on a future project. During this meeting, feel free to communicate your ideas and ask lots of questions.",
                "This stage is highly decisive as you can evaluate the work of your potential architect by browsing their portfolio. As a client, you may also assess whether the architect listens to your needs and confirms that he or she understands them."
            ],
            image: "assets/images/process-1.jpg"
        },
        2: {
            title: "Project Concept Development",
            paragraphs: [
                "In this stage, we develop a project concept based on the client’s preferences and ideas. We present the concept in a visual format to ensure that the client’s vision is accurately represented.",
                "This phase involves a lot of back-and-forth communication, allowing us to refine the project concept until it meets the client’s expectations."
            ],
            image: "assets/images/process-2.jpg"
        },
        3: {
            title: "Working on Interior and Exterior",
            paragraphs: [
                "Once the concept is approved, we start working on the interior and exterior designs. We make sure that all design elements are in harmony, creating a cohesive and aesthetically pleasing result.",
                "We present detailed plans and 3D visualizations to help the client understand how the final project will look and feel."
            ],
            image: "assets/images/process-3.jpg"
        },
        4: {
            title: "Finishing Touches for your future home",
            paragraphs: [
                "The final stage involves adding the finishing touches to the project. We ensure that every detail is perfect and meets the client’s standards.",
                "This is where we add the final flourishes that turn a house into a home, making sure it is ready for the client to move in."
            ],
            image: "assets/images/process-4.jpg"
        },
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {

            tabs.forEach(t => t.classList.remove("process__tab-active"))

            tab.classList.add("process__tab-active")

            const tabIndex = tab.getAttribute('data-tab')

            
            const data = contentData[tabIndex]
            if (data) {
                tabContent.innerHTML = `
                    <h2 class="text-firstcolor">${data.title}</h2>
                    <p class="text-graycolor">${data.paragraphs[0]}</p>
                    <p class="text-graycolor">${data.paragraphs[1]}</p>
                `
                tabImage.src = data.image
                tabImage.alt = data.title
            }
        })
    })
})
/* scroll */ 
const scrollUpBtn = document.getElementById("scroll-up");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY >= 250) {
        scrollUpBtn.classList.remove("opacity-0");
        scrollUpBtn.classList.add("opacity-100");
    } else {
        scrollUpBtn.classList.remove("opacity-100");
        scrollUpBtn.classList.add("opacity-0");
    }
});

// Scroll smoothly to the top when clicked
scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});






/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId); 

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop, 
                behavior: 'smooth' 
            });
        }
    });
});


/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/


const activeLink = () => {
    console.log("Scroll event triggered"); 

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "home"; 

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        console.log("sectionTop:", sectionTop, "sectionHeight:", sectionHeight); // Debugging the section positions

        if (scrollY >= sectionTop - 60 && scrollY < sectionTop + sectionHeight - 60) {
            current = sectionId;  
        }
    });

    navLinks.forEach(item => {
        item.classList.remove("active"); 

        console.log(item.href, current); 

        if (item.href.includes(current)) {
            item.classList.add("active"); 
        }
    });
}

window.addEventListener("scroll", activeLink);  



// Attach event listener to the scroll event
window.addEventListener("scroll", activeLink);

      

    window.addEventListener("scroll", activateNavLink);

    // Smooth scrolling for menu links
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/

const sr = ScrollReveal({
    origin: "left",
    distance: "60px",
    duration: 1500,
    delay: 300,
    reset: true,
    viewFactor: 0.2 
});

sr.reveal(".about__item");



