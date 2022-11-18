function initThemeSelector() {
  const themeDefault = document.getElementById("themeDefault")
  const themeLight = document.getElementById("themeLight")
  const themeDark = document.getElementById("themeDark")
  // const themeSelect = document.getElementById("themeSelect");
  const themeStylesheetLink = document.getElementById("themeStylesheetLink");
  const currentTheme = localStorage.getItem("theme") || "default";

  function activateTheme(themeName) {
      themeStylesheetLink.setAttribute("href", `css/themes/${themeName}.css`);
     
  }

  themeDefault.addEventListener("click", () => {
      activateTheme(themeDefault.value);
      localStorage.setItem("theme", themeDefault.value);
  });
  themeLight.addEventListener("click", () => {
    activateTheme(themeLight.value);
    localStorage.setItem("theme", themeLight.value);
  });
  themeDark.addEventListener("click", () => {
    activateTheme(themeDark.value);
    localStorage.setItem("theme", themeDark.value);
});

}

initThemeSelector();


