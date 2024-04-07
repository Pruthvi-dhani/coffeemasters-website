// better to wait for this event since even though our script execution is "defered"
// until the browser has finished parsing all the html, the in memory
// structure of dom might not have been completed yet
import Store from "./services/Store.js";
import { loadMenuData } from "./services/Menu.js";
import Router from "./services/Router.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  loadMenuData();
  app.router.init();
});
