---
title: "Localizando proyectos en Thimble Webmaker"
date: "2012-10-10"
categories: 
  - "educacion"
  - "general"
  - "internet"
  - "mozilla"
  - "software"
tags: 
  - "mozilla"
  - "thimble"
  - "webmaker"
---

[Thimble](https://thimble.webmaker.org/en-US/ "Página web de Thimble, proyecto de Mozilla") es una aplicación del proyecto Webmaker de Mozilla que busca enseñar los rudimentos del HTML mediante simples ejercicios. Cualquiera puede crear nuevos ejercicios, pero ya hay una base realizada por numerosas organizaciones. El problema es que estos ejercicios están en inglés. En algunos caso es necesario tener este material en nuestro idioma para poder usarlo en nuestros eventos. La localización de todo el proyecto está pensada para un futuro cercano, pero mientras tanto podemos aprovechar las propias características de Thimble para ayudar a nuestros estudiantes.

Para los talleres que brindé en mi paso por el Librebus me propuse tener algunos ejercicios traducidos, así que averigüé la forma de hacerlo. El mecanismo es fácil y nos permitirá armar una red de ejercicios en español (ya que cualquiera puede reutilizar los que armé yo y seguir con otros). Los pasos son los siguientes:

## Elegí el proyecto que quieras traducir

Dentro de Thimble hay muchos tipos de ejercicios, desde la enseñanza más básica de HTML a algunos conceptos de CSS y JavaScript. Pensá en el público al que irá dirigido la charla/taller y seleccioná al menos tres ejercicios que cubran un espectro amplio. Abrí el primero de los elegidos, verás que la pantalla se divide en dos paneles: en el de la izquierda tendrás el código HTML con los comentarios y las instrucciones para cumplir con los objetivos del ejercicio. En el de la derecha podrás ver la página como la vería alguien que entre a esa página a través de la Web.

Copiá el contenido del panel izquierdo y pegalo en un editor de texto básico de tu PC. Por editor de texto básico me refiero al más simple que tenga tu sistema operativo (en Windows Notepad, en GNU/Linux [Gedit](http://projects.gnome.org/gedit/ "Sitio web de gedit, editor de textos") o Kedit). No tiene que ser un procesador de textos como LibreOffice. Una de las ventajas del HTML y las páginas Web es que puede ser creado con las herramientas más simples de tu PC.

## Traducción

Comenzá la traducción del texto, no te olvides de traducir los comentarios (lo que está dentro de las etiquetas <!-- y --> -->) que contienen las instrucciones y enseñanzas para tus estudiantes. Tendrás que tener cuidado de no alterar ninguna de las etiquetas del HTML, para que el ejercicio siga funcionando (para esto además tendrás la ayuda del propio Thimble en pasos posteriores). No hagas una traducción literal, salvo de los términos técnicos. Hacele más fácil la vida a tus estudiantes y describí el ejercicio como quede más claro en español, aunque cambies la estructura de la frase.

## Creá un nuevo proyecto en Thimble

Una vez que hayas terminado la traducción, deberás crear un nuevo proyecto en Thimble (por favor, no reemplaces el que usaste de base). En el sitio Web de Thimble tenés que usar la opción «Start from scratch». Se abrirá el editor de Thimble. En el panel izquierdo verás las etiquetas HTML estrictamente necesarias para crear una página Web y en el panel derecho no verás nada. Copiá y pegá el código traducido de tu editor de texto en el panel izquierdo. Verás aparecer el ejercicio en el derecho. Si no se ve como esperabas, revisa el código, seguramente has borrado por error alguna de las etiquetas.

## Publicar el contenido

Solo nos falta el último paso: publicar el ejercicio para que pueda ser usado. En la parte superior derecha de la ventana de Thimble verás el botón que dice Publish. Al hacer clic te preguntará si estás seguro de la publicación. Al dar Ok, se te presentará un enlace al proyecto traducido. Si entrás en este momento al enlace, lo verás sin la posibilidad de editarlo, por lo tanto no te servirá para utilizarlo en el curso. Cuando quieras usarlo, solo tenés que agregar la palabra edit al final de la url. Por ejemplo si la URL que te dio Thimble es:

[https://thimble.webmaker.org/p/tg9](https://thimble.webmaker.org/p/tg9)

tenés que escribir lo siguiente:

[https://thimble.webmaker.org/p/tg9/**edit**](https://thimble.webmaker.org/p/tg9/edit)

Tené en cuenta que deberás anotar estas URLs porque no hay otra forma de encontrarlas en el sistema. Te recomiendo que tengas un archivo de texto donde vayas guardándolas todas. En este etherpad estoy listando los documentos que yo traduje, cualquiera puede agregar los suyos para que no trabajemos doblemente:

[https://etherpad.mozilla.org/proyectosthimble](https://etherpad.mozilla.org/proyectosthimble "Documento recopilatorio de proyectos traducidos")
