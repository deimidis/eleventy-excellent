---
title: "Modificar cómo nuestro navegador muestra una página"
date: "2017-06-12"
categories: 
  - "comunidad"
  - "firefox-2"
  - "mozilla"
  - "software"
tags: 
  - "firefox"
  - "internet-2"
  - "modificaciones"
coverImage: "userConten-01.png"
---

A veces tenemos la necesidad de cambiar cómo se muestra una página web para facilitarnos la vida. Puede ser el tamaño de tipografía que no nos conviene, el color de algunos elementos de la página o las imágenes. Para eso tenemos la posibilidad de [usar algunos complementos](https://addons.mozilla.org/en-US/firefox/addon/stylish/) o crear un archivo de Firefox que nos permitirá modificar el CSS de sitios.

En este caso yo necesitaba cambiar la forma en que se mostraba una tipografía, porque se me hacía casi imposible verla, y de esa tipografía dependía gran parte de mi trabajo. Así que hice lo siguiente:

1 - Con el inspector de Firefox (Ctrl+May+C) busqué formas en las cuales mejorar el sitio para que se vea mejor. En este caso específico, la regla de CSS que me molestaba era el _peso_ de la tipografía, que estaba establecido en 200.

\[caption id="attachment\_1348" align="aligncenter" width="211"\][![El inspector en su magnitud](images/userConten-01.png)](http://unojoenelcielo.com.ar/wp-content/uploads/2017/06/userConten-01.png) La cadena nefasta\[/caption\]

2 - Después cree el archivo **userContent.css** en la carpeta del perfil del usuario en Firefox. Esta carpeta se encuentra en diferentes lugares según el sistema operativo. En este [enlace de la ayuda de Firefox](https://support.mozilla.org/es/kb/perfiles-el-lugar-donde-firefox-almacena-tus-contr) pueden ver dónde está ubicado en su caso.

3 - Dentro de la carpeta del perfil, hice una nueva carpeta llamada **chrome** (el nombre de esta carpeta se había pensado muchos años antes de la existencia del navegador de Google, no es una copia :P).

4 - En esa carpeta deben crear el archivo con el nombre `userContent.css`. Como su nombre lo indica, dentro pondremos las reglas de css que querramos. Pueden afectar a todas las páginas web o a algunas específicas.

5 - Abrimos el archivo con un editor de textos (en Gnu/Linux puede ser el gedit, geany o el que venga con su gestor de ventanas). Cuanto más simple sea el editor, mejor.

6 - Para que los cambios solo afecten el sitio web que queremos, tenemos que indicarle cuál es el dominio al que queremos modificar con la siguiente declaración `@-moz-document domain(nombre_del_dominio)`, por ejemplo, si queremos modificar algo de google, debemos escribir `@-moz-document domain(google.com)`

7 - Agregamos todas las reglas de css que querramos, añadiendo **!important** para que tengan más relevancia que las reglas del sitio web.

8 - Guardamos el archivo, reiniciamos Firefox, y ya se estarán ejecutando.

Para agregar un ejemplo concreto, supongamos que quisiéramos agregarle un _hermoso_ borde rojo al logo de Google en la página principal del buscador. En ese caso podríamos agregar el siguiente código dentro de `userContent.css`:

`@-moz-document domain(google.com.ar){ div#hplogo { border: 3px red solid !important; } }`

Y cuando entráramos a google.com.ar veríamos lo siguiente:

\[caption id="attachment\_1355" align="aligncenter" width="300"\][![Hemoso agregado al diseño de Google](images/Screenshot-2017-6-11-Google-300x183.png)](http://unojoenelcielo.com.ar/wp-content/uploads/2017/06/Screenshot-2017-6-11-Google.png) Hemoso agregado al diseño de Google\[/caption\]

Espero que les sirva, como arregló mi relación con el sitio web de mi trabajo.
