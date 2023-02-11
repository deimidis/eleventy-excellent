---
title: "Navegar con discreción (o de como evitar a los rastreadores)"
date: "2018-01-28"
categories: 
  - "internet"
  - "mozilla"
  - "software"
tags: 
  - "navegadores"
  - "privacidad"
coverImage: "lanacion_trackers.png"
---

El 28 de enero se celebra mundialmente el Día de la privacidad de datos. Hasta hace algunos años poco pensábamos sobre quienes tenían y usaban nuestra información, porque obtener datos sobre nosotros y compartirlos no era fácil. Pero desde que la Web, Internet y las aplicaciones entraron en nuestras vidas, resulta cada vez más difícil saber cuándo una empresa o entidad está obteniendo y guardando información sobre nosotros, lo que queremos y qué nos está pasando.

Mientras navegamos la web o usamos nuestros teléfonos generamos información: cada uno de nuestros clics, toque en la pantalla y gesto de nuestros dedos queda registrado y es enviado a quienes puedan estudiarlos y obtener información precisa para que compremos lo que tienen para ofrecernos. Y las bases de datos no olvidan ni uno de nuestros movimientos. Muchos años después de que hayamos rechazado el aviso de zapatillas violetas que apareció en nuestra pantalla, ese dato seguirá configurando el mapa de nuestros gustos.

Quienes están a favor dicen que esto permite que los anuncios que recibamos en la web sean más certeros. Si nos estudian lo suficiente, pueden conocer nuestros gustos, qué estamos buscando y ofrecernos algo que seguramente será más probable que compremos que si nos muestran un anuncio genérico. Y si pensamos que **la publicidad suele ser la fuente de ingresos de la web**, entendemos rápidamente por qué están tan interesados en vigilar cada uno de nuestros movimientos.

Cuantos más datos se tengan de nosotros, mejores perfiles pueden construirse. Por eso unas pocas compañías despliegan sus tentáculos en la red para capturar todo lo que generamos. Al entrar al sitio de [La Nación](https://www.lanacion.com.ar) veremos que no sólo el diario registra nuestro recorrido, también lo comparte con otras empresas. En la imagen se puede ver que una vez que visitamos _La Nación_, 15 _scripts_ diferentes controlarán y guardarán todas nuestras interacciones. Algunos de esos _trackers_ son usados para publicidad, otros para comentarios, etc. Si realizamos el mismo proceso en muchos sitios web, veremos una y otra vez a las mismas compañías anotando cada cosa que hagamos.

\[caption id="attachment\_1401" align="aligncenter" width="602"\]![Los rastreadores del sitio de La Nación a través de Ghostery](images/lanacion_trackers.png) Los rastreadores del sitio de La Nación a través de Ghostery\[/caption\]

Todos esos archivos que el sitio suma para registrar nuestro comportamiento deben ser descargados y, por lo tanto, generan que nuestra navegación se haga más lenta.

En los últimos tiempos los navegadores han empezado a incorporar herramientas para frenar a los rastreadores y la publicidad asociada.

### Firefox

Desde la versión [Firefox Quantum](https://www.mozilla.org/es-AR/) lanzada en noviembre del 2017 podemos encontrar una opción que nos permitirá bloquear los rastreadores de terceros (es decir todo lo que no tenga el mismo dominio que el que estamos visitando). Esta diferencia puede verse entre las publicidades que se bloquean en Clarín o La Nación que son generadas desde otros dominios, pero no se bloquean las de YouTube que están generadas dentro del mismo dominio.

Además de dejarnos una vista más limpia de las páginas que visitamos, navegamos más rápido al no tener que descargar mucho contenido que no es necesario para nosotros.

En mi comparación casera obtuve los siguientes resultados por sitio web (medidos con las herramientas para desarrolladores de Firefox):

| Sitio Web | Sin protección | Con protección |
| --- | --- | --- |
| Clarín | 10,35 seg | 2,17s |
| La Nación | 10,72 seg | 1,39s |
| Mercado Libre | 5,04s | 3,22s |

Para habilitar esta opción hay que dirigirse al **Menú** (el ícono de las tres líneas horizontales, arriba a la derecha), hacer clic en **Preferencias**, y una vez que se abre la nueva pestaña hacer en clic en **Privacidad y seguridad**. Ahí deberemos buscar la opción: **Protección de rastreo** y elegir la casilla de **Siempre**.

### Brave

[Brave](https://www.brave.com/) es un navegador creado con el objetivo de mantener la privacidad y educar a los anunciantes, así que incluye herramientas de protección de forma predeterminada. Al igual que Firefox bloquea los rastreadores de terceros, no los de los sitios que estamos visitando. Si hacemos clic en el ícono del león que se encuentra arriba a la derecha, podemos ver los rastreadores que bloqueó y jugar con las configuraciones.

### Edge e Internet Explorer

Las últimas versiones del navegador de Microsoft también incorporan las opción de habilitar la protección contra rastreadores.

### Chrome

El navegador de Google, por el contrario, no agregó esta opción. Han empezado a incorporar un control de la publicidad, que incluye su bloqueo, pero a partir de lo que ellos consideran un mal uso de las publicidades en la Web. Es decir que bloquean las que utilizan malas prácticas, no todas.

### Opera

El navegador noruego tampoco incorpora hasta ahora protección contra los rastreadores.

### Extensiones

Casi todos los navegadores modernos permiten instalar extensiones, pequeños programas que extienden su funcionalidad. Además de los conocidos bloqueadores de publicidades (Ad-Block, U-block, etc.), existen algunas extensiones específicas para rastreadores, como [Ghostery](https://www.ghostery.com/) que además de bloquear los rastreadores nos muestra información sobre los mismos o [Privacy Badger](https://www.eff.org/privacybadger), creada por la [Electronic Frontier Foundation](https://www.eff.org/), reconocida organización que protege nuestros derechos digitales.

Como vemos es relativamente simple conseguir que nuestro navegador nos proteja de los rastreadores, ya sea utilizando las herramientas propias o con alguna extensión. Pruébenlo, no creo que se arrepientan.

_PD: En algunos casos la activación de esta protección genera que algunos sitios web no funcionen completamente. Hasta ahora solo tuve problemas con los que incorporan la plataforma de Facebook para manejar los comentarios. En esos casos no van a poder encontrar el lugar donde dejar sus comentarios, que de igual forma, en la Web que construimos en esta época, es una bendición :D_.
