## TemTeam: Constructor de equipos de TemTem

TemTeam es un constructor de equipos para el videojuego llamado TemTem, el cual consiste en la formación de un equipo de 6 criaturas que combatan entre sí en batallas 2vs2 por turnos. Pero, ¿qué es TemTem?

Según sus creadores, TemTem es:

> Temtem es una aventura multijugador masiva de colección de criaturas. Busca aventuras en el encantador Archipiélago Aéreo junto a tu equipo de Temtem. Captura todos los Temtem, lucha contra otros entrenadores, personaliza tu casa, únete a la aventura de un amigo o explora el dinámico mundo en línea.

En otras palabras, TemTem es un juego multijugador donde se capturan criaturas al estilo Pokémon, pero con un factor multijugador más activo. Estas criaturas cuentan con 6 estadísticas individuales cada una, puntos base particulares para cada una, dos tipos de puntos extra para cada una de estas estadísticas que afectan al resultado final, cuatro posibles ataques independientes para cada criatura que se eligen de una lista determinada, naturalezas que afectan a estas habilidades y la posibilidad de llevar consigo un objeto que también modifica estas últimas. A su vez, cada TemTem puede contar con 1 o 2 elementos asi como cada ataque tiene un elemento, estos elementos tienen debilidades y eficiencias dependiendo de una tabla de tipos, entre un total de 12 elementos distintos.
Todo lo mencionado anteriormente varía entre cada criatura, y hay un total de 164 TemTems diferentes. Las matemáticas necesarias para crear un equipo de 8 TemTems competitivo, de los cuales en el combate participan 5 a nivel 100, y los factores que se deben tener en cuenta se vuelven complejos en esta magnitud.
Por eso, como jugador activo y experimentado de TemTem y que a su vez participo en el ranking competitivo del mismo, siempre quise facilitar esta tarea de creacion de un equipo.

## API
Para la ejecucion de este proyecto se usara la API oficial de TemTem:
https://temtem-api.mael.tech

## Aclaracion sobre el objetivo del proyecto y uso de los datos
No se pretende crear una wiki del juego sino brindar a los usuarios que participan en rankeds (combates entre jugadores para conseguir puntos y colocarse en la tabla de mejores jugadores) una herramienta para formar de manera mas sencilla y visual sus equipos. Por este motivo se obviara mucha informacion inutil para este objetivo, como donde obtener cada TemTem, su altura o peso, su descripcion dentro del juego, etc. ya que estos al ser datos mas "esteticos" no son de interes para los jugadores competitivos.

## Tamaños de la pagina
Se contemplaran dos tamaños para la disposicion de HTML, uno para tablet y otro para monitor, para telefonos no se tendra en cuenta por el momento ya que esta clase de actividades raramente se realizan desde un dispositivo de tan baja resolucion de pantalla por la cantidad de datos que se deben contemplar, pero podria aplicarse a futuro una disposicion para estos dispositivos mas pequeños.