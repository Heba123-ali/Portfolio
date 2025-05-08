function scrollTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

let heroInfo = document.querySelector('.info');

const dataInfo = {
    addres: " New York, USA00",
    phone: "+1 234 567 89 00",
    whattsapp: "+1 234 567 89 00",
    email: "0v9oD@example.com",
}
heroInfo.innerHTML = `
 <li><i class="bx bx-map"></i> ${dataInfo.addres}</li>
<li><i class="bx bx-phone"></i> ${dataInfo.phone}</li>
<li><i class="bx bxl-whatsapp"></i> ${dataInfo.whattsapp}</li>
 <li><i class="bx bx-mail-send"></i>${dataInfo.email}</li>
 `


