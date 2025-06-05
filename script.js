

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
    window.addEventListener('resize', function() {
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
        flatpickr(".datepicker", {
            minDate: "today",
            maxDate: new Date().fp_incr(30) // 30 days from now
        });
        
        // Time slot selection
        document.querySelectorAll('.time-slot').forEach(slot => {
            slot.addEventListener('click', function() {
                document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
        
        // Form submission (example)
        document.querySelectorAll('.btn-book').forEach(btn => {
            btn.addEventListener('click', function(e) {
                if (!document.querySelector('.time-slot.selected')) {
                    e.preventDefault();
                    alert('Please select a time slot');
                }
                // In real implementation, you would submit the form here
            });
        });



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