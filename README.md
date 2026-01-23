# 💸 CapyPay App - Dashboard Financiero

Documentación técnica y funcional del proyecto **CapyPay**. Aplicación web de billetera digital desarrollada con **Astro** y **Tailwind CSS**.

## 🚀 Estado del Proyecto

Actualmente se encuentra desarrollada la interfaz principal (Frontend) con lógica de cliente interactiva mediante JavaScript (Vanilla).

### Características Implementadas

#### 1. Panel Principal (Dashboard)

Diseño de 3 columnas optimizado para monitores anchos y dispositivos móviles:

- **BalanceCard**: Visualización de saldo actual con opciones rápidas de recarga y seguridad.
- **QuickPay**: Accesos directos para pagos frecuentes (Ticket, Cantina, Comedor).
- **FinanceChart**: Gráfica de ingresos vs gastos responsive, adaptable usando Flexbox (Velas CSS).
- **Widgets de Actividad**: Feeds de transacciones recientes y valor de la tasa de cambio.

#### 2. Módulo de Transferencias

Widget interactivo (`TransferWidget`) con experiencia de usuario mejorada:

- **Pestañas**: Cambio fluido entre "Mis Contactos" y "Usuarios Externos".
- **Dropdown Personalizado**: Componente de selección desarrollado desde cero para permitir avatares y estilos personalizados en la lista de contactos.
- **Validaciones Visuales**: Estados de foco y selección claros.

#### 3. Página de Recarga (`/recarga`)

Flujo completo de recarga de saldo dividido en pasos (Wizard):

- **Calculadora de Conversión**: Conversión tiempo real entre Bolívares (Bs) y Capys (C) con tasa fija referencial.
- **Quick Chips**: Botones de montos predefinidos (5, 10, 20, 50 Capys) disponibles tanto en PC como en Móvil.
- **Teclado Numérico Móvil**: Implementación de teclado virtual en pantalla para dispositivos táctiles, previniendo el teclado nativo del sistema.
- **Interfaz de Pasos**:
  1. Definición del monto.
  2. Selección de método de pago (Pago Móvil / Transferencia) con datos bancarios copiables.
  3. Confirmación y reporte de pago.

#### 4. UI/UX Global

- **Sidebar Responsivo w/ Collapsible**: Barra lateral que se contrae conservando la accesibilidad de los iconos.
- **Estilos de Formularios**: Inputs numéricos saneados (sin flechas/spinners nativos) para una estética limpia.
- **Modo Oscuro**: Paleta de colores consistente "Dark Glow" usando variables de Tailwind.

## 🛠️ Stack Tecnológico

- **[Astro](https://astro.build/)**: Framework principal para generación de estática y componentes.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilidades para el diseño y sistema de colores.
- **Vanilla JavaScript**: Lógica del lado del cliente para interactividad (Calculadoras, Wizards, Tabs) sin dependencia de frameworks pesados.

## 📂 Estructura del Proyecto

```text
/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes reutilizables UI
│   │   ├── BalanceCard.astro
│   │   ├── FinanceChart.astro
│   │   ├── Sidebar.astro
│   │   ├── TransferWidget.astro
│   │   └── ...
│   ├── layouts/            # Plantillas maestras (MainLayout)
│   ├── pages/              # Rutas de la aplicación
│   │   ├── dashboard.astro # Panel principal
│   │   ├── recarga.astro   # Página de Recarga (Wizard)
│   │   ├── index.astro     # Landing / Login
│   │   └── ...
│   └── styles/             # CSS Global (overrides)
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
