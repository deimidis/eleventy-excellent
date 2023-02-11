---
title: "Superar el filtro de algunos sitios"
date: "2010-07-28"
categories: 
  - "mozilla"
  - "software"
tags: 
  - "firefox"
  - "mozilla_hispano"
---

Cuando utilizamos la versión beta (de pruebas) de Mozilla Firefox, muchas veces nos encontramos con el problema que algunos sitios no reconocen al navegador y no nos permiten acceder. En principio este filtrado se hace para navegadores viejos, pero también afecta a los que son más nuevos. En muchos casos el filtro está armando de una forma muy simple, y lo que hace es verificar qué versión del navegador es a partir de la información que envía el programa. Un ejemplo de esto ocurre con el sitio web del Banco Ciudad:

\[caption id="attachment\_579" align="aligncenter" width="300" caption="Pantalla con la que nos recibe el Banco"\][![Share photos on twitter with Twitpic](images/29f0h0.jpg)](http://twitpic.com/29f0h0 "Share photos on twitter with Twitpic")\[/caption\]

La forma de superarlo, en este caso, es fácil. Abrí una nueva pestaña y escribí en la barra de navegación about:config Aparece una advertencia, porque de esta forma se accede a algunos parámetros de configuración importantes de Firefox. Una vez que aceptamos que queremos seguir, pulsando el botón: «¡Seré cuidadoso, lo prometo!», nos encontraremos con una pantalla similar a la siguiente:

\[caption id="attachment\_585" align="aligncenter" width="300" caption="Primera visión de about:config"\][![Primera visión de about:config](images/captura3-300x141.png "about:config")](http://unojoenelcielo.com.ar/wp-content/uploads/2010/07/captura3.png)\[/caption\]

En la caja de búsqueda que aparece en la parte superior (yo la remarqué en rojo pero no aparecerá así) escribí la palabra agent y las opciones se recortarán a sólo tres. Tenés que elegir la que dice general.useragent.extra.firefox y hacer doble clic sobre ella. Se abrirá un diálogo en el que podrás escribir lo siguiente:

\[caption id="attachment\_579" align="aligncenter" width="300" caption="Así deberíamos dejar la casilla"\][![Así deberíamos dejar la casilla](images/captura2-300x149.png "Resultado final")](http://unojoenelcielo.com.ar/wp-content/uploads/2010/07/captura2.png)\[/caption\]

A partir de este momento, el sitio web del Banco Ciudad pensará que estamos usando esa versión de Firefox y podremos realizar las tareas que necesitamos.
