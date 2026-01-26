# 🗺️ CapyPay Project Roadmap

This document outlines the current status of the project, pending tasks, and creative ideas for future expansion.

## 🚀 Estado Actual (Current Status)

✅ **Autenticación**: Login y "Registro" integrados con Supabase.
✅ **Dashboard**:

- Saldo en tiempo real.
- Historial de transacciones real (Ingresos/Egresos).
- **Gráfico Financiero**: Muestra estadísticas semanales reales calculadas desde el historial.
  ✅ **Sidebar**:
- Carga dinámica de foto (placeholder), nombre iniciales.
- Lista de CONTACTOS reales traídos de la base de datos.
  ✅ **Transferencias**:
- Widget principal funcional (Modal).
- Validación de saldo y usuario destino (por cédula).
- Procesamiento en backend (Node.js).
  ✅ **Perfil**:
- Página de configuración con datos reales precargados.

### Correcciones Visuales (CSS)
- **Input Autocomplete:** Se forzó el background oscuro (`#0f101f`) y el color de texto blanco para evitar que los navegadores (Chrome) apliquen el estilo blanco por defecto en campos autocompletables.
- **Placeholder:** Se forzó el color gris (`#475569`) para evitar que herede el color blanco del estilo de autocompletado en algunos estados del navegador.

---

## 📋 To-Do (Pendiente Inmediato)

### 1. **QuickTransfer Widget (Dashboard)**

- **Estado**: Actualmente muestra avatares estáticos (Angu, Reptiliano, etc.).
- **Tarea**: Conectar con `userService.getContacts()` para mostrar los contactos frecuentes reales del usuario, igual que el Sidebar.

### 2. **Página de Contactos (`/contacts`)**

- **Estado**: Cards estáticas (Hardcoded).
- **Tarea**:
  - Listar contactos reales usando la API.
  - Hacer funcional el botón "Nuevo Contacto" (Formulario + Endpoint POST).
  - Implementar "Eliminar contacto".

### 3. **Página de Recarga (`/recarga`)**

- **Estado**: UI muy completa (Wizard de 3 pasos) pero falta confirmar la integración final con el botón de "Confirmar".
- **Tarea**: Revisar que el último paso llame a `transactionService.recharge()`.

### 4. **Notificaciones**

- **Estado**: El ícono de campana en el header es decorativo.
- **Tarea**: Crear un sistema simple de alertas (ej: "Recibiste un pago de X") usando una tabla `notifications` en Supabase o Polling simple.

---

## 💡 Ideas & Mejoras (Expansion Pack)

Aquí hay ideas para dar vida a las secciones que actualmente son "placeholders" o no hacen nada.

### 🏛️ Servicios (Cantina, Comedor, TicketBus)

Estas páginas existen pero están vacías. Ideas para funcionalidad:

1.  **🎟️ TicketBus (Transporte)**:
    - **Funcionalidad**: Compra de tickets de transporte.
    - **Idea**: Al comprar, generar un código QR único que el usuario pueda mostrar al conductor. Guardar estos tickets en una tabla `tickets`.

2.  **🍔 Cantina / Comedor**:
    - **Funcionalidad**: Pedidos anticipados.
    - **Idea**: Un menú simple (Lista de productos). El usuario selecciona "Empanada + Malta", paga con Capys, y recibe un "Ticket de Pedido #123" para retirar.

3.  **💳 Sistema de Niveles (Gamificación)**:
    - **Estado**: La barra de nivel en el Sidebar es estática (Nivel 12).
    - **Idea**: Calcular XP basada en el número de transacciones o monto movido.
      - `XP = (Total Transacciones * 10) + (Monto Total / 100)`
      - Desbloquear "Skins" o colores de tarjeta al subir de nivel (ej: Tarjeta Dorada al Nivel 20).

4.  **📱 Pagos QR**:
    - **Idea**: Agregar un botón en el Dashboard para "Mostrar mi QR".
    - Este QR contiene la cédula del usuario en formato JSON.
    - Otro usuario puede usar "Escanear" (cámara) para llenar automáticamente los datos de transferencia.

5.  **🔐 Seguridad**:
    - **Idea**: Agregar PIN de 4 dígitos para confirmar transacciones, aparte de la contraseña.

6.  **📊 Exportar Datos**:
    - **Idea**: Botón en Settings para descargar el historial de transacciones en PDF o CSV.

---

## 🛠️ Deuda Técnica (Tech Debt)

- **Manejo de Errores**: Reemplazar `alert()` y `console.error` con notificaciones tipo "Toast" (bonitas y flotantes) para feedback visual.
- **Middlewares**: Proteger las rutas de Astro (`/dashboard`, etc.) para que si no hay token, redirija a `/login` desde el servidor (no solo cliente).
