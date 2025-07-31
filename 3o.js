// const buttons=document.querySelectorAll(".btn")
// const mnueitm=document.querySelectorAll(".m-itm")
 
// buttons.forEach(button =>{
//  button.addEventListener("click" , () =>{
//  const cat =button.getAttribute("data-category")
    
//  mnueitm.forEach((item)=>{
//     if (cat === "all" || cat === item.getAttribute("data-category")){
//         item.style.display="flex";
//     } else{
//         item.style.display="none";
//     }
   

//  })

//  })
// })


 

//     // 🔹 إزالة الحالة النشطة من كل الأزرار
//     buttons.forEach((btn) => btn.classList.remove("active"));{

//     // 🔹 إضافة كلاس نشط للزر الحالي
//      button.classList.add("active");

//     menuitems.forEach((item) => {
//       const itemCategory = item.getAttribute("data-category");

//       if (category === "all" || category === itemCategory) {
//         item.classList.remove("hide");
//         item.classList.add("show");
//       } else {
//         item.classList.remove("show");
//         item.classList.add("hide");
//       }
//     });
//   }




//--------------------------------------------
// // Select all product images inside .m-itm
// const productItems = document.querySelectorAll(".m-itm img");

// // Popup elements
// const popup = document.getElementById("popup");
// const popupImg = document.getElementById("popup-img");
// const popupTitle = document.getElementById("popup-title");
// const popupPrice = document.getElementById("popup-price");
// const popupDesc = document.getElementById("popup-desc");
// const closeBtn = popup.querySelector(".close");

// // Function to open popup with given info
// function openPopup(imgSrc, title, price, desc) {
//   popupImg.src = imgSrc;
//   popupTitle.textContent = title;
//   popupPrice.textContent = price;
//   popupDesc.textContent = desc;
//   popup.style.display = "flex";
// }

// // Close popup function
// function closePopup() {
//   popup.style.display = "none";
//   popupImg.src = "";
//   popupTitle.textContent = "";
//   popupPrice.textContent = "";
//   popupDesc.textContent = "";
// }

// // Attach click listeners on product images
// productItems.forEach(img => {
//   img.addEventListener("click", () => {
//     const mItem = img.closest(".m-itm");
//     const titleElem = mItem.querySelector("h3");
//     const descElem = mItem.querySelector("p");

//     // Extract text and price (price is inside span in h3)
//     const title = titleElem.textContent.replace(/\d+\$/g, "").trim(); // remove price from title
//     const price = titleElem.querySelector("span").textContent;
//     const desc = descElem.textContent;

//     openPopup(img.src, title, price, desc);
//   });
// });

// // Close popup on clicking close button
// closeBtn.addEventListener("click", closePopup);

// // Close popup if clicking outside popup content
// popup.addEventListener("click", (e) => {
//   if (e.target === popup) {
//     closePopup();
//   }
// });
// function scrollToSection(id) {
//   const section = document.getElementById(id);
//   if (section) {
//     section.scrollIntoView({ behavior: 'smooth' });
//   }
// }


// ========== تصفية الأقسام مع حركة انسيابية ==========
// document.querySelectorAll(".menu-btns .btn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const filter = btn.getAttribute("data-filter");

//     document.querySelectorAll(".m-itm").forEach((item) => {
//       if (filter === "all" || item.classList.contains(filter)) {
//         item.style.display = "flex";
//         setTimeout(() => item.classList.add("fade-in"), 10);
//       } else {
//         item.style.display = "none";
//         item.classList.remove("fade-in");
//       }
//     });

//     // حركة انسيابية للتمرير إلى القائمة
//     const menuSection = document.querySelector("#menu");
//     menuSection.scrollIntoView({ behavior: "smooth" });
//   });
// });

// // ========== النافذة المنبثقة ==========
// // Select all product images inside .m-itm
// const productItems = document.querySelectorAll(".m-itm img");

// // Popup elements
// const popup = document.getElementById("popup");
// const popupImg = document.getElementById("popup-img");
// const popupTitle = document.getElementById("popup-title");
// const popupPrice = document.getElementById("popup-price");
// const popupDesc = document.getElementById("popup-desc");
// const closeBtn = popup.querySelector(".close");

