# 💸 CapyPay App - Dashboard Financiero

Hey 👋 Aquí les dejo la documentación de lo que llevamos montado en **CapyPay**. Se esta usando full **Astro** y **Tailwind**, Aun ninguna librerías. 🚀

## 🚧 ¿Qué llevamos hasta ahora?

Hemos estado realizando la Interfaz principal. Ahorita tenemos un **Dashboard de 3 Columnas** bastante fineshyt (Dark Mode con glow de fondo). (Morales pasa los putos colores hijoputa).

### 1. Sidebar (La barra de al lado)
Está fija a la izquierda:
- **Colapsable**: Le das al botoncito y se hace pequeña, escondiendo el texto pero dejando los iconos centrados.
- **Perfil**: Ahí sale el Usuario con su nivel.
- **Contactos**: Lista rápida de los contactos agregados (Angu, Reptiliano, AngelaGozo...).
- **Navegación**: Tiene buscador y un link directo a la página de **Contactos**.

### 2. Dashboard Principal
Lo organize en 3 bloques para que todo quede simetrico:

#### ⬅️ Izquierda (Widgets Clave)
- **BalanceCard**: Muestra la plata. Le metí un botón de "Recargar" y el de "Bloquear" (solo el candado).
- **QuickPay**: Botones rápidos para los apartados Ticket, la Cantina y el Comedor.
- **FinanceChart**: Una gráfica hecha con DIVs y CSS (tipo velas) (voy a matarme), Muestra ingresos vs gastos.

#### ⏺️ Centro (Operaciones)
- **TransferWidget**: Aquí se mueve el dinero. Tienes dos pestañas:
  - *Mis Contactos*: Seleccionas a uno de la lista.
  - *Externo*: Para meter un usuario desconocido que no tengas agregado.
- **ExchangeRateWidget (Tasa del Día)**:Es un widget peqeño que te dice cuánto está el CapyCash en Bolívares (ej. 350 Bs). Se actualiza con la fecha y hora de aquí (formato VE).

#### ➡️ Derecha
- **Activity Feed**: Lista de todo lo que has gastado.

### 3. Página de Contactos (`/contacts`)
Hice una página aparte para ver a toda la gente en cuadritos. Ahí es donde vamos a agregarlos a futuro.

## 🛠️ Stack Tecnológico
- **Astro**: Porque es rápido como nosotros cuando pagan.
- **Tailwind CSS**: Para los estilos (amo las classes)
- **Vanilla JS**: Scripts pequeñitos para la lógica del Sidebar y los Tabs.
 
## 🏃‍♂️ ¿Cómo correr esta vaina?

No es tan complicado:

1. Instalar las dependencias (si no lo has hecho):
```bash
npm install
```

2. Prender el servidor local:
```bash
npm run dev
```

Y listo, abre `localhost:4321` y podras ver la pagina en tiempo real.

---
*angel mamalo z3*



# Info de astro adicional.


# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).