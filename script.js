// Optional: Reveal animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.vp-section-title, .vp-section-text, .img-fluid');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        elements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // trigger on load
});

// Optional CSS animation for .show class (add this in CSS file)

// const toggler = document.querySelector('.custom-toggler');
// const closeBtn = document.querySelector('.navbar-close');
// const navbarCollapse = document.querySelector('.navbar-collapse');

// toggler.addEventListener('click', () => {
//     navbarCollapse.classList.add('show');
//     toggler.style.display = 'none';
//     closeBtn.style.display = 'block';
// });

// closeBtn.addEventListener('click', () => {
//     navbarCollapse.classList.remove('show');
//     toggler.style.display = 'block';
//     closeBtn.style.display = 'none';
// });

// // For dropdown toggle on small screens
// const dropdownLinks = document.querySelectorAll('.nav-item.dropdown > a');
// dropdownLinks.forEach(link => {
//     link.addEventListener('click', function (e) {
//         if (window.innerWidth < 992) {
//             e.preventDefault();
//             const dropdownMenu = this.nextElementSibling;
//             dropdownMenu.classList.toggle('show');
//         }
//     });
// });



// // Ensure dropdowns work on click for mobile
// document.querySelectorAll('.dropdown-toggle').forEach(function (dropdown) {
//     dropdown.addEventListener('click', function (e) {
//         if (window.innerWidth < 992) {
//             e.preventDefault();
//             let nextEl = this.nextElementSibling;
//             if (nextEl && nextEl.classList.contains('dropdown-menu')) {
//                 nextEl.classList.toggle('show');
//             }
//         }
//     });
// });

// // Close dropdowns when clicking outside on mobile
// window.addEventListener('click', function (e) {
//     if (window.innerWidth < 992) {
//         document.querySelectorAll('.dropdown-menu.show').forEach(function (menu) {
//             if (!menu.contains(e.target) && !menu.previousElementSibling.contains(e.target)) {
//                 menu.classList.remove('show');
//             }
//         });
//     }
// });
// Mobile menu toggle functionality
// document.querySelector('.custom-toggler').addEventListener('click', function() {
//     document.querySelector('.navbar-collapse').classList.add('show');
//     document.querySelector('.custom-toggler').style.display = 'none';
//     document.querySelector('.navbar-close').style.display = 'block';
// });

// document.querySelector('.navbar-close').addEventListener('click', function() {
//     document.querySelector('.navbar-collapse').classList.remove('show');
//     document.querySelector('.custom-toggler').style.display = 'block';
//     document.querySelector('.navbar-close').style.display = 'none';
// });

// // For mobile, toggle submenus on click
// if (window.innerWidth <= 991) {
//     document.querySelectorAll('.dropdown-item').forEach(item => {
//         if (item.nextElementSibling && item.nextElementSibling.classList.contains('submenu')) {
//             item.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 const submenu = this.nextElementSibling;
//                 submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
//             });
//         }
//     });
// }






