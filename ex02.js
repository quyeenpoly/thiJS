// Bài 2 (3 điểm): Tìm và đánh dấu keyword trong câu.
// Hàm highlightKeyword(content, keyword) nhận vào 2 tham số content và keyword và trả về nội dung với tất cả các keyword được bôi đậm bằng cách thêm thẻ <strong> vào trước và sau keyword.

// Thêm được thẻ strong vào trước và sau keyword. (0.5đ)
// Nếu có nhiều keyword cần higlight được hết các keyword trong content. (1.0đ)
// Nếu không tìm được keyword trong content thì trả về content ban đầu, nếu dữ liệu nhập vào không phải là chuỗi thì trả về Invalid. (0.5đ)
// Không phân biệt chữ hoa, chữ thường. (1.0đ)

// Test case:
highlightKeyword(
  "Học JavaScript không khó, Học javascript khó đã có CodeFarm lo, CodeFarm - Học là có việc!",
  "javascript"
);

const highlightKeyword = (content, keyword) => {
  if (typeof content !== "string" || typeof keyword !== "string") {
    return "Invalid";
  }
};

// Output:
// "Học <strong>JavaScript</strong> không khó, Học <strong>javascript</strong> khó đã có CodeFarm lo, CodeFarm - Học là có việc!"
