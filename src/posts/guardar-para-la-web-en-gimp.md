---
title: "Guardar para la web en Gimp"
date: "2007-12-26"
categories: 
  - "software"
---

Una de las herramientas que más extrañaba al usar GIMP (tal vez la íºnica) en lugar del Photoshop, era «Guardar para la web». Esta utilidad es sencilla pero primordial cuando se quieren usar imágenes en un sitio web, porque nos permite mejorar la proporción calidad/peso de la imagen.

Desde la versión 2.3 del GIMP (ahora se puede descargar oficialmente la 2.4, ya que la 2.3 era para desarrolladores) existe este plugin disponible en el [sitio oficial](http://registry.gimp.org/plugin?id=8799). Para usarlo en Debian hay que, previamente, instalar la librerí­a de desarrollo de gimp (libgimp2.0-dev -quizás en este punto te diga que además necesita muchas más librerias -dev, que son las librerí­as necesarias para compilar programas) y descargar el archivo [tar.bz2](http://registry.gimp.org/file/gimp-save-for-web-0.28.1.tar.bz2?action=download&id=11157) que se encuentra en la página de descarga del plugin. Una vez descargado, se descomprime, y deben realizarse los pasos básicos de instalación:

Ir al directorio donde lo descomprimiste y escribir en la lí­nea de comandos

`./configure make` y, como root o con sudo, `make install`

Además, como el paquete oficial todaví­a no incluye el idioma español, hice la traducción y le mandé el archivo al autor (supongo que la próxima versión lo incluirá). Mientras tanto, con un par de pasos es posible usarla (aunque sólo lo recomiendo para gente que sepa lo que está haciendo, porque hay que modificar un archivo muy sensible del plugin):

Antes de hacer la compilación anterior, descargá este [archivo (es.po)](http://www.unojoenelcielo.com.ar/wp-content/uploads/2007/12/es.po) y guardalo dentro de la carpeta po en el directorio donde descomprimiste el tar.bz2 . Después, tenés que modificar el archivo configure, y agregarle el «es» en la cadena ALL\_LINGUAS de la lí­nea 6191, que deberí­a quedar así­:

`ALL_LINGUAS="az de es fr ru sk sv zh_TW"`

Después si deberí­as cumplir con los pasos de: `./configure make make install (como root o sudo)`

Cualquier duda o problema, consulten.

Escrito con [Flock](http://www.flock.com/blogged-with-flock "Flock")
