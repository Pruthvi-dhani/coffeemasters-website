import API from "./API";

export async function loadMenuData() {
  app.store.menu = await API.fetchMenu();
}
