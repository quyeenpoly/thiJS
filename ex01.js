// Hàm generateId(length, prefix) sẽ trả về một chuỗi id ngẫu nhiên
// với độ dài length nối với tiền tố prefix (lưu ý độ dài length không tính prefix). (0.5đ)

// Kiểm tra length phải là số nguyên dương nhỏ hơn 100 (0.5đ).

// Chuỗi id ngẫu nhiên được tạo ra (trừ phần prefix) thì chỉ được phép chứa
// các ký tự trong listCharacters bao gồm các ký tự chữ cái và số. (0.5đ)

// Nếu người dùng không truyền prefix thì mặc định prefix là chuỗi rỗng. (0.5đ)

const listCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generatorId(length, prefix) {
  if (typeof length !== "number" || length <= 0 || length >= 100) {
    console.log("Lỗi");
  }

  if (prefix && typeof prefix !== "string") {
    console.log("Lỗi");
  }
  prefix = prefix || "";
  let id = prefix;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * listCharacters.length);
    id += listCharacters[randomIndex];
  }
  return id;
}
console.log(generatorId(8, "user"));

// console.log(generatorId(8, "user")); // Output: "user5a3Fb2DF"
// console.log(generatorId(4, "product - ")); // Output: "product - 3a2f"
// console.log(generatorId(10)); // Output: "5a3Fb2DFc1"
