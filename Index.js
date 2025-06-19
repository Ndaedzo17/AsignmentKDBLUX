let slideIndex = 0;
    showSlides();

    function showSlides() {
      const slides = document.getElementsByClassName("slide");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 9000);
    }

    function prevSlide() {
      slideIndex -= 2;
      if (slideIndex < 0) slideIndex = 0;
      showSlides();
    }

    function nextSlide() {
      showSlides();
    }

    
  const form = document.querySelector("form");
  const responseBox = document.getElementById("responseMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Basic validation
    const enquiryType = document.getElementById("enquiryType").value;
    if (!enquiryType) {
      alert("Please select an enquiry type.");
      return;
    }

    // Simulated response message
    let message = "";
    switch (enquiryType) {
      case "services":
        message = "Thank you for your enquiry about our services. A representative will contact you with pricing and availability shortly.";
        break;
      case "products":
        message = "Product enquiry received. We will share the latest catalog and stock availability soon.";
        break;
      case "volunteer":
        message = "Thank you for your interest in volunteering. Our team will get in touch with upcoming opportunities.";
        break;
      case "sponsor":
        message = "Sponsor request noted. We appreciate your support! A sponsorship package will be shared with you.";
        break;
    }

    responseBox.textContent = message;
    responseBox.style.display = "block";
    form.reset();
  });




        