# ❄️ Ski Resort Finder
Apicación web para buscar *Ski resorts*, mostrando información relevante como descripciones, ubicación y datos generales.
El frontend está desarrollado en **Next.js (React)** y el backend en **.NET** con base de datos **MongoDB**.

---


## 🚀 1. How to Run Locally

### **Frontend (FE) – Next.js**
**Requisitos:**
- Node.js 18+
- npm

- **Ejecutar:**

``` bash
cd BE
dotnet restore
dotnet run
```

El backend estará disponible típicamente en:

    http://localhost:5000

O el puerto que defina tu `launchSettings.json`.

------------------------------------------------------------------------

## 🏗️ 2. Architecture Overview & Trade-offs

La arquitectura se divide en dos partes:

### **Frontend (Next.js)**

-   Híbrido CSR/SSR para mejorar rendimiento.
-   Consumo de la API del backend mediante fetch/axios.
-   Desarrollo rápido gracias a React y estructura modular.

**Trade-offs:** - Next.js requiere configuración adicional para
optimizar SSR. - La gestión de estado y datos puede generar renders
innecesarios si no se organiza bien.

### **Backend (.NET + MongoDB)**

-   Alta performance y escalabilidad gracias a .NET.
-   Esquema flexible con MongoDB.
-   API REST clara, mantenible y fácil de extender.

**Trade-offs:** - Requiere manejo manual de modelos, DTOs y
validaciones. - No incluye autenticación actualmente.

------------------------------------------------------------------------

## 🗂️ 3. Data Origin, Attribution & API Documentation

### **Fuentes de datos**

Los datos provienen de:

-   **MongoDB**, gestionada por la API en .NET.
-   Información recopilada mayormente de **ski.com**, usada para
    descripciones y detalles de los resorts.

### **Documentación de la API con Swagger**

Puedes visualizar y probar los endpoints directamente en Swagger UI.

Una vez ejecutado el backend con `dotnet run`, abre en tu navegador:

    http://localhost:5101/swagger/index.html

Desde allí puedes: - Ver todos los endpoints disponibles. - Probar
llamadas a la API. - Ver esquemas y modelos retornados.

------------------------------------------------------------------------

## ✨ 4. What Would You Improve With More Time

Con más tiempo, agregarías/mejorarías:

-   Mejor organización y optimización del código Next.js.
-   Mejor UI/UX para una experiencia más moderna y visualmente
    atractiva.
-   Más resorts y campos adicionales (clima, amenities, niveles de
    pista, precios, etc.).
-   Loaders mejorados:
    -   Spinners más detallados
    -   Skeleton screens para cargas más limpias
-   Sistema de autenticación (login).
-   Mejor manejo de errores en frontend y backend.
-   Tests unitarios para asegurar calidad del código.

------------------------------------------------------------------------

