/* Hàm phân loại sản phẩm theo danh mục */
function filterProducts(category) {
    var items = document.querySelectorAll('#list-products .item');
    
    items.forEach(function(item) {
        if (category === 'all' || category === 'tat-ca') {
            item.style.display = 'block'; // Hiển thị tất cả sản phẩm
        } else {
            if (item.classList.contains(category)) {
                item.style.display = 'block'; // Hiển thị sản phẩm theo danh mục
            } else {
                item.style.display = 'none'; // Ẩn sản phẩm không thuộc danh mục
            }
        }
    });
}


/* Hàm cập nhật hiển thị giá trị của thanh trượt giá */
function updatePriceDisplay(value) {
    document.getElementById('price-display').innerText = `${value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} VNĐ`;
}

/* Hàm lọc sản phẩm theo giá */
function filterByPrice() {
    const maxPrice = document.getElementById('price-range').value; // Lấy giá trị tối đa từ thanh trượt
    const products = document.querySelectorAll('#list-products .item');

    products.forEach(product => {
        const priceText = product.querySelector('.price').innerText; // Lấy giá trị của sản phẩm
        const price = parseInt(priceText.replace(/\D/g, '')); // Chuyển đổi giá trị về số nguyên

        if (price <= maxPrice) {
            product.style.display = 'block'; // Hiển thị sản phẩm có giá <= maxPrice
        } else {
            product.style.display = 'none'; // Ẩn sản phẩm có giá > maxPrice
        }
    });
}



/* Hàm tìm kiếm sản phẩm theo tên */
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase(); // Lấy từ khóa tìm kiếm
    const items = document.querySelectorAll('#list-products .item');

    items.forEach(item => {
        const name = item.querySelector('.name').textContent.toLowerCase(); // Lấy tên sản phẩm
        if (name.includes(searchTerm)) {
            item.style.display = 'block'; // Hiển thị sản phẩm nếu tên chứa từ khóa
        } else {
            item.style.display = 'none'; // Ẩn sản phẩm nếu tên không chứa từ khóa
        }
    });
}