document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.custom-toggler');
    const closer = document.querySelector('.navbar-close');
    const collapse = document.querySelector('.navbar-collapse');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Toggle main navbar
    function toggleNavbar() {
        collapse.classList.toggle('show');

        // Toggle buttons visibility
        toggler.style.display = collapse.classList.contains('show') ? 'none' : 'block';
        closer.style.display = collapse.classList.contains('show') ? 'block' : 'none';

        // Add/remove overlay when menu is open/closed
        if (collapse.classList.contains('show')) {
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            overlay.addEventListener('click', closeNavbar);
            document.body.appendChild(overlay);
        } else {
            const overlay = document.querySelector('.overlay');
            if (overlay) {
                document.body.removeChild(overlay);
            }
        }
    }

    function closeNavbar() {
        collapse.classList.remove('show');
        toggler.style.display = 'block';
        closer.style.display = 'none';
        const overlay = document.querySelector('.overlay');
        if (overlay) {
            document.body.removeChild(overlay);
        }

        // Close all dropdowns when closing navbar
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
        document.querySelectorAll('.dropdown-icon').forEach(icon => {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        });
    }

    toggler.addEventListener('click', toggleNavbar);
    closer.addEventListener('click', closeNavbar);

    // Toggle dropdowns on mobile
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 991) {
                e.preventDefault();
                const dropdown = this.parentElement.querySelector('.dropdown-menu');
                const icon = this.querySelector('.dropdown-icon');

                dropdown.classList.toggle('show');

                // Rotate chevron icon
                if (icon) {
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                }
            }
        });
    });




    // search icon all jss is here 
    function removeHighlights() {
        document.querySelectorAll(".highlight").forEach(el => {
            const parent = el.parentNode;
            parent.replaceChild(document.createTextNode(el.textContent), el);
            parent.normalize();
        });
    }

    function highlightTextInHeadings(keyword) {
        removeHighlights(); // Clear old highlights
        const searchResults = document.getElementById("searchResults");
        searchResults.innerHTML = "";

        if (!keyword || keyword.length < 2) return;

        const regex = new RegExp(`(${keyword})`, "gi");
        const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
        let found = 0;

        headings.forEach((el, index) => {
            const text = el.innerText;

            if (text.toLowerCase().includes(keyword.toLowerCase())) {
                found++;
                const id = el.id || `heading-${index}`;
                el.id = id;

                // Highlight keyword
                const originalText = el.innerText;
                const highlightedText = originalText.replace(regex, '<span class="highlight">$1</span>');
                el.innerHTML = highlightedText;

                // Show search result link
                const resultItem = document.createElement("li");
                resultItem.className = "list-group-item list-group-item-action";
                resultItem.textContent = originalText;
                resultItem.addEventListener("click", () => {
                    document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "center" });
                    document.getElementById("searchBarContainer").style.display = "none";
                });

                searchResults.appendChild(resultItem);
            }
        });

        if (found === 0) {
            const li = document.createElement("li");
            li.className = "list-group-item text-danger";
            li.textContent = "No matches found.";
            searchResults.appendChild(li);
        }
    }

    // Toggle search bar
    const toggleBtn = document.getElementById("toggleSearch");
    const searchBar = document.getElementById("searchBarContainer");
    const searchInput = document.getElementById("searchInput");

    toggleBtn.addEventListener("click", () => {
        const isVisible = searchBar.style.display === "block";
        searchBar.style.display = isVisible ? "none" : "block";

        if (!isVisible) {
            searchInput.focus();
        }
    });

    // Trigger search
    searchInput.addEventListener("input", () => {
        const keyword = searchInput.value.trim();
        highlightTextInHeadings(keyword);
    });





    // Close dropdowns when clicking outside (desktop)
    document.addEventListener('click', function (e) {
        if (window.innerWidth > 991) {
            dropdownToggles.forEach(toggle => {
                const dropdown = toggle.parentElement.querySelector('.dropdown-menu');
                if (!toggle.contains(e.target) && (!dropdown || !dropdown.contains(e.target))) {
                    if (dropdown) dropdown.classList.remove('show');
                    const icon = toggle.querySelector('.dropdown-icon');
                    if (icon) {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    }
                }
            });
        }
    });

    // Close navbar when clicking a link (mobile)
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 991) {
                closeNavbar();
            }
        });
    });
});



// Hero Section landing page scrolling Js
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}





// Therapy Services Data
const therapies = [
    {
        id: 1,
        title: "Depression",
        image: "assets/depresionIMG.jpg",
        description: "We offer support and evidence-based therapy to help you overcome feelings of sadness, hopelessness, and loss of interest in life.",
        features: [
            "Identify negative thought patterns",
            "Develop coping strategies",
            "Problem-solving techniques",
            "Behavioral activation"
        ]
    },
    {
        id: 2,
        title: "Anxiety",
        image: "assets/anxietyIMG.jpg",
        description: "Our treatment helps you manage excessive worry, fear, and panic, allowing you to regain control and peace of mind.",
        features: [
            "Improve family communication",
            "Resolve conflicts",
            "Strengthen relationships",
            "Develop healthy boundaries"
        ]
    },
    {
        id: 3,
        title: "Stress Management",
        image: "assets/stressIMG.jpg",
        description: "Learn healthy coping strategies to deal with personal, academic, or professional stress and restore emotional balance.",
        features: [
            "EMDR therapy available",
            "Trauma processing techniques",
            "Safety and stabilization",
            "Post-traumatic growth"
        ]
    },
    {
        id: 4,
        title: "Personality Disorders",
        image: "assets/personalityIMG.jpg",
        description: "We provide structured therapy to help individuals manage long-standing patterns of thinking and behavior that affect relationships and daily life.",
        features: [
            "Relaxation techniques",
            "Exposure therapy",
            "Cognitive restructuring",
            "Mindfulness practices"
        ]
    },
    {
        id: 5,
        title: "Child and Adolescent",
        image: "assets/childIMG.jpg",
        description: "Specialized care for young minds dealing with behavioral, emotional, or developmental challenges during critical growth stages.",
        features: [
            "Improve communication skills",
            "Conflict resolution strategies",
            "Rebuild trust",
            "Enhance intimacy"
        ]
    },
    {
        id: 6,
        title: "Schizophrenia",
        image: "assets/SchizophreniaIMg.jpg",
        description: "We assist individuals in understanding and managing symptoms like hallucinations, delusions, and disorganized thinking with compassion and care.",
        features: [
            "Meditation techniques",
            "Body awareness exercises",
            "Stress reduction",
            "Emotional regulation"
        ]
    },
     {
        id: 7,
        title: "Bipolar Disorders",
        image: "assets/Bipolar.jpg",
        description: "Support for managing mood swings—from depressive lows to manic highs—through therapy and structured routines.",
        features: [
            "Meditation techniques",
            "Body awareness exercises",
            "Stress reduction",
            "Emotional regulation"
        ]
    },
     {
        id: 8,
        title: "OCD (Obsessive-Compulsive Disorder)",
        image: "assets/OCDIMG.jpg",
        description: "We help reduce intrusive thoughts and compulsive behaviors through targeted therapies like CBT and exposure techniques.",
        features: [
            "Meditation techniques",
            "Body awareness exercises",
            "Stress reduction",
            "Emotional regulation"
        ]
    }
];

