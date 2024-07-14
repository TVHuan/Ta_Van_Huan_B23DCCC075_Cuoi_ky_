function toggleForm(formId) {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (formId === 'registerForm') {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    } else if (formId === 'loginForm') {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Trong ứng dụng thực tế, bạn cần gửi yêu cầu POST đến máy chủ để xử lý việc đăng ký
    console.log(`Đang đăng ký người dùng với tên đăng nhập: ${username} và mật khẩu: ${password}`);
    // Ví dụ: fetch('/register', { method: 'POST', body: JSON.stringify({ username, password }) });

    // Để đơn giản trong ví dụ này, chỉ log thông tin đăng ký
    alert(`Đã đăng ký tài khoản: ${username}`);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Trong ứng dụng thực tế, bạn cần gửi yêu cầu POST đến máy chủ để xử lý việc đăng nhập
    console.log(`Đang đăng nhập người dùng với tên đăng nhập: ${loginUsername} và mật khẩu: ${loginPassword}`);
    // Ví dụ: fetch('/login', { method: 'POST', body: JSON.stringify({ loginUsername, loginPassword }) });

    // Để đơn giản trong ví dụ này, chỉ log thông tin đăng nhập
    alert(`Đã đăng nhập với tài khoản: ${loginUsername}`);
});
