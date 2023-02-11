---
title: "Nuestra huella digital en Internet"
date: "2017-10-02"
categories: 
  - "internet"
  - "software"
tags: 
  - "navegadores"
  - "privacidad"
coverImage: "tor-logo.png"
---

Pasamos casi todo el día en Internet. Sin darnos cuenta, nuestros navegadores van haciéndose únicos, capaces de ser individualizados entre millones de otros. Desde hace un tiempo la **huella digital del navegador** es usada por distintos sitios para identificarnos y de esa forma personalizar los anuncios que recibimos. De ser necesario, esa **huella digital** podría ser usada para comprobar que nuestro navegador fue usado para visitar un sitio determinado.

> La **huella digital de los navegadores** consiste en recolectar datos acerca de la configuración del navegador y el sistema de un usuario cuando este visita un sitio web. Este proceso puede revelar una cantidad sorprendente de información acerca del software y hardware de un usuario, y en última instancia puede ser usado para crear un identificador único del mismo, llamado **huella digital del navegador** \[browser fingerprint en inglés\] (_[Pierre Laperdrix, Walter Rudametkin, Benoit Baudry](https://hal.inria.fr/hal-01285470/file/beauty-sp16.pdf)_)

Estos autores franceses realizaron un estudio a través del sitio web [Am I unique?](https://amiunique.org/) donde ofrecen un test para conocer la huella digital de nuestro navegador a partir de la información ofrecida por los encabezados HTTP, el plugin de Flash, código JavaScript y algunas de las últimas capacidades del lenguaje HTML5. Desde noviembre del 2014 hasta marzo del 2016 obtuvieron 118.934 _huellas digitales_ de navegadores.

El riesgo de este poder de identificación es la pérdida de nuestra privacidad, ya que los sitios web que utilizan estas técnicas pueden conocer muchos datos sobre nuestros equipos lo que ayuda a crear un perfil nuestro para sus anuncios. En el caso de los teléfonos móviles se comparte hasta el modelo del dispositivo y la versión del sistema operativo. Además de la posibilidad de que esta información sea después vendida a otros sitios webs o, en el peor de los casos, que la información pueda ser usada en nuestra contra por gobiernos.

¿Y por qué los navegadores brindan esta información? Principalmente porque esa información _bien usada_ puede ser útil para brindarnos una mejor experiencia. Claro que la definición de _buen uso_ es demasiado relativa. Por ejemplo, la comunicación entre el navegador y el servidor siempre lleva incluida una identificación de cuál es el navegador que está requiriendo la página (llamada _user-agent_ en inglés). Por ejemplo, en mi caso el user agent de mi navegador es: **Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:52.0) Gecko/20100101 Firefox/52.0**.

El servidor utiliza este dato para enviarme la información en un formato que mi navegador pueda entender.

## Diferentes técnicas, los mismos resultados

_"Am I unique?"_ no es el único sitio para verificar nuestra huella digital. [Panopticlick](https://panopticlick.eff.org/) de la _Electronic Frontier Foundation_ es otro buen sitio para poder ver la información que brindamos a los sitios web que quieran utilizarla. También está [Browserprint.info](https://browserprint.info/), un proyecto educativo alojado en la Universidad de Adelaida, Australia.

Todos estos sitios nos ayudan a ver qué tan único es nuestro navegador, sabiendo que en este caso estar fuera de la masa es lo menos conveniente.

## Limando las "yemas de los dedos" de nuestro navegador

Algunas de las informaciones que nuestro navegador envía pueden ser cambiadas para alterar los resultados. La mayoría de ellas se basan en complementos que instalamos en el navegador.

Por ejemplo, el _user agent_ que mostré anteriormente no es el real de mi máquina, pero si es el que detectan tanto _Am I unique?_ como _Panopticlick_. Yo utilizo GNU/Linux y no Windows. En el caso de _Browserprint.info_ utilizan tècnicas de _machine learning_ para ir _educando_ el sistema para detectar los engaños. En mi caso, si bien muestra el mismo _user agent_ después dice que el sistema operativo desde el que estoy accediendo es un GNU/Linux y no un windows.

El [navegador TOR](https://www.torproject.org) incluye algunas reglas predeterminadas para _crear una huella digital_ falsa. Como está basado en **Firefox** y ambas organizaciones están trabajando cada vez más en conjunto, se agregaron algunas configuraciones para adoptar algunas de estas medidas de forma más fácil. En **Firefox** hay que ingresar a _about:config_ para cambiarla, siguiendo estos pasos:

1. En la barra de navegación, hay que borrar la _url_ y escribir _about:config_
2. Hay que aceptar que uno se hace responsable de lo que está por hacer
3. En la caja de búsqueda escribir: _privacy.resistFingerprinting_
4. Aparecerá una línea que en la parte final dice: _false_
5. Hacemos doble clic sobre la palabra _false_ y se convertirá en _true_

Una vez que hayamos seguido estos pasos, **Firefox** realizará cambios en la configuración interna que _mentirán_ sobre algunas de las características de **Firefox** y de nuestro sistema operativo. Como ya dije, esto no quiere decir que engañe a todos los sitios webs, pero al menos para algunos casos resultará suficiente.

A simple vista no vamos a notar muchos cambios, salvo que visitemos alguno de los sitios mencionados para ver nuestra nueva _huella digital_. Pero hay uno que se hace evidente. Parte de la _huella digital_ es la resolución de nuestra pantalla. La veremos aparecer en cada uno de los resúmenes. Al adoptar esta opción las ventanas de nuestro navegador tendrán un tamaño estándar, no el tamaño total de nuestra pantalla (podemos ampliarla a mano posteriormente).

## Y si queremos ir más lejos

Para pasar desapercibido, lo mejor es estar en medio de la masa, así que lo más recomendable es navegar en una máquina virtual con algún sistema operativo _pelado_, con la menor cantidad de modificaciones que puedan individualizarnos. Muchos recomiendan tener preparado para esto una máquina virtual en la que podamos volver a la situación inicial, y un navegador con la cantidad mínima de complementos instalados.

Otra buena opción es usar [Tails](https://tails.boum.org/) para hacer navegar privadamente. **Tails** es una distribución de GNU/Linux que funciona desde un dispositivo USB y que arranca como nueva cada vez que la encendemos. Además utiliza la red TOR para anonimizar nuestra navegación. [Escribí sobre **Tails** en Tuxinfo](https://infosertec.com.ar/2017/09/29/tuxinfo-tails-una-distribucion-para-esconder-nuestros-rastros-digitales/).

Eso si, como puede verse en la captura de pantalla que tomé en **Tails**, _browserprint.info_ detecta que estamos accediendo con un GNU/Linux. Extrañamente no detecta que es un navegador TOR, pero si que estamos navegando por la red de TOR, lo que nos aleja un poco del promedio.

![La información que detecta Browserprint.info en Tails](images/gyuDTnW.png)

## Para seguir leyendo

Si querés saber más sobre estos temas, dejo el enlace al artículo de investigación de los autores de _[Am I Unique?](https://hal.inria.fr/hal-01285470/file/beauty-sp16.pdf)_ que cuenta sus resultados y la forma en que desarrollaron la prueba. En este [otro enlace](https://bugzilla.mozilla.org/show_bug.cgi?id=1333933) se puede leer el _bug_ en el que se agregó esta opción a _about:config_ en **Firefox**. Contiene mucha información por parte de los desarrolladores de **Tor** sobre la decisiones tomadas. Además el autor del sitio [browserprint.info](https://browserprint.info) publica mucha información sobre los distintos sistemas de _browser fingerprint_ y las medidas que pueden tomarse.
