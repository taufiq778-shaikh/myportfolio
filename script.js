document.addEventListener('DOMContentLoaded', function() {

    // Events
    const eventsData = [
        {
            title: "Summer Music Fest 2025",
            shortDesc: "Experience a weekend of diverse music, delicious food, and unforgettable memories.",
            longDesc: "Join us for the biggest Summer Music Fest yet! Featuring an eclectic lineup of top national and international artists across multiple genres. Beyond the music, explore artisan markets, indulge in gourmet food truck offerings, and participate in interactive art installations. A truly immersive experience for all music enthusiasts. Don't miss out on securing your spot!",
            date: "November 5-7, 2025",
            location: "Central City Park, Metropolis",
            img: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=800",
            category: "Music"
        },
        {
            title: "Global Tech Summit",
            shortDesc: "A deep dive into AI, Web3, and future technologies with leading industry innovators.",
            longDesc: "The Global Tech Summit brings together visionaries, developers, and entrepreneurs to explore the forefront of technology. Keynote speeches will cover advancements in Artificial Intelligence, the potential of Web3, quantum computing, and sustainable tech solutions. Engage in expert-led workshops, dynamic panel discussions, and unmatched networking opportunities. Shape the future with us!",
            date: "December 12-14, 2025",
            location: "Grand Convention Center, Techville",
            img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
            category: "Tech"
        },
        {
            title: "Annual City Marathon",
            shortDesc: "Challenge yourself with a scenic run through the city's iconic landmarks. All levels welcome!",
            longDesc: "Lace up for the most anticipated running event of the year, the Annual City Marathon! Our scenic route guides you through the historic heart of the city, passing iconic landmarks and vibrant neighborhoods. With full medical support and hydration stations along the way, we ensure a safe and exhilarating experience for both seasoned runners and first-timers. Finish strong and celebrate your achievement at our lively post-race festival!",
            date: "October 20, 2025",
            location: "Downtown City Streets, Capital City",
            img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800",
            category: "Sports"
        },
        {
            title: "Electric Dreams Rave",
            shortDesc: "An electrifying night of the best EDM with world-class DJs and stunning visuals.",
            longDesc: "Get ready to immerse yourself in the thumping beats and mind-bending visuals of Electric Dreams Rave! Featuring an lineup of international DJ sensations, cutting-edge light shows, and an unparalleled sound system, this is the definitive electronic music experience. Come and lose yourself in the rhythm and energy of the night!",
            date: "September 10, 2025",
            location: "The Warehouse Arena, Beat City",
            img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
            category: "Music"
        },
        {
            title: "Startup Pitch & Connect",
            shortDesc: "Witness groundbreaking ideas and network with innovative founders and investors.",
            longDesc: "Startup Pitch & Connect is your gateway to the next big innovation. Watch as brilliant entrepreneurs pitch their pioneering ideas to a panel of top-tier venture capitalists and angel investors. This event offers unparalleled opportunities for networking with founders, mentors, and fellow enthusiasts. Discover, connect, and be part of the entrepreneurial revolution!",
            date: "August 15, 2025",
            location: "Innovation Hub Auditorium, Future City",
            img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
            category: "Tech"
        },
        {
            title: "Mindful Living Retreat",
            shortDesc: "A tranquil weekend of yoga, meditation, and holistic wellness practices.",
            longDesc: "Escape the daily grind and find your inner peace at the Mindful Living Retreat. This rejuvenating weekend is dedicated to holistic wellness, featuring daily yoga and meditation sessions, healthy organic cuisine, and mindfulness workshops in a breathtaking natural environment. Reconnect with yourself and embark on a journey of self-discovery. Suitable for all experience levels.",
            date: "July 22-24, 2025",
            location: "Serenity Mountain Resort, Green Valley",
            img: "https://images.unsplash.com/photo-1543349689-9b4d4262e865?auto=format&fit=crop&q=80&w=800",
            category: "Wellness"
        }
    ];

    const eventCardsContainer = document.getElementById('event-cards-container');
    const selectEventDropdown = document.getElementById('selectEvent');

    // Function to render event cards
    function renderEventCards() {
        eventCardsContainer.innerHTML = ''; 
        selectEventDropdown.innerHTML = '<option value="" selected disabled>Choose an event...</option>'; // Clear existing options

        eventsData.forEach((event, index) => {
            // Create Event Card
            const col = document.createElement('div');
            col.className = 'col-lg-4 col-md-6';
            col.setAttribute('data-aos', 'fade-up');
            col.setAttribute('data-aos-delay', (index * 100) + 200); 
            col.innerHTML = `
                <div class="card h-100 shadow-sm event-card">
                    <img src="${event.img}" class="card-img-top" alt="${event.title}">
                    <div class="card-body">
                        <h5 class="card-title">${event.title}</h5>
                        <p class="card-text">${event.shortDesc}</p>
                        <button class="btn btn-outline-primary view-details-btn" 
                            data-title="${event.title}" 
                            data-img="${event.img}"
                            data-date="${event.date}"
                            data-location="${event.location}"
                            data-description="${event.longDesc}"
                            data-bs-toggle="modal" 
                            data-bs-target="#eventDetailModal">View Details</button>
                    </div>
                </div>
            `;
            eventCardsContainer.appendChild(col);

            //Registration Form
            const option = document.createElement('option');
            option.value = event.title;
            option.textContent = event.title;
            selectEventDropdown.appendChild(option);
        });

        //"View Details" 
        addModalEventListeners();
    }

    // Function 
    function addModalEventListeners() {
        const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
        const eventDetailModal = document.getElementById('eventDetailModal');

        viewDetailsButtons.forEach(button => {
            button.addEventListener('click', function() {
                const title = this.dataset.title;
                const img = this.dataset.img;
                const date = this.dataset.date;
                const location = this.dataset.location;
                const description = this.dataset.description;

                eventDetailModal.querySelector('#eventDetailModalLabel').textContent = title;
                eventDetailModal.querySelector('#modalEventImg').src = img;
                eventDetailModal.querySelector('#modalEventImg').alt = title;
                eventDetailModal.querySelector('#modalEventDate').textContent = date;
                eventDetailModal.querySelector('#modalEventLocation').textContent = location;
                eventDetailModal.querySelector('#modalEventDescription').textContent = description;

                
                const modalRegisterBtn = eventDetailModal.querySelector('#modalRegisterBtn');
                
                const oldBtn = modalRegisterBtn.cloneNode(true);
                modalRegisterBtn.parentNode.replaceChild(oldBtn, modalRegisterBtn);
                const newModalRegisterBtn = document.getElementById('modalRegisterBtn');

                newModalRegisterBtn.addEventListener('click', () => {
                    setTimeout(() => { 
                        const selectEvent = document.getElementById('selectEvent');
                        selectEvent.value = title; 
                        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }, 300); 
                });
            });
        });
    }

    
    renderEventCards();

    
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const selectedEvent = document.getElementById('selectEvent').value;

        if(fullName && email && selectedEvent) {
            alert(`Registration successful!\nName: ${fullName}\nEmail: ${email}\nEvent: ${selectedEvent}`);
            registrationForm.reset(); 
        } else {
            alert('Please fill in all required fields.');
        }
    });

    //Newsletter form submission
    const newsletterForm = document.querySelector('#newsletter form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        if (emailInput.value) {
            alert(`Thank you for subscribing, ${emailInput.value}!`);
            emailInput.value = '';
        } else {
            alert('Please enter your email address.');
        }
    });

    //  navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax 
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const parallaxBg = document.querySelector('.hero-bg-parallax');
        if (parallaxBg) {
            parallaxBg.style.transform = 'translateY(' + scrolled * 0.4 + 'px)'; 
        }
    });

});