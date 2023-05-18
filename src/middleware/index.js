// Đăng nhập và lưu token vào localStorage
function login(username, password) {
    return fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem('token', data.token);
        });
}

// Kiểm tra token và xác thực
function auth(token) {
    return fetch('/api/auth', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                // xác thực thành công
                return true;
            } else {
                // xác thực thất bại
                return false;
            }
        });
}

// Lấy token từ localStorage và gửi lên server để xác thực
function checkAuth() {
    const token = localStorage.getItem('token');
    if (token) {
        return auth(token);
    } else {
        // không có token, xác thực thất bại
        return Promise.resolve(false);
    }
}

// Sử dụng checkAuth() để kiểm tra xác thực trước khi truy cập các trang privateRoutes
// Ví dụ:
checkAuth().then((authenticated) => {
    if (authenticated) {
        // truy cập được trang privateRoutes
    } else {
        // không thể truy cập trang privateRoutes, chuyển hướng đến trang đăng nhập
    }
});

export default { checkAuth, auth, login };
