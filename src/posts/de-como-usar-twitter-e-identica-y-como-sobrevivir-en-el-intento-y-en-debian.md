---
title: "De cómo usar Twitter e identi.ca y como sobrevivir en el intento (y en debian)"
date: "2009-01-30"
categories: 
  - "software"
  - "twitter"
---

Toca un post geek (o nerd, según el cristal con el que se mire). El trasfondo es el siguiente:

Existe un servicio que se llama [twitter](http://www.twitter.com "Sitio web de Twitter") que integra una categoría llamada «microblogging», es decir, un lugar donde la gente tiene 140 caracteres para expresar algo. La primera idea era contestar a la pregunta «¿qué estás haciendo en este momento?».  Si sólo fuese contestar esa pregunta no sería muy interesante, pero por suerte el uso fue modificando la herramienta. Cuando uno tiene un usuario puede seguir a otros y enterarse de sus actualizaciones. A partir de twitter (propiedad de una compañía) se crearon otros emprendimientos, uno de los cuales usa un programa liberado con una licencia libre, llamado [identi.ca](http://identi.ca "Sitio web de identi.ca"). Hace un tiempo cree mi usuario en identi.ca, pero no lo usaba mucho por dos razones: 1) la mayoría de la gente a la que sigo no tiene cuenta en ese servicio y si en twitter y 2) no me había tomado el trabajo de encontrar un programa que me mostrara las actualizaciones de mis contactos, y no quería hacerlo a través de la página web.

\[caption id="attachment\_257" align="alignleft" width="341" caption="Imagen de gwibber"\]![Imagen de gwibber](images/gwibber.jpg "gwibber")\[/caption\]

Así que sobrevivía con [TwitterFox](https://addons.mozilla.org/es-ES/firefox/addon/5081 "Para instalar TwitterFox") (una extensión para Firefox que muestra las actualizaciones de los contactos y permite responder). Existía una extensión similar para identi.ca ([Identifox](http://bitbucket.org/uncryptic/identifox/ "Sitio web del desarrollo de Identifox")) pero al estar muy basada en TwitterFox no podían usarse al mismo tiempo. Así que empecé a buscar aplicaciones por fuera de Firefox que me permitieran usar los dos servicios al mismo tiempo. La mayoría de las disponibles son aplicaciones que necesitan Adobe Air para funcionar, y esto era más de lo mismo, software no libre. Hasta que encontré [Gwibber](https://launchpad.net/gwibber "Sitio en Launchpad de Gwibber").

Gwibber es un cliente para Gnome de sitios de microblogging o muchos otros servicios o programas con actualizaciones de algún tipo. Permite conectarse a Twitter, identi.ca, Jaiku, cualquier otro servidor del protocolo laconi.ca, RSS, Flickr, Digg y un largo número de etcéteras, y todos se mezclan en una misma línea de tiempo. Se puede configurar para recibir, enviar o buscar mensajes, o sólo para recibir (como lo uso yo).

En ese momento estaba en el trabajo, donde tengo un ubuntu intrepid ibex, así que no fue difícil instalarlo. Pero en mi casa uso Debian testing. Y una herramienta no me sirve si no puedo usarla en las dos máquinas, y me gustan los desafíos, así que empecé a ver cómo compilarlo. Acá dejo las notas por si a otro se le ocurre hacerlo, no es difícil una vez que se sabe dónde buscar :).

**La compilación en Debian testing**

Seguí los pasos del tutorial para ubuntu intrepid. El único problema es con la librería pywebkitgtk. Las versiones de Webkit de Debian y Ubuntu son más viejas que las que necesita la nueva versión de la librería. Por eso la gente de Gwibber armó unos paquetes especiales de pywebkitgtk para Ubuntu Hardy Heron e Intrepid Ibex (razón por la cuál en Ubuntu funcionaba sin problemas). Así que mis primeros intentos fueron utilizar los paquetes creados para Ubuntu en mi debian amd64 (cuánto podía romper mi sistema un paquete que no usa otro programa :)). Probé con el paquete para Hardy, pero pedía una librería que ya fue dejada de lado en Debian Testing (libffi4, debian ya usa la libffi5). Entonces la de Intrepid funciona seguro, me dije. Todos sabemos lo que le pasó a Seguro. Con el paquete para Intrepid había otros errores por paquetes que no existían todavía en Debian testing. Así que estaba en la mitad. Hasta que se me prendió la lamparita y busqué en los archivos de pywebkitgtk y encontré la versión anterior a la actual. Descargué el [archivo comprimido](http://pywebkitgtk.googlecode.com/files/pywebkitgtk-1.0.1.tar.gz "Archivo comprimido de la versión anterior de pywebkitgtk") y realicé los pasos típicos para una compilación:

`# ./configure --prefix=/usr/local #make #sudo make install`

En el tutorial recomendaban usar la opción --prefix=/usr/local así que lo hice. Cuando intentaba iniciar Gwibber me daba un error: no encontraba la librería webkit. «Pero yo la instalé» gritaba ante el monitor. Y volvía a intentarlo, pero no, Gwibber se negaba a encontrar la librería. Por suerte alguien había tenido un error similar con otro programa, y Google lo destacó dentro del océano de la web y me lo mostró. La solución fue, entonces, compilarlo con la opción prefix en /usr en lugar de /usr/local:

Entrar al directorio donde hayan descomprimido el archivo [pywebkitgtk-1.0.1.tar.gz](http://pywebkitgtk.googlecode.com/files/pywebkitgtk-1.0.1.tar.gz)

`#./configure --prefix=/usr #make #sudo make install`

Una vez terminada la compilación, entré al directorio donde había descargado Gwibber y ejecuté ./run nuevamente. Esta vez recibí un nuevo error. Decidí arriesgarme e instalarlo:

`#python setup.py install`

Me faltaba instalar el paquete python-distutils-extra. Una vez que lo hice, se instaló sin problemas, y a partir de ese momento, con ejecutar el comando gwibber todo funciona a la perfección, veo las actualizaciones de mis contactos de twitter e identica en la misma ventana.

**El complemento ideal**

Gwibber lo uso para ver las actualizaciones de otros, para escribir no hay como los comandos para [Ubiquity](https://addons.mozilla.org/es-ES/firefox/addon/9527 "Para instalar Ubiquity"). Rápidos, sin abandonar lo que se está haciendo. Yo uso el comando para [ping.fm](http://ping.fm "Sitio web de ping.fm"), que me permite actualizar todos los servicios al mismo tiempo.

Fin de post geek/nerd
