let contact = document.getElementById('contact');
let contactme = document.getElementById('cont');
let close = document.getElementById('close');


contact.onclick = function () {
    contactme.classList.remove("cont");
}

close.onclick = function () {
    contactme.classList.add("cont");
    
}