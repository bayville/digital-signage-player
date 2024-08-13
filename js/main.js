// Function to load and display content based on content type
const loadContent = (slide, item, index) => {
    switch (item.type) {
        case 'url':
            slide.innerHTML = `<iframe src="${item.url}" id="${index}" frameborder="0" scrolling="no"></iframe>`;
            break;
        case 'picture':
            slide.innerHTML = `<img src="${item.url}" id="${index}" alt="Picture"/>`;
            break;
        case 'video':
            slide.innerHTML = `<video autoplay id="${index}"><source src="${item.url}" type="video/mp4"></video>`;
            break;
        case 'info':
            slide.innerHTML = `<div id="${index}"><p>Dagens publiksiffra:</p>${item.data}</div>`;
            break;
        default:
            console.error('Unsupported type:', item.type);
    }
};

// Function to show a slide, adds display flex to current slide using index
const showSlide = (index) => {
    const slides = document.querySelectorAll('.slide'); // Select all slides
    slides.forEach(slide => slide.style.display = 'none'); // Loop all slides and set to display none
    // If slide with index exists, display flex
    if (slides[index]) {
        slides[index].style.display = 'flex';
    }
};

// Function to pause all videos
const pauseAllVideos = () => {
const videos = document.querySelectorAll('video'); // Select all videos
videos.forEach(video => video.pause()); // Pause each video
};


// Load content from JSON file
const loadSlides = async () => {
    try {
        const response = await fetch('slides.json');
        const data = await response.json();
        const container = document.getElementById('slideContainer');

        // Create empty array to store slide durations
        const durations = [];
        
        //For each slide, load content and save duration
        data.slides.forEach((item, index) => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            loadContent(slide, item, index); //Loads content
            container.appendChild(slide);

            // Save duration for each slide
            durations.push(item.duration);
        });

        // Function to cycle through slides based on their duration
        let currentSlide = 0;
        let duration = 0 ;
        const showNextSlide = () => {
            pauseAllVideos(); //Pause all videos before showing the next slide
            showSlide(currentSlide);
            console.log(currentSlide);
            if (data.slides[currentSlide].type === "video"){
                const video = document.getElementById(currentSlide);
                video.play(); //Play video                
                //If video has a set duration in settings use that, else use video duration
                duration = data.slides[currentSlide].duration || video.duration * 1000;

            } else {
                duration = durations[currentSlide];
            }
            currentSlide = (currentSlide + 1) % data.slides.length;
            console.log("Duration:", duration / 1000, "sekunder");
            setTimeout(showNextSlide, duration); //Load slides and sets timeout to duration of slide
        };

        // Start the slideshow
        showNextSlide();

    } catch (error) {
        console.error('Error loading slides:', error);
    }
};

//Starts the script
loadSlides();