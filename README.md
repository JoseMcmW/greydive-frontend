# greydive-frontend
Challenge Greydive

Para Realizar este challenge utilice React Vite, axios y tailwind para sus estilos. Para poder utilizarlo de forma local solo deben ejecutar npm instal en el directorio del proyecto, y posterios a eso, en el archivo App.jsx cambiar la axios.defaults.baseURL a http://localhost:3001/.

A continuacion presento las pautas del challenge.:

Challenge greydive
​
Tu misión consiste en desarrollar una aplicación para crear encuestas interactivas similares a
Google Forms. A continuación, se detallan los requisitos clave del desafío:
Objetivo del Desafío: Crear una aplicación utilizando la tecnología de tu preferencia (ya sea en
el ámbito frontend o backend) que pueda leer un archivo JSON proporcionado y generar
interfaces de encuestas únicas para cada ítem en el archivo. Asegúrate de que el diseño y la
estética de la aplicación sean distintos a los de Google Forms, y estás autorizado a utilizar
librerías según consideres necesario para lograrlo.

Requisitos del Proyecto:

● Desarrollar una aplicación que lea el archivo JSON proporcionado y muestre interfaces
de encuestas personalizadas.
● Implementar enviar las respuestas de las encuestas a una base de datos de tu elección.
Asegúrate de que esta base de datos sea de tu propiedad y no compartas el acceso a la
misma.
● Diseñar una ruta adicional en la aplicación para mostrar las respuestas almacenadas en
la base de datos. Al presionar el botón &quot;Enviar/Send&quot; en el formulario de encuesta,
deberá aparecer un mensaje y proporcionar acceso a una nueva ruta/vista con las
respuestas. Además, el usuario podrá actualizar su respuesta.

Puntos Importantes:

● Enviar el link del repositorio en github por el form adjuntado en el mail.
● Si tienes alguna pregunta o duda relacionada con el desafío, comunícate a través del
correo electrónico indicado.
● El deploy de la aplicación puede realizarse en cualquier plataforma (por ejemplo, Vercel,
GitHub Pages, etc.), y no se requerirá acceso a tu base de datos. Cualquier
consideración o suposición clave debe estar documentada en el archivo README.
● El challenge se podrá realizar con cualquier tecnología.
● Tienes 48 hs para realizar el challenge. Por cuestiones de cupo limitado la siguiente
etapa (entrevista 1:1) puede darse o no.
Instrucciones Finales: Una vez hayas completado el desafío, comparte tu solución en GitHub y
asegúrate de incluir un README detallado que explique la tecnología que elegiste, cómo
configurar y ejecutar la aplicación, y cualquier información adicional relevante.
Este desafío es tu oportunidad para demostrar tu creatividad, habilidades de desarrollo y
capacidad para cumplir con los requisitos establecidos. ¡Esperamos ver tu propuesta en acción
y compartir tus logros a través del formulario de envío correspondiente!

Extra: No te limites únicamente a lo solicitado en este documento. Si encuentras opotunidades
de mejora y/o quieres añadir funcionalidades extra serán más que bienvenidas.
—--------------------------------------------------------------------------------------------------

JSON
{
&quot;items&quot;: [
{
&quot;type&quot;: &quot;text&quot;,
&quot;label&quot;: &quot;Nombre completo&quot;,
&quot;name&quot;: &quot;full_name&quot;,
&quot;required&quot;: true
},
{
&quot;type&quot;: &quot;email&quot;,
&quot;label&quot;: &quot;Correo electrónico&quot;,
&quot;name&quot;: &quot;email&quot;,
&quot;required&quot;: true
},
{
&quot;type&quot;: &quot;date&quot;,
&quot;label&quot;: &quot;Fecha de nacimiento&quot;,
&quot;name&quot;: &quot;birth_date&quot;,
&quot;required&quot;: true
},
{
&quot;type&quot;: &quot;select&quot;,
&quot;label&quot;: &quot;¿Cuál es tu país de origen?&quot;,
&quot;name&quot;: &quot;country_of_origin&quot;,
&quot;options&quot;: [
{
&quot;label&quot;: &quot;Argentina&quot;,
&quot;value&quot;: &quot;argentina&quot;
},
{
&quot;label&quot;: &quot;Brasil&quot;,
&quot;value&quot;: &quot;brasil&quot;
},
{
&quot;label&quot;: &quot;Chile&quot;,
&quot;value&quot;: &quot;chile&quot;

},
{
&quot;label&quot;: &quot;Colombia&quot;,
&quot;value&quot;: &quot;colombia&quot;
},
{
&quot;label&quot;: &quot;México&quot;,
&quot;value&quot;: &quot;mexico&quot;
},
{
&quot;label&quot;: &quot;Perú&quot;,
&quot;value&quot;: &quot;peru&quot;
},
{
&quot;label&quot;: &quot;Uruguay&quot;,
&quot;value&quot;: &quot;uruguay&quot;
},
{
&quot;label&quot;: &quot;Venezuela&quot;,
&quot;value&quot;: &quot;venezuela&quot;
}
],
&quot;required&quot;: true
},
{
&quot;type&quot;: &quot;checkbox&quot;,
&quot;label&quot;: &quot;¿Acepta los términos y condiciones?&quot;,
&quot;name&quot;: &quot;terms_and_conditions&quot;,
&quot;required&quot;: true
},
{
&quot;type&quot;: &quot;submit&quot;,
&quot;label&quot;: &quot;Enviar&quot;
}
]
}
