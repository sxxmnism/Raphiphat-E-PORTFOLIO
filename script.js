/* =====================================================
   1. NAVBAR - ACTIVE MENU
===================================================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* =====================================================
   2. CERTIFICATE FILTER
===================================================== */

const filterButtons = document.querySelectorAll(
    ".certificate-filter button"
);

const certificateCards = document.querySelectorAll(
    ".certificate-card"
);

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        const filter = this.dataset.filter;


        /* เปลี่ยนปุ่ม Active */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        this.classList.add("active");


        /* Filter Certificate */

        certificateCards.forEach(card => {

            const category = card.dataset.category;

            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =====================================================
   3. CERTIFICATE MODAL
===================================================== */

/*
    คลิกเกียรติบัตร
    → เปิดรูปขนาดใหญ่
*/

certificateCards.forEach(card => {

    card.addEventListener("click", function () {

        const image = this.querySelector("img");

        const title = this.querySelector("h3");

        if (!image) return;


        /* สร้าง Modal */

        const modal = document.createElement("div");

        modal.classList.add("certificate-modal");


        modal.innerHTML = `

            <div class="modal-content">

                <button class="modal-close">
                    ×
                </button>

                <img
                    src="${image.src}"
                    alt="${image.alt}"
                >

                <h3>
                    ${title ? title.textContent : ""}
                </h3>

            </div>

        `;


        document.body.appendChild(modal);


        /* ปิด Modal */

        const closeButton =
            modal.querySelector(".modal-close");

        closeButton.addEventListener("click", function () {

            modal.remove();

        });


        /* คลิกพื้นที่ด้านนอกเพื่อปิด */

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {

                modal.remove();

            }

        });


        /* กด ESC เพื่อปิด */

        document.addEventListener(
            "keydown",
            function closeModal(event) {

                if (event.key === "Escape") {

                    modal.remove();

                    document.removeEventListener(
                        "keydown",
                        closeModal
                    );

                }

            }
        );

    });

});


/* =====================================================
   4. SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


/* =====================================================
   5. SCROLL REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
    ".section-title, " +
    ".skill-card, " +
    ".project-card, " +
    ".certificate-card, " +
    ".timeline-item, " +
    ".training-card, " +
    ".contact-item"
);


/* เริ่มต้นให้ซ่อนเล็กน้อย */

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

});


/* ตรวจสอบตำแหน่งตอน Scroll */

function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


/* เรียกครั้งแรก */

revealOnScroll();


/* =====================================================
   6. PROJECT BUTTON
===================================================== */

const projectLinks =
    document.querySelectorAll(
        ".project-content > a"
    );

projectLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const href =
            this.getAttribute("href");


        /*
            ถ้ายังเป็น # ให้ป้องกัน
            ไม่ให้เว็บกระโดดไปด้านบน
        */

        if (href === "#") {

            event.preventDefault();

            alert(
                "รายละเอียดโครงงานจะเพิ่มในขั้นตอนถัดไป"
            );

        }

    });

});


/* =====================================================
   7. TRAINING CERTIFICATE
===================================================== */

const trainingLinks = document.querySelectorAll(
    ".training-certificate"
);

trainingLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const imageSrc = this.getAttribute("href");

        if (!imageSrc) return;


        /* สร้าง Popup */

        const modal = document.createElement("div");

        modal.classList.add("certificate-modal");

        modal.innerHTML = `

            <div class="modal-content">

                <button class="modal-close">
                    ×
                </button>

                <img
                    src="${imageSrc}"
                    alt="Training Certificate"
                >

            </div>

        `;


        document.body.appendChild(modal);


        /* ปุ่มปิด */

        const closeButton =
            modal.querySelector(".modal-close");

        closeButton.addEventListener("click", function () {

            modal.remove();

        });


        /* คลิกพื้นหลังเพื่อปิด */

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {

                modal.remove();

            }

        });


        /* กด ESC เพื่อปิด */

        function closeWithEscape(event) {

            if (event.key === "Escape") {

                modal.remove();

                document.removeEventListener(
                    "keydown",
                    closeWithEscape
                );

            }

        }

        document.addEventListener(
            "keydown",
            closeWithEscape
        );

    });

});


/* =====================================================
   8. PAGE LOADED
===================================================== */

console.log(
    "Rapeepat Portfolio loaded successfully."
);


/* =====================================================
   8. PAGE LOADED
===================================================== */

console.log(
    "Rapeepat Portfolio loaded successfully."
);


/* =====================================================
   9. DEFAULT CERTIFICATE FILTER
===================================================== */

const allButton = document.querySelector(
    '.certificate-filter button[data-filter="all"]'
);

if (allButton) {

    allButton.classList.add("active");

}


/* =====================================================
   10. PROJECT DETAIL MODAL
===================================================== */

