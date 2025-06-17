function loadComponent(id, file, callback) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      console.log(`✅ Loaded ${file}`);
      if (callback) callback(); // เรียก callback หลังโหลดเสร็จ
    })
    .catch((error) => console.error(`❌ Error loading ${file}:`, error));
}

// โหลด Header และ Footer ก่อน
document.addEventListener("DOMContentLoaded", function () {
  loadComponent("header", "components/header.html");
  loadComponent("footer", "components/footer.html");
});
