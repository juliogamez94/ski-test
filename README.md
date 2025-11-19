# ❄️ Ski Resort Finder
Web application to search *Ski resorts*, showing relevant information such as short descriptions, locations and general data.
The frontend is developed with **Nextjs (React)** and the backend with **.NET** with database in **MongoDB**.

---


## 🚀 1. How to Run Locally

### **Frontend (FE) – Next.js**
**requirements:**
- Node.js 18+
- npm

- **Excecute:**

``` bash
cd BE
dotnet restore
dotnet run
```
The backend will be available on this route:

    http://localhost:5101

Or if you want another port you can set it on `launchSettings.json`.

------------------------------------------------------------------------

## 🏗️ 2. Architecture Overview & Trade-offs
The architecture is divided on two parts:

### **Frontend (Next.js)**

-   Hibryd CSR/SSR for a better performance. 
-   Api's consumed from the backend with fetch
-   Fast development thanks to react.

**Trade-offs:** 
- Next.js Require aditional configuration to optimize the SSR

### **Backend (.NET + MongoDB)**

-   Alta performance y escalabilidad gracias a .NET.
-   Esquema flexible con MongoDB.
-   API REST clara, mantenible y fácil de extender.

**Trade-offs:** - Requiere manejo manual de modelos, DTOs y
validaciones. - No incluye autenticación actualmente.

------------------------------------------------------------------------

## 🗂️ 3. Data Origin, Attribution & API Documentation

### **Fuentes de datos**

The data comes from:

-   **MongoDB**, managed by the API built in .NET.
-   Information compiled mostly from **ski.com**,
    used for descriptions and details of the resorts


### **Documentation of the API's with Swagger**

You are able to visualize and try out the endpoints directly in Swagger UI.

Once the backend is executed with `dotnet run`, open in your browser:

    http://localhost:5101/swagger/index.html

From there you can: 
- See all the available Endpoints
- Try out the API Calls
- See Schemas and models returned

------------------------------------------------------------------------

## ✨ 4. What Would You Improve With More Time


-   Better organization and optimization of the code Next.js.
-   Improve the UI/UX for a better and modern experience and more atractive.
-   More resorts and additional fields such as weather, amenities, levels of runs, real prices, etc..
-   Improved Loaders:
    - Spinners more detailed
    - Skeleton screens for cleaner loads
-   Sistem of autentication (login)
-   Improve the management of errors for frontend and backend
-   Unit tests on frontend to ensure the quality of the code 
-   

------------------------------------------------------------------------

