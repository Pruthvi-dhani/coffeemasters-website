// better to wait for this event since even though our script execution is "defered"
// until the browser has finished parsing all the html, the in memory
// structure of dom might not have been completed yet
window.addEventListener("DOMContentLoaded", () => {
  let nav = document.querySelector("nav");
  console.log(nav);
  nav.innerText = `csdcdsc
  csdcsc
  csdcdsc
  scsdcsdcdsc`;
});
