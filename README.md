# SCENTOPIA

Proyecto de ecommerce básico creado para el curso de React de Coderhouse. 
La aplicación ofrece perfumes, accesorios y sets, permite agregar productos al carrito, como así también eliminarlos. También realizar la compra finalizandola con un formulario el cual dará al final un código de compra generado por Firebase. También en Firebase, se van a almacenar esas compras como así también los productos en inventario.

***

## Tecnologías utilizadas

- Vite
- React
- React Router
- Firebase

***

## Funcionalidades

- Ver una lista de productos.
- Agregar productos al carrito de compras.
- Ver el carrito de compras.
- Eliminar productos del carrito de compras como así también vaciarlo.
- Realizar una orden de compra.

***

## Instalación
### Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:

1. Clona el repositorio a tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando npm install para instalar las dependencias.
4. Ejecuta el comando npm run dev para iniciar la aplicación.
5. Abre tu navegador y navega a http://localhost:5179 para ver la aplicación en acción.

***

## Configuración de Firebase
### Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, habilita el proveedor de 3. autenticación de correo electrónico y contraseña.
4. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
5. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
6. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

***

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.