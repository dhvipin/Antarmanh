

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
        title: "Cognitive Behavioral Therapy",
        image: "assets/content-moderatora.webp",
        description: "CBT helps you identify and change negative thought patterns that influence your emotions and behavior.",
        features: [
            "Identify negative thought patterns",
            "Develop coping strategies",
            "Problem-solving techniques",
            "Behavioral activation"
        ]
    },
    {
        id: 2,
        title: "Family Counseling",
        image: "assets/corporate-wellness-service-1.webp",
        description: "Improve communication and resolve conflicts within your family system for healthier relationships.",
        features: [
            "Improve family communication",
            "Resolve conflicts",
            "Strengthen relationships",
            "Develop healthy boundaries"
        ]
    },
    {
        id: 3,
        title: "Trauma Therapy",
        image: "assets/resilince-building.webp",
        description: "Specialized approaches to help process and recover from traumatic experiences.",
        features: [
            "EMDR therapy available",
            "Trauma processing techniques",
            "Safety and stabilization",
            "Post-traumatic growth"
        ]
    },
    {
        id: 4,
        title: "Anxiety Management",
        image: "assets/leadership-1.webp",
        description: "Learn techniques to manage anxiety symptoms and regain control of your life.",
        features: [
            "Relaxation techniques",
            "Exposure therapy",
            "Cognitive restructuring",
            "Mindfulness practices"
        ]
    },
    {
        id: 5,
        title: "Couples Therapy",
        image: "assets/learning-development-1.webp",
        description: "Strengthen your relationship through improved communication and conflict resolution.",
        features: [
            "Improve communication skills",
            "Conflict resolution strategies",
            "Rebuild trust",
            "Enhance intimacy"
        ]
    },
    {
        id: 6,
        title: "Mindfulness Therapy",
        image: "assets/psychological-safety.webp",
        description: "Cultivate present-moment awareness to reduce stress and improve emotional regulation.",
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