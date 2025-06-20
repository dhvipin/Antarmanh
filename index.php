<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manasthali</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">

    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
        rel="stylesheet">
    <!-- <link rel="script" href="script.js"> -->


</head>

<body>

<!-- index.php -->
<?php include 'header.php'; ?>


    <!-- 


    Hero Section of Landing page -->

    <div class="hero-section">

        <div class="slideshow-container">

            <div class="mySlides fade">
                <img src="assets/integratedwellness_front.png" style="width:100%">
            </div>

            <div class="mySlides fade">
                <img src="assets/slide01.jpg" style="width:100%">
            </div>

            <div class="mySlides fade">
                <img src="assets/slide02.jpg" style="width:100%">
            </div>
            <!-- <div class="mySlides fade">
                <img src="assets/slide04.png" style="width:100%">
            </div> -->

        </div>
        <br>

        <div style="text-align:center">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>

    </div>


    <!-- About Section of website  -->
    <div class="container about-section" data-aos="fade-right">
        <div class="about-card" data-aos="fade-up">
            <div class="row g-5 align-items-center">
                <!-- Video Section -->
                <div class="col-md-6">
                    <div class="video-wrapper ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/5fJuXncPVj8
 " title="Introduction: Manasthali" allowfullscreen></iframe>
                    </div>
                </div>

                <!-- Text Section -->
                <div class="col-md-6 about-content">
                    <div class="icon-tag">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                            class="bi bi-flower1" viewBox="0 0 16 16">
                            <path d="M6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            <path
                                d="M8 1a1 1 0 0 1 1 1c0 1.63 1.21 3.013 2.795 3.452.544.147.913.661.765 1.205a1 1 0 0 1-1.205.765C9.013 7.794 7.63 9 6 9a1 1 0 0 1-1-1c0-1.63-1.206-3.013-2.795-3.452A1 1 0 0 1 1 3a1 1 0 0 1 1-1c1.63 0 3.013-1.206 3.452-2.795A1 1 0 0 1 8 1z" />
                        </svg>
                        A place within the mind
                    </div>
                    <h2 class="mt-3">About Manasthali</h2>
                    <p><strong>मन:स्थली</strong> is interpreted as ' a place within the mind'. The purpose of मन:स्थली
                        thus is to explore the mind in order to analyse and manage mind related issues. There is body
                        and mind interaction in every breath we take but still a dichotomy exists between the two when
                        it comes to handling somatic issues with psychological roots. This initiative aims at spreading
                        awareness and education regarding mental health issues as well as exploring innovative methods
                        to help and manage emotional and behavioral issues in children, adults and elderly alike.</p>
                    <a href="#" class="btn btn-custom mt-3">Read more</a>
                </div>
            </div>
        </div>
    </div>

    <!-- AOS & Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>


    <!-- What We Do Section -->

    <section class="container py-5" id="therapy-services" data-aos="zoom-in-up">
        <div class="therapy-header">
            <h2>Our Services</h2>
            <p class="text-muted">Click on any service to learn more</p>
        </div>

        <!-- Therapy Cards Carousel -->
        <div id="therapyCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner ">
                <!-- Carousel Items will be added dynamically by JavaScript -->
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#therapyCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#therapyCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>

    <!-- Therapy Details Modal -->
    <div class="modal fade therapy-modal" id="therapyModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="therapyModalLabel">Service Details</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="" id="modalTherapyImage" class="img-fluid rounded mb-3" alt="Therapy Image">
                        </div>
                        <div class="col-md-6">
                            <h4 id="modalTherapyTitle" class="mb-3"></h4>
                            <p id="modalTherapyDescription" class="mb-4"></p>
                            <h5>Key Features:</h5>
                            <ul class="therapy-features" id="modalTherapyFeatures">
                                <!-- Features will be added by JavaScript -->
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Book a Session</button>
                </div>
            </div>
        </div>
    </div>






    <!-- Booking Appointment  Hero Section -->
    <section class="booking-hero">
        <div class="container text-center">
            <h1 class="display-4 fw-bold mb-3">Book Your Session</h1>
            <p class="lead">Choose between in-person or online video consultation</p>
        </div>
    </section>

    <!-- Booking Type Tabs -->
    <div class="container mb-4">
        <ul class="nav booking-type-tabs nav-tabs nav-justified" id="bookingTypeTabs" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="inperson-tab" data-bs-toggle="tab" data-bs-target="#inperson"
                    type="button">
                    <i class="fas fa-clinic-medical me-2"></i> In-Person Visit
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="online-tab" data-bs-toggle="tab" data-bs-target="#online" type="button">
                    <i class="fas fa-video me-2"></i> Online Consultation
                </button>
            </li>
        </ul>
    </div>

    <!-- Booking Content -->
    <div class="container">
        <div class="tab-content" id="bookingTypeTabsContent">
            <!-- In-Person Booking Tab -->
            <div class="tab-pane fade show active" id="inperson" role="tabpanel">
                <div class="row">
                    <!-- Clinic Selection -->
                    <div class="col-lg-4 mb-4">
                        <div class="booking-card h-100">
                            <div class="booking-card-header">
                                <h5 class="mb-0"><i class="fas fa-map-marker-alt me-2"></i>Select Location</h5>
                            </div>
                            <div class="card-body">
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="clinicLocation" id="mainClinic"
                                        checked>
                                    <label class="form-check-label" for="mainClinic">
                                        <h6>Main Wellness Center</h6>
                                        <p class="text-muted small">123 Therapy St, Mental Health City</p>
                                    </label>
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="radio" name="clinicLocation"
                                        id="downtownClinic">
                                    <label class="form-check-label" for="downtownClinic">
                                        <h6>Downtown Clinic</h6>
                                        <p class="text-muted small">456 Care Ave, Downtown</p>
                                    </label>
                                </div>

                                <div class="map-container mb-4">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215256627647!2d-73.98784492452596!3d40.74844097138971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1689876223587!5m2!1sen!2sus"
                                        style="border:0; width:100%; height:100%;" allowfullscreen
                                        loading="lazy"></iframe>
                                </div>

                                <div class="alert alert-info">
                                    <i class="fas fa-info-circle me-2"></i> Free parking available at all locations
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Date/Time Selection -->
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="booking-card h-100">
                                    <div class="booking-card-header">
                                        <h5 class="mb-0"><i class="fas fa-user-md me-2"></i>Select Therapist</h5>
                                    </div>
                                    <div class="card-body">
                                        <select class="form-select mb-3" id="inpersonTherapist">
                                            <option selected>Any Available Therapist</option>
                                            <option>Dr. Sarah Johnson</option>
                                            <option>Dr. Michael Chen</option>
                                            <option>Dr. Emily Rodriguez</option>
                                        </select>

                                        <select class="form-select" id="inpersonService">
                                            <option selected>Select Service</option>
                                            <option>Initial Consultation</option>
                                            <option>Individual Therapy</option>
                                            <option>Couples Counseling</option>
                                            <option>Family Therapy</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="booking-card h-100">
                                    <div class="booking-card-header">
                                        <h5 class="mb-0"><i class="fas fa-calendar-alt me-2"></i>Select Date</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control datepicker" id="inpersonDate"
                                            placeholder="Select date">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Time Slots -->
                        <div class="booking-card mb-4">
                            <div class="booking-card-header">
                                <h5 class="mb-0"><i class="fas fa-clock me-2"></i>Available Time Slots</h5>
                            </div>
                            <div class="card-body">
                                <div class="row" id="inpersonTimeSlots">
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">9:00 AM</div>
                                    </div>
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">10:00 AM</div>
                                    </div>
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">11:00 AM</div>
                                    </div>
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">1:00 PM</div>
                                    </div>
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">2:00 PM</div>
                                    </div>
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">3:00 PM</div>
                                    </div>
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">4:00 PM</div>
                                    </div>
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">5:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Patient Information -->
                        <div class="booking-card">
                            <div class="booking-card-header">
                                <h5 class="mb-0"><i class="fas fa-user me-2"></i>Your Information</h5>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Full Name</label>
                                        <input type="text" class="form-control" id="inpersonName" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Phone Number</label>
                                        <input type="tel" class="form-control" id="inpersonPhone" required>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" id="inpersonEmail" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Special Requests</label>
                                    <textarea class="form-control" id="inpersonRequests" rows="3"></textarea>
                                </div>

                                <div class="d-grid mt-4">
                                    <button class="btn btn-book" id="bookInpersonBtn">
                                        <i class="fas fa-calendar-check me-2"></i> Book In-Person Appointment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Online Booking Tab -->
            <div class="tab-pane fade" id="online" role="tabpanel">
                <div class="row">
                    <!-- Online Info -->
                    <div class="col-lg-4 mb-4">
                        <div class="booking-card h-100">
                            <div class="booking-card-header">
                                <h5 class="mb-0"><i class="fas fa-laptop-medical me-2"></i>Online Consultation</h5>
                            </div>
                            <div class="card-body text-center">
                                <div class="video-call-icon">
                                    <i class="fas fa-video"></i>
                                </div>
                                <h5>Secure Video Sessions</h5>
                                <p class="text-muted">Connect with your therapist from the comfort of your home</p>

                                <div class="text-start mt-4">
                                    <h6><i class="fas fa-check-circle text-success me-2"></i>How it works:</h6>
                                    <ol class="small">
                                        <li class="mb-2">Book your preferred time slot</li>
                                        <li class="mb-2">Receive confirmation with meeting link</li>
                                        <li class="mb-2">Join session at scheduled time</li>
                                    </ol>

                                    <div class="alert alert-info mt-3">
                                        <i class="fas fa-info-circle me-2"></i> You'll need a device with camera and
                                        microphone
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Online Booking Form -->
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="booking-card h-100">
                                    <div class="booking-card-header">
                                        <h5 class="mb-0"><i class="fas fa-user-md me-2"></i>Select Therapist</h5>
                                    </div>
                                    <div class="card-body">
                                        <select class="form-select mb-3" id="onlineTherapist">
                                            <option selected>Any Available Therapist</option>
                                            <option>Dr. Sarah Johnson</option>
                                            <option>Dr. Michael Chen</option>
                                            <option>Dr. Emily Rodriguez</option>
                                        </select>

                                        <select class="form-select" id="onlineService">
                                            <option selected>Select Service</option>
                                            <option>Initial Consultation</option>
                                            <option>Individual Therapy</option>
                                            <option>Couples Counseling</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-4">
                                <div class="booking-card h-100">
                                    <div class="booking-card-header">
                                        <h5 class="mb-0"><i class="fas fa-calendar-alt me-2"></i>Select Date</h5>
                                    </div>
                                    <div class="card-body">
                                        <input type="text" class="form-control datepicker" id="onlineDate"
                                            placeholder="Select date">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Time Slots -->
                        <div class="booking-card mb-4">
                            <div class="booking-card-header">
                                <h5 class="mb-0"><i class="fas fa-clock me-2"></i>Available Time Slots</h5>
                            </div>
                            <div class="card-body">
                                <div class="row" id="onlineTimeSlots">
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">9:00 AM</div>
                                    </div>
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">10:00 AM</div>
                                    </div>
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">11:00 AM</div>
                                    </div>
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">1:00 PM</div>
                                    </div>
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">2:00 PM</div>
                                    </div>
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">3:00 PM</div>
                                    </div>
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">4:00 PM</div>
                                    </div>
                                    <div class="col-4 col-md-3 mb-2">
                                        <div class="time-slot text-center">5:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Patient Information -->
                        <div class="booking-card">
                            <div class="booking-card-header">
                                <h5 class="mb-0"><i class="fas fa-user me-2"></i>Your Information</h5>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Full Name</label>
                                        <input type="text" class="form-control" id="onlineName" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label class="form-label">Phone Number</label>
                                        <input type="tel" class="form-control" id="onlinePhone" required>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" id="onlineEmail" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Special Requests</label>
                                    <textarea class="form-control" id="onlineRequests" rows="3"></textarea>
                                </div>

                                <div class="d-grid mt-4">
                                    <button class="btn btn-book" id="bookOnlineBtn">
                                        <i class="fas fa-video me-2"></i> Book Online Session
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Confirmation Modal -->
    <div class="modal fade" id="confirmationModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body text-center p-5">
                    <div class="confirmation-icon">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3 class="mb-3" id="modalTitle">Appointment Booked!</h3>
                    <p class="mb-4" id="modalMessage">Your appointment has been confirmed. We've sent the details to
                        your email.</p>

                    <div class="booking-details mb-4 p-3 bg-light rounded">
                        <p class="mb-1"><strong>Type:</strong> <span id="confirmedType">In-Person Visit</span></p>
                        <p class="mb-1"><strong>Date:</strong> <span id="confirmedDate">June 15, 2023</span></p>
                        <p class="mb-1"><strong>Time:</strong> <span id="confirmedTime">11:00 AM</span></p>
                        <p class="mb-1"><strong>With:</strong> <span id="confirmedTherapist">Dr. Sarah Johnson</span>
                        </p>
                        <p class="mb-0"><strong id="locationLabel">Location:</strong> <span id="confirmedLocation">Main
                                Wellness Center</span></p>
                    </div>

                    <div class="d-grid gap-2">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                            <i class="fas fa-calendar-alt me-2"></i> Add to Calendar
                        </button>
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <!-- new and blog section div  -->
    <div class="container py-5">
        <div class="blog-heading">
            <h5>+ Latest Blog</h5>
            <h2>Our Latest Blog & News</h2>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
            <!-- Blog Card 1 -->
            <div class="col">
                <div class="blog-card d-flex flex-column">
                    <div class="position-relative">
                        <img src="assets/blog1.jpg" alt="Blog 1">
                        <span class="badge-health">Health</span>
                    </div>
                    <p class="text-primary mt-3 mb-1">By Alex Manie &nbsp;·&nbsp; 07 Jan, 2024</p>
                    <h6>Experimental Cancer Vaccine Both Treats And Pre Aphex</h6>
                    <div class="card-footer mt-2">
                        <a href="#"><span>&rarr;</span></a>
                    </div>
                </div>
            </div>

            <!-- Blog Card 2 -->
            <div class="col">
                <div class="blog-card d-flex flex-column">
                    <div class="position-relative">
                        <img src="assets/blog1.jpg" alt="Blog 2">
                        <span class="badge-health">Health</span>
                    </div>
                    <p class="text-primary mt-3 mb-1">By Alex Manie &nbsp;·&nbsp; 07 Jan, 2024</p>
                    <h6>How We Can Cover Injury Pain By Exer Cise Duis Aute</h6>
                    <div class="card-footer mt-2">
                        <a href="#"><span>&rarr;</span></a>
                    </div>
                </div>
            </div>

            <!-- Blog Card 3 -->
            <div class="col">
                <div class="blog-card d-flex flex-column">
                    <div class="position-relative">
                        <img src="assets/blog1.jpg" alt="Blog 3">
                        <span class="badge-health">Health</span>
                    </div>
                    <p class="text-primary mt-3 mb-1">By Alex Manie &nbsp;·&nbsp; 07 Jan, 2024</p>
                    <h6>Latest Dental Care Techniques For 2024</h6>
                    <div class="card-footer mt-2">
                        <a href="#"><span>&rarr;</span></a>
                    </div>
                </div>
            </div>

            <!-- Blog Card 4 -->
            <div class="col">
                <div class="blog-card d-flex flex-column">
                    <div class="position-relative">
                        <img src="assets/blog2.jpg" alt="Blog 4">
                        <span class="badge-health">Health</span>
                    </div>
                    <p class="text-primary mt-3 mb-1">By Alex Manie &nbsp;·&nbsp; 07 Jan, 2024</p>
                    <h6>Preventive Care Tips That Actually Work</h6>
                    <div class="card-footer mt-2">
                        <a href="#"><span>&rarr;</span></a>
                    </div>
                </div>
            </div>

            <!-- Blog Card 5 -->
            <div class="col">
                <div class="blog-card d-flex flex-column">
                    <div class="position-relative">
                        <img src="assets/blog2.jpg" alt="Blog 5">
                        <span class="badge-health">Health</span>
                    </div>
                    <p class="text-primary mt-3 mb-1">By Alex Manie &nbsp;·&nbsp; 07 Jan, 2024</p>
                    <h6>What You Should Know Before Dental Surgery</h6>
                    <div class="card-footer mt-2">
                        <a href="#"><span>&rarr;</span></a>
                    </div>
                </div>
            </div>

            <!-- Blog Card 6 -->
            <div class="col">
                <div class="blog-card d-flex flex-column">
                    <div class="position-relative">
                        <img src="assets/blog2.jpg" alt="Blog 6">
                        <span class="badge-health">Health</span>
                    </div>
                    <p class="text-primary mt-3 mb-1">By Alex Manie &nbsp;·&nbsp; 07 Jan, 2024</p>
                    <h6>Improving Patient Outcomes With New Tech</h6>
                    <div class="card-footer mt-2">
                        <a href="#"><span>&rarr;</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Clienet Testimonial reviews -->

    <div class="testimonial-section py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5">Success Stories</h2>
            <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="testimonial-card mx-auto">
                            <div class="rating mb-3">
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                            </div>
                            <p class="testimonial-text">"This therapy changed my life completely..."</p>
                            <div class="client-info">
                                <strong>— Michael T.</strong>
                                <span class="d-block text-muted">Anxiety Treatment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Call to Action Section -->
    <section class="cta-section">
        <!-- Floating background elements -->
        <div class="floating-element circle" style="top: 20%; left: 10%;"></div>
        <div class="floating-element triangle" style="bottom: 15%; right: 8%; transform: rotate(45deg);"></div>
        <div class="floating-element circle" style="bottom: 25%; left: 15%; width: 60px; height: 60px;"></div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="cta-content">
                        <h1 class="cta-title">Ready to Transform Your Experience?</h1>
                        <p class="cta-description">Join thousands of satisfied customers who have already discovered the
                            power of our solution. Take the first step towards success today!</p>
                        <button class="cta-btn btn pulse" id="ctaButton">
                            Get Started Now <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- Footer Section -->

    <!-- <footer class="footer">
        <div class="container">
            <a href="#" class="back-to-top">
                <i class="fas fa-arrow-up"></i>
            </a>

            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <img src="assets/logo.png" alt="Company Logo" class="footer-logo">
                    <p class="text-secondary">Providing compassionate mental health care since 2010. Our team of
                        professionals is dedicated to your well-being.</p>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 class="footer-heading">Quick Links</h5>
                    <ul class="footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Therapists</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 class="footer-heading">Our Services</h5>
                    <ul class="footer-links">
                        <li><a href="#">Individual Therapy</a></li>
                        <li><a href="#">Couples Counseling</a></li>
                        <li><a href="#">Family Therapy</a></li>
                        <li><a href="#">Teen Counseling</a></li>
                        <li><a href="#">Trauma Therapy</a></li>
                        <li><a href="#">Online Sessions</a></li>
                    </ul>
                </div>

                <div class="col-lg-4 col-md-6">
                    <h5 class="footer-heading">Contact Us</h5>
                    <div class="contact-info">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>123 Therapy Street, Mental Health City, MH 12345</span>
                    </div>
                    <div class="contact-info">
                        <i class="fas fa-phone-alt"></i>
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div class="contact-info">
                        <i class="fas fa-envelope"></i>
                        <span>info@yourtherapycenter.com</span>
                    </div>
                    <div class="contact-info">
                        <i class="fas fa-clock"></i>
                        <span>Mon-Fri: 9:00 AM - 7:00 PM<br>Sat: 10:00 AM - 4:00 PM</span>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="row">
                    <div class="col-md-6">
                        <p class="copyright">&copy; 2023 Your Therapy Center. All Rights Reserved.</p>
                    </div>
                    <div class="col-md-6 text-md-end">
                        <a href="#" class="text-secondary me-3">Privacy Policy</a>
                        <a href="#" class="text-secondary me-3">Terms of Service</a>
                        <a href="#" class="text-secondary">Sitemap</a>
                    </div>
                </div>
            </div>
        </div>
    </footer> -->
<?php include 'footer.php'; ?>

    <!-- Bootstrap JS + Icons -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">



    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>

</body>

</html>