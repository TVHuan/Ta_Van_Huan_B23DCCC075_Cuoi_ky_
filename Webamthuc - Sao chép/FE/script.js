let currentIndex = 0;
const images = document.querySelectorAll('#background img');
const totalImages = images.length;

document.getElementById('next').addEventListener('click', showNextImage);
document.getElementById('prev').addEventListener('click', showPrevImage);

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateImageDisplay();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateImageDisplay();
}

function updateImageDisplay() {
    const newTransformValue = -currentIndex * 100;
    document.getElementById('background').style.transform = `translateX(${newTransformValue}%)`;
}

setInterval(showNextImage, 5000); // Chuyển slide sau mỗi 5 giây





// Hàm để tải nội dung vào div #content
function loadPage(page) {
    $.ajax({
        url: page,
        method: 'GET',
        success: function(data) {
            $('#content').html(data);
        },
        error: function() {
            $('#content').html('<p>Lỗi khi tải trang.</p>');
        }
    });
}