const projectDetails = [

    {
        title: "ถังขยะระบบเซ็นเซอร์ IR",

        image: "images/projects/project-1.jpg",

        description:
            "ถังขยะเปิด–ปิดอัตโนมัติด้วยระบบเซ็นเซอร์ IR " +
            "เมื่อมีวัตถุหรือมือเข้าใกล้ เซ็นเซอร์จะตรวจจับและส่งข้อมูล " +
            "ไปยังบอร์ด Arduino UNO R3 เพื่อควบคุมการเปิด–ปิดของฝาถังขยะ",

        details: `
            <p>
                <strong>รายละเอียดผลงาน</strong>
            </p>

            <p>
                ถังขยะเปิด–ปิดอัตโนมัติด้วยระบบเซ็นเซอร์ IR
                โดยใช้เซ็นเซอร์ตรวจจับวัตถุหรือมือที่เข้ามาใกล้
                จากนั้นส่งข้อมูลไปยังบอร์ด Arduino UNO R3
                เพื่อควบคุมการเปิด–ปิดของฝาถังขยะ
            </p>

            <p>
                <strong>อุปกรณ์และโปรแกรม</strong>
            </p>

            <p>
                Arduino UNO R3, IR Sensor และ Servo Motor
                โดยเขียนโปรแกรมและควบคุมการทำงานผ่าน Arduino IDE
            </p>
             <p>
                <strong>หน่วยงานรับรอง</strong>
            </p>

            <p>
                Bualuang Witthayakhom School
            </p>
        `
    },


    {
        title: "Coding for Better Life By depa",

        image: "images/projects/project-2.jpg",

        description:
            "ผ่านการอบรมเชิงปฏิบัติการโครงการระดับประเทศ " +
            "Coding for Better Life By depa " +
            "และได้ร่วมการแข่งขันพัฒนาแอปพลิเคชันด้วยภาษา Swift และ SwiftUI",

        details: `
            <p>
                <strong>รายละเอียดผลงาน</strong>
            </p>

            <p>
                ผ่านการอบรมเชิงปฏิบัติการโครงการระดับประเทศ
                Coding for Better Life By depa
                และได้ร่วมการแข่งขันพัฒนาแอปพลิเคชัน
                ด้วยภาษา Swift และ SwiftUI
            </p>

            <p>
                การแข่งขันมีผู้เข้าร่วมทั้งหมด
                <strong>32 ทีมทั่วภาคตะวันออกเฉียงเหนือ</strong>
            </p>

            <p>
                วันที่ 28 กันยายน พ.ศ. 2567
                ณ Terminal 21 จังหวัดนครราชสีมา
             <p>
                <strong>หน่วยงานรับรอง</strong>
            </p>

            <p>
                swift Coding Club TH
            </p>
            </p>
        `
    },


    {
        title: "AI Ready ASEAN หลักสูตร AI Learning",

        image: "images/projects/project-3.jpg",

        description:
            "จบหลักสูตรระดับนานาชาติ/ภูมิภาคอาเซียน " +
            "AI Learning Modules ด้าน AI Literacy for Future Skills",

        details: `
            <p>
                <strong>รายละเอียดผลงาน</strong>
            </p>

            <p>
                จบหลักสูตรระดับนานาชาติ/ภูมิภาคอาเซียน
                AI Learning Modules
                สมรรถนะด้าน AI Literacy for Future Skills
            </p>

            <p>
                จำนวน 15 บทเรียน
                มากกว่า 12 ชั่วโมง
            </p>

            <p>
                ได้เรียนรู้และทำความเข้าใจเกี่ยวกับ
                โครงสร้างพื้นฐานของระบบ AI,
                การวิเคราะห์ข้อมูล (Data Concepts),
                จริยธรรมการใช้งานปัญญาประดิษฐ์
                และความปลอดภัยทางไซเบอร์ในยุคดิจิทัล
            </p>

            <p>
                <strong>หน่วยงานรับรอง</strong>
            </p>

            <p>
                Asean Foundation
                ผ่านการสนับสนุนเชิงทุนและเทคโนโลยี
                มาตรฐาน Google.org
            </p>
        `
    }

];


const projectButtons = document.querySelectorAll(
    ".project-detail"
);


projectButtons.forEach((button, index) => {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        const project = projectDetails[index];

        if (!project) return;


        /* สร้าง Popup */

        const modal = document.createElement("div");

        modal.classList.add("project-modal");


        modal.innerHTML = `

            <div class="project-modal-content">

                <button
                    class="project-modal-close"
                    aria-label="ปิด"
                >
                    ×
                </button>

                <img
                    src="${project.image}"
                    alt="${project.title}"
                >

                <h3>
                    ${project.title}
                </h3>

                ${project.details}

            </div>

        `;


        document.body.appendChild(modal);


        /* ปิด Popup */

        const closeButton =
            modal.querySelector(".project-modal-close");


        closeButton.addEventListener("click", function () {

            modal.remove();

        });


        /* คลิกด้านนอก Popup */

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {

                modal.remove();

            }

        });


        /* กด ESC */

        function closeWithEscape(event) {

            if (event.key === "Escape") {

                modal.remove();

                document.removeEventListener(
                    "keydown",
                    closeWithEscape
                );

            }

        }


        document.addEventListener(
            "keydown",
            closeWithEscape
        );

    });

});