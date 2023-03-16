---
title: Libros digitales (y gnu/linux)
slug: libros-digitales
date: 2023-03-15
excerpt: "Por fin encontré una forma de comprar libros digitales (epub con el DRM de Adobe) y descargarlos en mi gnu/linux sin necesidad de una máquina virtual o simular Windows en gnu/linux (que igual nunca funcionó muy bien)."
tags:
    - drm
    - epub
    - gnu/linux
---

Si, se consiguen libros en canales de Telegram o sitios web. Pero a veces me gusta comprar algunos, ya sea porque no se consiguen de las otras formas o para apoyar de alguna forma al autor. Los libros digitales en el formato Epub suelen estar *protegidos* con el DRM de Adobe para que uno no lo preste, lo pase o lo suba a algún sitio para compartir. Pero en GNU/Linux, el otro problema es que no existían formas *nativas* de descargarlo, hasta ahora había tenido que usar una instalación de Windows, o tener una máquina virtual con windows o seguir intentando con **wine** y sus derivados, para hacer funcionar una versión vieja del *Adobe Digital Editions* [^1].

Hará un par de meses encontré nuevas opciones: [knock](https://web.archive.org/web/20221016154220/https://github.com/BentonEdmondson/knock) y [libgourou](https://github.com/SamuelMarks/libgourou). El primero ya está discontinuado, pero *funcionaba* como una interfaz amigable de libgourou.

Instalé **knock** y lo intenté con un libro comprado en *Google Play*. Justo fue un momento en que la plataforma de Google [funcionaba mal](https://community.adobe.com/t5/digital-editions-discussions/error-e-adept-no-fulfillment-result-for-books-purchased-on-google-play/td-p/13343967/page/3?profile.language=es) con el sistema de Adobe y mucha gente se veía imposibilitada de descargar el libro. Ese primer intento quedo en el limbo, no se descargó, pero el sistema de *Google Play*, que debe ser de los peores, no me deja descargarlo porque dice que ya alcancé el número máximo de dispositivos.

Abandoné el intento por un tiempo, hasta que decidí intentarlo con libgourou. Tuve que leer varias veces la documentación, y finalmente lo logré. Eso si, una vez que se aprende, es fácil, solo hay que manejar mínimamente la consola.

## los pasos

Yo uso Manjaro, una distribución basada en Arch para la que un usuario hizo un paquete fácil de instalar de libgourou, pero si no, hay que seguir las instrucciones de la página de [github](https://github.com/SamuelMarks/libgourou). Una vez instalado el programa tendremos tres comandos principales:

* adept_activate: para activar la computadora como un dispositivo nuevo (hay que tener cuidado porque Adobe no permite muchos dispositivos en una cuenta -*el sistema no deja de ser una mierda peor a cada paso*)
* acsmdownloader: una vez que tenemos el archivo *acsm* que nos da el sitio donde compramos el libro, usamos este comando para descargarlo
* adept_remove: quita el DRM del libro (aunque con el DRM podemos leerlo en nuestro dispositivo, recomiendo hacerlo aunque no se lo prestemos a nadie ni lo compartamos en ningún lugar). Con este comando, en gnu/linux tuve cierto problemas con los archivos con espacios en el nombre, pero se puede cambiar el nombre del archivo y hacerlo.

Lo primero que debemos hacer es registrar nuestra computadora como un dispositivo, para esto necesitamos una cuenta gratuita en Adobe. Y después ejecutar el siguiente comando en la consola:

`adept_activate -u correo.electronico@correo.com -p 'contraseña'`

Después comprar un libro en *Google Play* y elegir la opción de **Exportar**. Se genera un archivo acsm que se descarga a la computadora.

![La opción en Google Play](/assets/images/export_acsm.png)

Abro una consola, me dirijo al directorio donde descargué el archivo acsm y escribo:

`$ acsmdownloader El_Atlético_Invisible_Mundodisco_37-epub.acsm`

Y después de algunos segundos ya tengo el epub en mi equipo. Llega el momento de remover el drm con el siguiente comando:

`$  adept_remove -f El_Atlético_Invisible_Mundodisco_37.epub`

Y listo, epub descargado, sin DRM y sin tener que usar windows o un emulador.

[^1]: Escribí [sobre este mismo tema](/blog/asi-no-da-ganas-de-comprar/) hace 11 años, casi con las mismas quejas.