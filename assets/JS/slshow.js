let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 50000); // Change image every 3 seconds
}

function changeSlide(n) {
    const slides = document.getElementsByClassName("slide");
    slideIndex += n + 1; // Cập nhật chỉ số slide

    // Nếu slideIndex nhỏ hơn 1, đặt nó thành slide cuối cùng
    if (slideIndex < 1) {
        slideIndex = slides.length; // Nhảy đến slide cuối cùng
    }
    // Nếu slideIndex lớn hơn số lượng slide, đặt lại về 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    showSlides(); // Hiển thị slide mới
}