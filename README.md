# CRUD con React.js + Node.js

Una aplicación CRUD (Create, Read, Update, Delete) moderna y eficiente construida con React.js en el frontend y Node.js en el backend, conectada a una base de datos MySQL.

## 📁 Estructura del Proyecto

```
crud3/
├── backend/           # Backend en Node.js
│   ├── server.js     # Servidor Express
│   ├── .env          # Variables de entorno
│   └── database.sql  # Esquema de la base de datos
└── frontend/         # Frontend en React
    ├── src/
    │   ├── App.jsx   # Componente principal
    │   ├── App.css   # Estilos de la aplicación
    │   └── main.jsx  # Punto de entrada
    ├── public/       # Archivos estáticos
    └── index.html    # HTML principal
```

## Características

- Interfaz moderna y responsive
- Operaciones CRUD completas
- Actualizaciones en tiempo real
- Diseño limpio y minimalista
- Conexión segura a base de datos
- Rendimiento optimizado

## Tecnologías Utilizadas

### Frontend
- React.js
- Vite (como build tool)
- CSS moderno
- Fetch API para peticiones HTTP

### Backend
- Node.js
- Express.js
- MySQL2
- CORS habilitado
- Dotenv para variables de entorno

## Requisitos Previos

- Node.js (versión 14 o superior)
- MySQL
- npm o yarn

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Cristobal-Figueroa/node.git
   cd node
   ```

2. **Instalar dependencias del backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configurar variables de entorno del backend**
   - Crear archivo `.env` en la carpeta `backend`
   - Agregar las siguientes variables:
     ```
     DB_HOST=tu_host
     DB_USER=tu_usuario
     DB_PASSWORD=tu_contraseña
     DB_NAME=tu_base_de_datos
     PORT=5000     # El servidor usará este puerto, o 3000 por defecto si no se especifica
     ```

4. **Instalar dependencias del frontend**
   ```bash
   cd ../frontend
   npm install
   ```

## Ejecución

1. **Iniciar el backend**
   ```bash
   cd backend
   node server.js
   ```
   El servidor estará corriendo en `http://localhost:5000` (o en el puerto especificado en el archivo .env)

2. **Iniciar el frontend**
   ```bash
   cd frontend
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`

## Uso

1. **Crear un nuevo item**
   - Ingresa el nombre en el campo "Nombre"
   - Ingresa la descripción en el campo "Descripción"
   - Haz clic en "Crear"

2. **Ver items**
   - Los items se muestran automáticamente en la página principal
   - Si no hay items, verás el mensaje "No hay items para mostrar"

3. **Actualizar un item**
   - Haz clic en el botón "Actualizar" del item que desees modificar
   - Ingresa el nuevo nombre y/o descripción en los campos correspondientes
   - Confirma los cambios

4. **Eliminar un item**
   - Haz clic en el botón "Eliminar" del item que desees borrar
   - El item se eliminará inmediatamente

## Seguridad

- La aplicación utiliza variables de entorno para proteger las credenciales de la base de datos
- CORS está configurado para permitir solo los orígenes especificados
- Las consultas a la base de datos están parametrizadas para prevenir inyección SQL

## Contribuir

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Autor

Cristóbal Figueroa

## Contacto

Si tienes preguntas sobre este proyecto, por favor abre un issue en el repositorio.
