const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        // const url = a.href;
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to route: ${route}`);
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }
    let currentPageElement = null;
    switch (route) {
      case "/":
        currentPageElement = document.createElement("h1");
        currentPageElement.textContent = "Menu";
        break;
      case "/order":
        currentPageElement = document.createElement("h1");
        currentPageElement.textContent = "Order";
        break;
      default:
        if (route.startsWith("/product-")) {
          currentPageElement = document.createElement("h1");
          currentPageElement.textContent = "Product Details";
          const paramId = route.substring(route.lastIndexOf("-"));
          currentPageElement.dataset.id = paramId;
        }
    }
    if (currentPageElement) {
      const mainElement = document.querySelector("main");
      mainElement.innerHTML = "";
      mainElement.appendChild(currentPageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
