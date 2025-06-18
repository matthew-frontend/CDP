// // JavaScript สำหรับ Smooth Scroll และ Car Animation
// document.addEventListener('DOMContentLoaded', function() {
//     // 1. เลือก Element
//     const flags = document.querySelectorAll('.flag');
//     const mainScooter = document.getElementById('mainScooter');

//     if (!flags.length || !mainScooter) {
//         console.warn("ไม่พบธง (class='flag') หรือรถ (id='mainScooter') ในหน้าเว็บ");
//         return; // ออกจากฟังก์ชันถ้าไม่พบ element
//     }

//     // 2. เพิ่ม Event Listener ให้กับธงแต่ละอัน
//     flags.forEach(flag => {
//         flag.addEventListener('click', function() {
//             // 2.1 Smooth Scroll
//             const targetSectionId = this.getAttribute('data-target-section');
//             const targetSection = document.getElementById(targetSectionId);

//             if (targetSection) {
//                 targetSection.scrollIntoView({
//                     behavior: 'smooth', // ทำให้เลื่อนอย่างนุ่มนวล
//                     block: 'start'       // เลื่อนให้ส่วนบนของ element ตรงกับส่วนบนของ viewport
//                 });
//             } else {
//                 console.warn(`ไม่พบ Section ที่มี ID: ${targetSectionId}`);
//             }

//             // 2.2 Animate Scooter/Car
//             const targetCarPos = this.getAttribute('data-car-pos');
//             if (targetCarPos) {
//                 mainScooter.style.top = targetCarPos;
//             } else {
//                 console.warn(`ไม่พบ data-car-pos สำหรับธง: ${this.alt}`);
//             }

//                 // Optional: เพิ่ม class 'active' ให้กับธงที่ถูกคลิก
//                 // และลบออกจากธงอื่น เพื่อไฮไลต์ธงปัจจุบัน
//                 flags.forEach(f => f.classList.remove('active'));
//                 this.classList.add('active');
//             });
//         });

//         // (Optional) เลื่อนรถไปตำแหน่งธงแรกและไฮไลต์ธงแรกเมื่อโหลดหน้า
//         // และเลื่อนไปยัง Section แรก
//         if (flags.length > 0) {
//             flags[0].click(); // Simulate a click on the first flag
//         }
//     });

const copBike = document.getElementById('copBike');
const flagButtons = document.querySelectorAll('.button-flag');
const validSections = document.querySelectorAll('section[data-index]');

function moveBikeToIndex(index) {
  const targetFlag = flagButtons[index];
  if (targetFlag) {
    const offset = targetFlag.offsetTop;
    copBike.style.top = `${offset}px`;
  }
}

// ✅ เมื่อคลิกธง
flagButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    moveBikeToIndex(index);
  });
});

// ✅ เมื่อ scroll → หาว่า section ไหนอยู่กลางจอมากที่สุด
window.addEventListener('scroll', () => {
  let bestMatchIndex = null;
  let maxVisible = 0;

  validSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

    if (visibleHeight > maxVisible && visibleHeight > 100) {
      maxVisible = visibleHeight;
      bestMatchIndex = section.getAttribute('data-index');
    }
  });

  if (bestMatchIndex !== null) {
    moveBikeToIndex(bestMatchIndex);
  }
});
