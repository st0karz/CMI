const accordionItemHeaders = document.querySelectorAll(".list-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
accordionItemHeader.addEventListener("click", event => {

accordionItemHeader.classList.toggle("active");
const accordionItemBody = accordionItemHeader.nextElementSibling;
if(accordionItemHeader.classList.contains("active")) {
  accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
}
else {
  accordionItemBody.style.maxHeight = 0;
}

});
});