// Initialize Carousel
document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');

    // Function to determine chunk size based on screen width
    function getChunkSize() {
        return window.innerWidth < 768 ? 1 : 3; // 1 for mobile, 3 for desktop
    }

    // Clear existing carousel items
    carouselInner.innerHTML = '';

    // Group therapies into chunks based on screen size
    const chunkSize = getChunkSize();
    for (let i = 0; i < therapies.length; i += chunkSize) {
        const therapiesChunk = therapies.slice(i, i + chunkSize);

        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${i === 0 ? 'active' : ''}`;

        const row = document.createElement('div');
        row.className = 'row g-4';

        therapiesChunk.forEach(therapy => {
            const col = document.createElement('div');
            // Use col-12 for mobile (full width), col-md-4 for desktop (3 columns)
            col.className = 'col-12 col-md-4';

            col.innerHTML = `
                <div class="therapy-card card" data-therapy-id="${therapy.id}">
                    <img src="${therapy.image}" class="card-img-top" alt="${therapy.title}">
                    <div class="card-body">
                        <h5 class="card-title">${therapy.title}</h5>
                        <p class="card-text">${therapy.description.substring(0, 100)}...</p>
                        <button class="btn btn-sm btn-outline-primary">Learn More</button>
                    </div>
                </div>
            `;

            row.appendChild(col);
        });

        carouselItem.appendChild(row);
        carouselInner.appendChild(carouselItem);
    }

    // Update carousel when window is resized
    window.addEventListener('resize', function () {
        const currentChunkSize = getChunkSize();
        const items = document.querySelectorAll('.carousel-item');
        const itemsPerSlide = items.length > 0 ?
            items[0].querySelectorAll('.col-md-4, .col-12').length : 0;

        // Only rebuild if chunk size needs to change
        if (currentChunkSize !== itemsPerSlide) {
            // Rebuild carousel with new chunk size
            const activeIndex = document.querySelector('.carousel-item.active')?.dataset.index || 0;
            const chunkSize = getChunkSize();
            carouselInner.innerHTML = '';

            for (let i = 0; i < therapies.length; i += chunkSize) {
                const therapiesChunk = therapies.slice(i, i + chunkSize);

                const carouselItem = document.createElement('div');
                carouselItem.className = `carousel-item ${i === 0 ? 'active' : ''}`;
                carouselItem.dataset.index = i;

                const row = document.createElement('div');
                row.className = 'row g-4';

                therapiesChunk.forEach(therapy => {
                    const col = document.createElement('div');
                    col.className = 'col-12 col-md-4';

                    col.innerHTML = `
                        <div class="therapy-card card" data-therapy-id="${therapy.id}">
                            <img src="${therapy.image}" class="card-img-top" alt="${therapy.title}">
                            <div class="card-body">
                                <h5 class="card-title">${therapy.title}</h5>
                                <p class="card-text">${therapy.description.substring(0, 100)}...</p>
                                <button class="btn btn-sm btn-outline-primary">Learn More</button>
                            </div>
                        </div>
                    `;

                    row.appendChild(col);
                });

                carouselItem.appendChild(row);
                carouselInner.appendChild(carouselItem);
            }

            // Reactivate the correct slide if possible
            const newActiveItem = document.querySelector(`.carousel-item[data-index="${activeIndex}"]`);
            if (newActiveItem) {
                document.querySelectorAll('.carousel-item').forEach(item => item.classList.remove('active'));
                newActiveItem.classList.add('active');
            }
        }
    });
});


// Add click event to all therapy cards
document.querySelectorAll('.therapy-card').forEach(card => {
    card.addEventListener('click', function () {
        const therapyId = parseInt(this.getAttribute('data-therapy-id'));
        const therapy = therapies.find(t => t.id === therapyId);

        if (therapy) {
            document.getElementById('modalTherapyTitle').textContent = therapy.title;
            document.getElementById('modalTherapyImage').src = therapy.image;
            document.getElementById('modalTherapyImage').alt = therapy.title;
            document.getElementById('modalTherapyDescription').textContent = therapy.description;

            const featuresList = document.getElementById('modalTherapyFeatures');
            featuresList.innerHTML = '';

            therapy.features.forEach(feature => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check-circle"></i> ${feature}`;
                featuresList.appendChild(li);
            });

            const modal = new bootstrap.Modal(document.getElementById('therapyModal'));
            modal.show();
        }
    });
});


