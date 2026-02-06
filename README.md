# 💸 CapyPay App - Dashboard Financiero

Documentación técnica y funcional del proyecto **CapyPay**. Aplicación web de billetera digital desarrollada con **Astro** y **Tailwind CSS**.

## 🚀 Estado del Proyecto

 Actualmente se encuentra desarrollada la interfaz principal (Frontend) con lógica de cliente interactiva mediante JavaScript (Vanilla).

### Características Implementadas

#### 1. Panel Principal (Dashboard)

 Diseño optimizado para monitores anchos y dispositivos móviles con mejoras de legibilidad y UX:

 - **BalanceCard**: Visualización de saldo actual con opciones rápidas de recarga y seguridad.
   - ✅ **Protección por PIN**: Para ver información de la tarjeta (número, titular, fecha, CVV), se requiere ingresar el PIN.
   - ✅ **Countdown 30s**: La información de la tarjeta se oculta automáticamente después de 30 segundos.
   - ✅ **Toggle**: Botón para alternar entre vista de saldo e información de tarjeta.
   - ✅ **Saldo destacado**: Texto "Saldo Total" con gradiente llamativo y efecto glow.
   - ✅ **Active Card**: Estado de tarjeta más visible con contenedor destacado y pulso animado.
   - ✅ **Cambio de color según nivel**: La tarjeta cambia su color según el nivel del usuario (Novato, Bachiller, Licenciado, Magíster, Doctorado).
   - ✅ **Botón de información**: Botón para mostrar información de tarjeta con fondo oscuro destacado.

- **QuickPay**: Accesos directos para pagos frecuentes (Ticket, Cantina, Comedor).
  - ✅ Botones centrados con iconos grandes y responsive.
  - ✅ Hover effects con color brand-purple.

- **FinanceChart**: Gráfica de ingresos vs gastos responsive, adaptable usando Flexbox (Velas CSS).
  - ✅ Textos del eje Y más grandes para mejor legibilidad.
  - ✅ Barras más anchas para mejor visualización.
  - ✅ Tooltips con mejor formato y tamaño de texto.

- **Widgets de Actividad**: Feeds de transacciones recientes y valor de la tasa de cambio.
  - ✅ Título "Actividad" más grande (text-base a text-2xl).
  - ✅ **Tasa del día**: Título agrandado (text-xs a text-sm) con mejor visibilidad.

 - **Saludo de Bienvenida**:
   - ✅ Texto agrandado (text-xl a text-2xl en móvil, text-3xl a text-5xl en desktop).
   - ✅ Emoji de mano 👋 animado saludando.
   - ✅ Indicador verde de "Último acceso" más visible.

#### 6. Sistema de Niveles (`/niveles`)

 Nuevo módulo de gamificación con sistema de niveles universitarios inspirado en Cashea:

 - **ModuloNiveles**: Componente completo de sistema de niveles con visualización interactiva.
   - ✅ **5 Niveles Universitarios**:
     - 🌱 **Novato (Cachorro)**: 0 - 500 XP - Registro básico y primera recarga
     - 🎓 **Bachiller**: 501 - 2,000 XP - Descuento 2% en fotocopias
     - 📚 **Licenciado**: 2,001 - 5,000 XP - Acceso a CapyPay Universitario y créditos internos
     - 🎖️ **Magíster**: 5,001 - 10,000 XP - Prioridad en cola del comedor y eventos
     - 👑 **Doctorado**: 10,000+ XP - Cero comisiones y VIP exclusivo
   - ✅ **Tarjeta de Perfil Dinamica**:
     - Muestra nombre real del usuario (del localStorage)
     - Badge del nivel actual con efecto de brillo diagonal
     - Barra de progreso con animación shimmer
     - Indicador de XP ganados hoy con pulso animado
   - ✅ **Línea de Tiempo de Niveles**:
     - Visualización vertical de todos los niveles
     - Niveles bloqueados en escala de grises
     - Nivel actual marcado con glow
     - Niveles completados con check verde
   - ✅ **Beneficios por Nivel**:
     - Cuadrícula visual con beneficios de cada nivel
     - Niveles bloqueados con icono de candado
   - ✅ **Lista de Tareas para ganar XP**:
     - Lista de acciones con recompensa de XP
     - Tareas aleatoriamente completadas para demo
     - Enlace directo desde tarjeta de perfil ("¿Cómo gano XP?")
   - ✅ **Panel de Control (Demo)**:
     - Botones para cambiar nivel sin backend
     - Actualización dinámica sin recargar página
     - Cambio de color en todas las secciones según nivel
   - ✅ **Efectos Visuales Premium**:
     - Brillo diagonal tipo slash cada 5 segundos en tarjeta de perfil
     - Bordes de colores dinámicos según nivel en todas las secciones
     - Glow effects con sombras suaves

 - **NivelBadge**: Componente compacto para dashboard:
   - ✅ Botón con enlace a `/niveles`
   - ✅ Texto "Niveles" simple y limpio

 - **Integración Global**:
   - ✅ XP guardado en localStorage para persistencia entre páginas
   - ✅ Tarjeta de saldo cambia de color según nivel
   - ✅ Colores coordinados entre dashboard y página de niveles

 #### 2. Página de Notificaciones (`/notifications`)