// // Open popup with info
// function openPopup(imgSrc, title, price, desc) {
//   popupImg.src = imgSrc;
//   popupTitle.textContent = title;
//   popupPrice.textContent = price;
//   popupDesc.textContent = desc;
//   popup.style.display = "flex";
// }

// // Close popup
// function closePopup() {
//   popup.style.display = "none";
//   popupImg.src = "";
//   popupTitle.textContent = "";
//   popupPrice.textContent = "";
//   popupDesc.textContent = "";
// }

// // Image click opens popup
// productItems.forEach(img => {
//   img.addEventListener("click", () => {
//     const mItem = img.closest(".m-itm");
//     const titleElem = mItem.querySelector("h3");
//     const descElem = mItem.querySelector("p");

//     const title = titleElem.textContent.replace(/\d+\$/g, "").trim();
//     const price = titleElem.querySelector("span").textContent;
//     const desc = descElem.textContent;

//     openPopup(img.src, title, price, desc);
//   });
// });

// // Close on button click
// closeBtn.addEventListener("click", closePopup);

// // Close if clicking outside popup content
// popup.addEventListener("click", (e) => {
//   if (e.target === popup) {
//     closePopup();
//   }
// });

// function scrollToSection(id) {
//   const section = document.getElementById(id);
//   if (section) {
//     section.scrollIntoView({ behavior: 'smooth' });
//   }
// }


//=============================================

// 🔹 عناصر الفلاتر والقائمة
const buttons = document.querySelectorAll(".btn");
const menuItems = document.querySelectorAll(".m-itm");

// 🔹 التعامل مع الأزرار والتصفية
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    // إزالة كلاس "active" من كل الأزرار
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // تصفية العناصر مع تأثير
    menuItems.forEach(item => {
      const itemCategory = item.getAttribute("data-category");

      if (category === "all" || category === itemCategory) {
        item.style.display = "flex";
        item.style.opacity = 0;
        setTimeout(() => {
          item.style.opacity = 1;
          item.style.transition = "opacity 0.5s ease";
        }, 50);
      } else {
        item.style.opacity = 0;
        setTimeout(() => {
          item.style.display = "none";
        }, 300);
      }
    });
  });
});

// 🔹 عناصر النافذة المنبثقة
const productItems = document.querySelectorAll(".m-itm img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupTitle = document.getElementById("popup-title");
const popupPrice = document.getElementById("popup-price");
const popupDesc = document.getElementById("popup-desc");
const closeBtn = popup.querySelector(".close");

// 🔹 فتح الـ popup
function openPopup(imgSrc, title, price, desc) {
  popupImg.src = imgSrc;
  popupTitle.textContent = title;
  popupPrice.textContent = price;
  popupDesc.textContent = desc;
  popup.style.display = "flex";
  popup.style.opacity = 0;
  setTimeout(() => {
    popup.style.opacity = 1;
    popup.style.transition = "opacity 0.3s ease";
  }, 50);
}

// 🔹 إغلاق الـ popup
function closePopup() {
  popup.style.opacity = 0;
  setTimeout(() => {
    popup.style.display = "none";
    popupImg.src = "";
    popupTitle.textContent = "";
    popupPrice.textContent = "";
    popupDesc.textContent = "";
  }, 300);
}

// 🔹 عند الضغط على صورة المنتج
productItems.forEach(img => {
  img.addEventListener("click", () => {
    const mItem = img.closest(".m-itm");
    const titleElem = mItem.querySelector("h3");
    const descElem = mItem.querySelector("p");
    const price = titleElem.querySelector("span").textContent;
    const title = titleElem.childNodes[0].textContent.trim();
    const desc = descElem.textContent;

    openPopup(img.src, title, price, desc);
  });
});


closeBtn.addEventListener("click", closePopup);


popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    closePopup();
  }
});

// 🔹 إغلاق بالضغط على Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePopup();
  }
});

// 🔹 التمرير السلس إلى أقسام الصفحة
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
