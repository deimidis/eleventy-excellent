---
title: fusionados
date: 2023-02-07
excerpt: "Durante años fui creando varios blogs, algunos tuvieron mejor suerte que otros, pero en general mantenía 'un ojo en el cielo' y 'deimidis.me'. Por diversas razones llegó la hora de fusionarlos en uno solo, y para eso elegí 11ty como generador de sitios estáticos."
tags:
    - 11ty
draft: true 
---

### intro

No tengo los blogs actualizados. Encima, en algún momento dejé pasar la renovación de unojoenelcielo.com.ar y alguien lo reservó, asi que ahora es un blog de cualquier cosa. Al principio pensé que me habían hackeado, pero no, solo fui un idiota. Por otro lado, éste dominio tenía otro blog que funcionaba con [ghost](https://ghost.org/), pero en la última actualización hicieron *obligatorio* el uso de MySQL, y en el servidor tengo instalado MariaDB. Y como hay otros sitios alojados usando esa base de datos, pensé que era más complicado hacer funcionar las dos al mismo tiempo que empezar de cero y de paso traer todos los escritos *perdidos* de unojoenelcielo.

Como en los últimos proyectos que empecé, utilicé [11ty](https://www.11ty.dev/) que es un generador de *sitios estáticos*, que básicamente significa que no se necesita una base datos.

### Exportando

El primer paso fue recuperar el contenido que estaba en los dos otros blogs, principalmente unojoenelcielo, del que ya no tenía una copia online. Utilice una herramienta para exportar cada una de las entradas de *WordPress* a un archivo Markdown, que es el formato que utiliza *11ty*.

*Ghost* ya tiene el contenido en Markdown, pero también utilicé un programita para exportar todos los posts (eran bastante menos). Todavía me falta recuperar las imágenes para insertarlas en esta nueva versión.

### 11ty

La semana pasada se lanzó oficialmente la versión 2.0 de Eleventy, y empecé a probarla con dos proyectos de inicio: a) el *oficial* que tiene muchas cosas buenas agregadas (post en borrador, etc.) y cero diseño, con lo que se empieza de cero completamente; y b) un proyecto creado por [Lene Saile](https://www.lenesaile.com/es/) basado en un diseño de Andy Bell que se pueden encontrar [acá](https://buildexcellentwebsit.es/). Después de muchas pruebas e idas y vueltas, me quedé con el segundo proyecto con unas pequeñas modificaciones (cómo construye las fechas, manejo de etiquetas, etc.) y espero ir diferenciándolo aún más en los próximos meses, aunque suelo prometer eso y no lo logro.

Los primeros cambios que realicé son las tipografías. Para los encabezados usé las de un estudio argentino que las disponibiliza gratis, en este caso elegí la [Catallina](https://rostype.com/catallina/). Para los textos largos uso Fira Code. 

### último paso

El último paso será apagar *ghost* y configurar el servidor para que ahora lea los archivos del nuevo directorio. El proceso con 11ty en mi caso es escribir en mi computadora local, después llevarlo a Github o Gitlab, y de ahí copiarlo en el servidor. También podría hacerlo funcionar en Github o Gitlab pages, pero como ya tengo el servidor listo, mejor en el mio. 