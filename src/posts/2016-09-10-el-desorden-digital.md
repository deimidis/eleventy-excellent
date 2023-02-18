---
title: El desorden digital
slug: el-desorden-digital
date: 2016-09-10T21:25:40.000Z
date_updated: 2018-08-22T01:05:55.000Z
---

Entré (o quería entrar) a este blog para escribir sobre la última novela de Eduardo Sacheri, «La noche de la usina». Claro que debía loguearme en el sitio, pero por alguna razón no recordaba la contraseña que había puesto. Primero entré por consola al servidor, suponiendo que podía encontrar el usuario y clave en la configuración de [**ghost**](https://www.ghost.org). Pero no, la única forma es *resetear* la contraseña, y eso se hace a través del botón «forgot».

Para que enviara correos había configurado una cuenta de **Gmail**, pero cuando hacía clic en el botón, aparecía un hermoso párrafo en rojo con un error. Como siempre, no leí bien el error, así que supuse que entre el momento en que había configurado **Ghost** y hoy, había cambiado la contraseña de acceso a Gmail (lo hice muchas veces en los últimos tiempos).

Así que fui a **Gmail** e intenté ingresar con otra contraseña. Pero no la había cambiado. Eso sí, tenía un mensaje de **Google** que me decía que una aplicación había intentado usar la cuenta, una aplicación que no tenía los estándares de seguridad de **Gmail** asi que se lo había impedido.

El siguiente paso fue ir a ver como se configuraba el correo en **Ghost**, porque quizas habían cambiado alguna configuración y había una explicación de como hacerlo funcionar en **Gmail**. Dentro de los servicios recomendados por **Ghost** estaba [**Mailgun**](https://mailgun.com) y ahí recordé que yo lo había configurado alguna vez, **¿pero con qué cuenta?**.

Intenté loguearme en **Mailgun** pero sin éxito. Empecé a buscar entre varias cuentas de correo a ver si habia mensajes del servicio, y por suerte encontré uno. La habia usado para otro proyecto de blog con **Ghost** justamente. Cambié las credenciales de Gmail por las de Mailgun y **Ghost** me aviso que esta vez el correo había salido. Pero no llegaba a la cuenta de **Gmail** (y si, me fijé en spam).

Estuve unos minutos pensando y probando hasta que logré loguearme en **Mailgun** y ahi estaba el mail. Lo abrí, pero me encontre con un texto codificado en base64.

Y el mensaje todavía no llegaba a mi casilla.

Busqué y encontré un sitio online que hacía la decodificación de un texto en base64. Seleccioné una parte del mensaje y probé. En el exacto instante en que le di *clic* al botón de convertir, se iluminó la pestaña de Gmail indicándome que un nuevo mensaje había llegado.

Por si acaso, esta vez anoté en un documento todos los servicios de correo que estoy usando. A ver si aprendo a ser más ordenado con los servicios digitales.