// Booking Appointment js 


// Initialize date picker
// Initialize date pickers
flatpickr(".datepicker", {
    minDate: "today",
    maxDate: new Date().fp_incr(30), // 30 days from now
    dateFormat: "m/d/Y",
    disable: [
        function (date) {
            // Disable weekends
            return (date.getDay() === 0 || date.getDay() === 6);
        }
    ]
});

// Time slot selection
document.querySelectorAll('.time-slot').forEach(slot => {
    slot.addEventListener('click', function () {
        // Remove selected class from all slots in this container
        this.closest('.row').querySelectorAll('.time-slot').forEach(s => {
            s.classList.remove('selected');
        });
        // Add selected class to clicked slot
        this.classList.add('selected');
    });
});

// Booking buttons
document.getElementById('bookInpersonBtn').addEventListener('click', function () {
    showConfirmation('inperson');
});

document.getElementById('bookOnlineBtn').addEventListener('click', function () {
    showConfirmation('online');
});

function showConfirmation(type) {
    const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    const dateInput = type === 'inperson' ?
        document.getElementById('inpersonDate') : document.getElementById('onlineDate');
    const therapistSelect = type === 'inperson' ?
        document.getElementById('inpersonTherapist') : document.getElementById('onlineTherapist');
    const timeSlot = type === 'inperson' ?
        document.querySelector('#inpersonTimeSlots .time-slot.selected') :
        document.querySelector('#onlineTimeSlots .time-slot.selected');

    // Validate inputs
    if (!dateInput.value) {
        alert('Please select a date');
        return;
    }

    if (!timeSlot) {
        alert('Please select a time slot');
        return;
    }

    // Set modal content based on booking type
    if (type === 'inperson') {
        document.getElementById('modalTitle').textContent = 'In-Person Visit Booked!';
        document.getElementById('modalMessage').textContent = 'Your in-person visit has been confirmed. We\'ve sent the details to your email.';
        document.getElementById('confirmedType').textContent = 'In-Person Visit';
        document.getElementById('locationLabel').style.display = 'inline';

        // Get selected location
        let location = 'Main Wellness Center';
        if (document.getElementById('downtownClinic').checked) {
            location = 'Downtown Clinic';
        }
        document.getElementById('confirmedLocation').textContent = location;
    } else {
        document.getElementById('modalTitle').textContent = 'Online Session Booked!';
        document.getElementById('modalMessage').textContent = 'Your online consultation has been confirmed. We\'ve sent the meeting link to your email.';
        document.getElementById('confirmedType').textContent = 'Online Consultation';
        document.getElementById('locationLabel').style.display = 'none';
        document.getElementById('confirmedLocation').textContent = '';
    }

    // Set common details
    document.getElementById('confirmedDate').textContent = formatDate(dateInput.value);
    document.getElementById('confirmedTime').textContent = timeSlot.textContent;
    document.getElementById('confirmedTherapist').textContent = therapistSelect.value === 'Any Available Therapist' ?
        'First Available Therapist' : therapistSelect.value;

    // Show modal
    modal.show();
}

function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-US', options);
}

// about section js 
AOS.init({ duration: 1000, once: true });



// Footer Js Funcanality //
// Back to top button functionality
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


// Call to action section js


// service page js 
//  const swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     loop: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1
//       },
//       768: {
//         slidesPerView: 2
//       },
//       1024: {
//         slidesPerView: 3
//       }
//     }
//   });