Nueva página completa para gestión de notificaciones:

- ✅ **Lista vertical** de notificaciones con diseño atractivo.
- ✅ **Botón "Limpiar bandeja"** para eliminar todas las notificaciones.
- ✅ **Modal de confirmación** antes de limpiar.
- ✅ **Estado vacío** con diseño elegante y emoji grande cuando no hay notificaciones.
- ✅ **Contador de no leídas** que aparece automáticamente cuando hay pendientes.
- ✅ **Botón "Marcar todas como leídas"** para marcar todo de una vez.
- ✅ Iconos por tipo: 💰 pagos recibidos, 📢 otras notificaciones.
- ✅ Badge de notificaciones no leídas en botón (móvil y sidebar).
- ✅ **Botón regresar** arriba a la izquierda.
- ✅ Diseño consistente con estética de CapyPay (brand-lime, brand-purple).
- ✅ Safe area support para iPhone.

#### 3. Módulo de Transferencias

Widget interactivo (`TransferWidget`) con experiencia de usuario mejorada:

- **Pestañas**: Cambio fluido entre "Mis Contactos" y "Usuarios Externos".
- **Dropdown Personalizado**: Componente de selección desarrollado desde cero para permitir avatares y estilos personalizados en la lista de contactos.
- **Validaciones Visuales**: Estados de foco y selección claros.
- **Protección por PIN**: Transferencias requieren validación con PIN antes de procesarse.

#### 4. Página de Recarga (`/recarga`)

Flujo completo de recarga de saldo dividido en pasos (Wizard):

- **Calculadora de Conversión**: Conversión en tiempo real entre Bolívares (Bs) y Capys (C) con tasa fija referencial.
- **Quick Chips**: Botones de montos predefinidos (5, 10, 20, 50 Capys) disponibles tanto en PC como en Móvil.
- **Teclado Numérico Móvil**: Implementación de teclado virtual en pantalla para dispositivos táctiles, previniendo el teclado nativo del sistema.
- **Interfaz de Pasos**:
  1. Definición del monto.
  2. Selección de método de pago (Pago Móvil / Transferencia) con datos bancarios copiables.
  3. Confirmación y reporte de pago.

#### 5. UI/UX Global

- **BottomNav Responsivo**: Barra de navegación inferior en móvil con 5 opciones:
  - ✅ Inicio (Dashboard)
  - ✅ Historial
  - ✅ QR (centro, flotante)
  - ✅ Contactos
  - ✅ Perfil
  - ✅ **Indicador de página activa**: Verde cuando está activa, gris cuando no.
  - ✅ Iconos más grandes con responsive (h-5 a h-6).

- **Sidebar Responsivo w/ Collapsible**: Barra lateral que se contrae conservando la accesibilidad de los iconos.
- **Sidebar Notificaciones**: Botón ahora es link a /notifications.
  - ✅ Badge rojo con glow para notificaciones no leídas.
  - ✅ Polling automático cada 10 segundos.
  - ✅ Eliminado panel flotante (ahora es página completa).

