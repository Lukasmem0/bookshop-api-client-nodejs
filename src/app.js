 const generalTasks = require('./tasks/generalTasks');
const authTasks = require('./auth/authTasks');
const registeredUserTasks = require('./tasks/registeredUserTasks');
const nodeMethods = require('./tasks/nodeMethods');
const { getAuthToken } = require('./config'); 
// Hàm bất đồng bộ tự gọi (IIAF) để chạy các tác vụ của bạn
(async () => {
    console.log('--- Bắt đầu Ứng dụng Client Bookshop API ---'); 

    // ===================================
    // I. Kiểm tra các tác vụ Người dùng chung (1-5)
    // ===================================
    // console.log("\n--- Kiểm tra các tác vụ Người dùng chung ---");
    // await generalTasks.getAllBooksList();
    // await generalTasks.getBookByISBN('1234567890'); // Thay bằng một ISBN có thật
    // await generalTasks.getBooksByAuthor('John Doe'); // Thay bằng một Tác giả có thật
    // await generalTasks.getBooksByTitle('The Amazing Book'); // Thay bằng một Tiêu đề có thật
    // await generalTasks.getBookReviews('1234567890'); // Thay bằng một ISBN có thật

    // ===================================
    // II. Kiểm tra Xác thực người dùng (6-7)
    // ===================================
    // console.log("\n--- Kiểm tra Xác thực người dùng ---");
    // const TEST_USERNAME = 'user_test_123';
    // const TEST_PASSWORD = 'password_secure_abc';

    // const isRegistered = await authTasks.registerUser(TEST_USERNAME, TEST_PASSWORD);
    // if (isRegistered) {
    //     const isLoggedIn = await authTasks.loginUser(TEST_USERNAME, TEST_PASSWORD);
    //     if (isLoggedIn) {
    //         console.log("\n--- Đã đăng nhập thành công. Tiếp tục với các tác vụ Người dùng đã đăng ký ---");
    //         // ===================================
    //         // III. Kiểm tra các tác vụ Người dùng đã đăng ký (Tasks 8-9) - Chỉ chạy khi đã đăng nhập
    //         // ===================================
    //         await registeredUserTasks.addOrModifyReview('9876543210', 'Đây là review đầu tiên của tôi cho cuốn sách này!'); // Thay bằng một ISBN mẫu
    //         await registeredUserTasks.addOrModifyReview('1234567890', 'Đã cập nhật review: Vẫn là cuốn sách tuyệt vời nhất!'); // Sửa review cho một ISBN mẫu
    //         // await registeredUserTasks.deleteReview('9876543210'); // Bỏ comment để kiểm tra xóa review
    //     } else {
    //         console.log("\n--- Đăng nhập thất bại. Bỏ qua các tác vụ Người dùng đã đăng ký. ---");
    //     }
    // } else {
    //     console.log("\n--- Đăng ký thất bại. Bỏ qua Đăng nhập và các tác vụ Người dùng đã đăng ký. ---");
    // }

    // ===================================
    // IV. Kiểm tra các phương thức của chương trình Node.js (Tasks 10-13)
    // ===================================
    console.log("\n--- Kiểm tra các phương thức của chương trình Node.js ---");

    // Task 10: Callback Bất đồng bộ (Async Callback)
    nodeMethods.getAllBooksAsyncCallback((err, books) => {
        if (err) console.error("Task 10 Lỗi (Callback):", err.message);
        else console.log("Task 10 Kết quả (Callback): Tìm thấy", books ? books.length : 0, "cuốn sách.");
    });

    // Task 11: Promises (Nhớ dùng .then/.catch cho Promise này)
    await nodeMethods.searchBookByISBNPromise('1234567890') 
        .then(book => console.log("Task 11 Kết quả (Promise):", book ? book.title : "Không tìm thấy sách."))
        .catch(err => console.error("Task 11 Lỗi (Promise):", err.message));

    //12
    await nodeMethods.searchBooksByAuthorAsync('Jane Smith');

    //13
    await nodeMethods.searchBooksByTitleAsync('Fantastic Voyage');

    console.log('\n--- Hoàn tất các thao tác Client ---');
})();