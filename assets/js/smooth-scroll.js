// JavaScript สำหรับ Smooth Scroll และ Car Animation
document.addEventListener('DOMContentLoaded', function() {
    // 1. เลือก Element
    const flags = document.querySelectorAll('.flag');
    const mainScooter = document.getElementById('mainScooter');

    if (!flags.length || !mainScooter) {
        console.warn("ไม่พบธง (class='flag') หรือรถ (id='mainScooter') ในหน้าเว็บ");
        return; // ออกจากฟังก์ชันถ้าไม่พบ element
    }

    // 2. เพิ่ม Event Listener ให้กับธงแต่ละอัน
    flags.forEach(flag => {
        flag.addEventListener('click', function() {
            // 2.1 Smooth Scroll
            const targetSectionId = this.getAttribute('data-target-section');
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth', // ทำให้เลื่อนอย่างนุ่มนวล
                    block: 'start'       // เลื่อนให้ส่วนบนของ element ตรงกับส่วนบนของ viewport
                });
            } else {
                console.warn(`ไม่พบ Section ที่มี ID: ${targetSectionId}`);
            }

            // 2.2 Animate Scooter/Car
            const targetCarPos = this.getAttribute('data-car-pos');
            if (targetCarPos) {
                mainScooter.style.top = targetCarPos;
            } else {
                console.warn(`ไม่พบ data-car-pos สำหรับธง: ${this.alt}`);
            }

                // Optional: เพิ่ม class 'active' ให้กับธงที่ถูกคลิก
                // และลบออกจากธงอื่น เพื่อไฮไลต์ธงปัจจุบัน
                flags.forEach(f => f.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // (Optional) เลื่อนรถไปตำแหน่งธงแรกและไฮไลต์ธงแรกเมื่อโหลดหน้า
        // และเลื่อนไปยัง Section แรก
        if (flags.length > 0) {
            flags[0].click(); // Simulate a click on the first flag
        }
    });