- **Modal de Cierre de Sesión**:
  - ✅ Modal elegante con icono rojo y efectos glow.
  - ✅ Pregunta de confirmación: "¿Cerrar Sesión?"
  - ✅ Dos botones: "Sí, cerrar sesión" y "No".
  - ✅ Fondo oscuro con blur, animaciones suaves.
  - ✅ Funciona en móvil y desktop.

- **Estilos de Formularios**: Inputs numéricos saneados (sin flechas/spinners nativos) para una estética limpia.
- **Modo Oscuro**: Paleta de colores consistente "Dark Glow" usando variables de Tailwind.
- **Safe Area Support**: Soporte para iPhone con `viewport-fit=cover` y `padding: env(safe-area-inset-*)`.

#### 6. Seguridad

- **Sistema de PIN Global**:
  - ✅ Modal elegante de 6 dígitos para ingresar PIN.
  - ✅ Título: "Ingresa tu PIN"
  - ✅ Subtítulo: "Confirma para autorizar la transacción"
  - ✅ Animaciones suaves de entrada/salida.
  - ✅ Estilo morado/verde consistente con el resto de la app.

- **Servicio PIN**: Nuevo servicio `pinService.verify(pin)` para validación con backend.
  - ✅ Endpoint: `POST /verify-pin` con userId y pin.
  - ✅ Retorna: `{ valid: boolean, success: boolean }`.

- **Uso del PIN**:
  - ✅ Transferencias: Requiere PIN antes de procesar.
  - ✅ Información de tarjeta: Requiere PIN antes de mostrar.
  - ✅ Si PIN incorrecto: Muestra error + vibración (móvil).

## 🛠️ Stack Tecnológico

- **[Astro](https://astro.build/)**: Framework principal para generación de estática y componentes.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilidades para el diseño y sistema de colores.
- **[Vanilla JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: Lógica del lado del cliente para interactividad (Calculadoras, Wizards, Tabs) sin dependencia de frameworks pesados.

## 📂 Estructura del Proyecto

 ```
 /
 ├── public/                 # Archivos estáticos
 ├── src/
 │   ├── components/         # Componentes reutilizables UI
 │   │   ├── BalanceCard.astro       # Tarjeta de saldo con PIN y cambio de color por nivel
 │   │   ├── QuickPay.astro          # Pagos rápidos (3 botones)
 │   │   ├── FinanceChart.astro       # Gráfica financiera
 │   │   ├── TransferWidget.astro     # Widget de transferencias
 │   │   ├── ModuloNiveles.astro       # Sistema de niveles completo
 │   │   ├── NivelBadge.astro         # Badge de navegación a niveles
 │   │   ├── Sidebar.astro           # Barra lateral (desktop)
 │   │   └── BottomNav.astro         # Navegación inferior (móvil)
 │   ├── layouts/            # Plantillas maestras
 │   │   └── MainLayout.astro        # Layout principal con modal PIN
 │   ├── pages/              # Rutas de la aplicación
 │   │   ├── dashboard.astro         # Panel principal
 │   │   ├── niveles.astro           # Página de niveles (NUEVO)
 │   │   ├── notifications.astro      # Página de notificaciones
 │   │   ├── recarga.astro           # Página de Recarga (Wizard)
 │   │   ├── history.astro           # Historial de transacciones
 │   │   ├── settings.astro          # Configuración de cuenta
 │   │   ├── login.astro             # Login
 │   │   └── index.astro             # Landing / Login
 │   ├── services/           # Servicios API
 │   │   └── api.js                  # authService, userService, transactionService, notificationService, pinService
 │   └── styles/             # CSS Global
 │       └── global.css              # Estilos globales y safe-area support
 ├── env.d.ts               # Definiciones de tipos TypeScript globales
 └── package.json
 ```

## 🏃‍♂️ Configuración y Ejecución

Para levantar el entorno de desarrollo localmente:

1. **Instalar dependencias**:

```bash
npm install
```

2. **Iniciar servidor de desarrollo**:

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`.

---

© 2026 CapyPay Team.
