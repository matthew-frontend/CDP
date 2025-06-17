document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.box-rotate'); // เลือกปุ่มทั้งหมด
    const contentAreas = document.querySelectorAll('.content-display-area'); // เลือก div เนื้อหาทั้งหมด

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // ป้องกันการกระทำเริ่มต้นของลิงก์ (เช่น การเปลี่ยนหน้า)

            const targetDivId = this.dataset.targetDiv; // ดึงค่า id ของ div เป้าหมายจาก data-target-div

            // ซ่อน div เนื้อหาที่กำลังแสดงอยู่ทั้งหมดก่อน
            contentAreas.forEach(contentArea => {
                contentArea.classList.remove('active-content');
                contentArea.classList.add('hidden-content');
            });

            // แสดง div เนื้อหาที่ต้องการ (จาก targetDivId)
            const targetDiv = document.getElementById(targetDivId);
            if (targetDiv) {
                targetDiv.classList.remove('hidden-content');
                targetDiv.classList.add('active-content');
            }
        });
    });
});