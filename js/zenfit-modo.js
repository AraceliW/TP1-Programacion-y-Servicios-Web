document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("zenfit-toggle-mode");
    const body = document.body;
  
    // Cargar preferencia guardada
    if (localStorage.getItem("zenfit-modo") === "claro") {
      body.classList.add("zenfit-light-mode");
      toggleBtn.textContent = "🌙";
    }
  
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("zenfit-light-mode");
      const esClaro = body.classList.contains("zenfit-light-mode");
  
      toggleBtn.textContent = esClaro ? "🌙" : "☀️";
      localStorage.setItem("zenfit-modo", esClaro ? "claro" : "oscuro");
    });
  });
  
  