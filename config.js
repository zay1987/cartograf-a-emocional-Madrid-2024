var config = {
  style: "mapbox://styles/zetate87/cmd3e0dd600ea01s9fue37tj3",

  // leave commented to use Mapbox Standard Style
  accessToken:
    "pk.eyJ1IjoiemV0YXRlODciLCJhIjoiY21kM2RmbmV6MDM0dTJqcW5vd3BwNm5jdyJ9.9Z5KLD5q6SucI8qkB-ZM1w",
  showMarkers: false,
  markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  insetOptions: {
    markerColor: "orange",
  },
  insetPosition: "bottom-right",
  theme: "dark",
  use3dTerrain: true, //set true for enabling 3D maps.
  auto: false,
  title: 'Cartografía emocional del teatro en <i>Madrid</i>',
  subtitle: 'Lo que se siente cuando se apagan las luces',
  //subtitle:  " Madrid tiene muchos teatros, sí. Pero más que eso, tiene muchos recuerdos guardados en ellos. <br> Hay butacas que han escuchado carcajadas, otras que han aguantado llantos contenidos. Algunas todavía conservan el eco de un verso o la tensión de un silencio bien medido.<br> Este mapa además de enseñarte dónde están los teatros, te cuenta qué se ha sentido en ellos. Qué emociones han provocado sus obras, quién se ha estremecido con un monólogo, quién ha salido tarareando o quién se fue pensando. <br> No estás ante una cartelera. Estás ante un mapa de emociones.<br> Cada teatro que visitas aquí dejó algo en quienes lo vivieron: una risa inesperada, un nudo en la garganta, una canción que todavía resuena.<br> No es solo lo que se representó. Es lo que quedó flotando después.<br> Déjate llevar. Hay escenarios que conmueven, otros que descolocan, otros que simplemente te hacen sentir acompañado.<br> Porque en esta historia, lo importante no es lo que pasa en el escenario. Es lo que te pasa a ti mientras lo ves. ", 
  byline: `
    Madrid tiene muchos teatros, sí. Pero más que eso, tiene muchos recuerdos guardados en ellos.<br>
    Hay butacas que han escuchado carcajada, otras que han aguantado llantos contenidos. Algunas todavía conservan el eco de un verso o 
    la tensión de un silencio bien medido.<br>
    Este mapa, además de enseñarte dónde están los teatros, te cuenta qué se ha sentido en ellos. Qué emociones han provocado sus obras, 
    quién se ha estremecido con un monólogo, quién ha salido tarareando o quién se fue pensando durante todo el camino a casa.<br>
    No estás ante una cartelera, estás ante un mapa de emociones. Cada teatro que visitas aquí dejó algo en quienes lo vivieron: 
    una risa inesperada, un nudo en la garganta o una canción que todavía resuena. No es solo lo que se representó. Es lo que quedó flotando después.<br><br>
    Déjate llevar, hay escenarios que conmueven, otros que descolocan, otros que simplemente te hacen sentir acompañado...
    Porque en esta historia, lo importante no es lo que pasa en el escenario, es <b>lo que te pasa a ti mientras lo ves</b>.
    `,
  footer:
    'Creado por Zaira Flores para el curso de especialización de Visualización de Datos de la formación Haz de RTVE <br> DataSet: elaboración propia analizando datos de <a href="https://revistateatros.es/" target="_blank">Revistas Teatros</a> del año 2024 <br> Creado usando <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template. ' ,
  chapters: [
    {
      //id: 'slug-style-id',
      id: "teatro 1",
      alignment: "right",
      hidden: false,
      title: "🎭 Teatro Fernán Gómez. Centro Cultural de la Villa",
      image:
        "https://www.redescena.net/imagenes/contenido/sala/teatro-fernan-gomez.-centro-cultural-de-la-villa.jpg",
      //description: 'Teatro más cercano a Julia',
      description: `
            <div style="font-size: 17px; line-height: 1.5;">
                <p>📍Ubicación: Plaza de Colón, en el corazón de Madrid.</p>
                <p> Poca gente sabe que este teatro se esconde justo debajo de la Plaza de Colón, como un corazón cultural latiendo bajo el suelo madrileño. 
                Se inauguró en 1977, con vocación de centro público para la cultura, pero ha acabado siendo mucho más que eso. 
                De hecho, durante años fue un teatro sin nombre propio, hasta que en 2007 decidieron rendir homenaje a uno de los grandes: Fernando Fernán Gómez, 
                que había pisado todos los escenarios con la misma intensidad con la que discutía en entrevistas.</p>

                <p>Este teatro ha visto de todo, pero si hubiera que elegir una emoción dominante en sus butacas, sería la tristeza. 
                Y no la depresiva, sino la que te confronta con la verdad: Tío Vania de Chéjov, La Regenta, De algún tiempo a esta parte de Max Aub. 
                Todo lo que te recuerda que la memoria duele y que lo personal siempre acaba siendo político.
                Pero también se han escuchado gritos. Yerma, por ejemplo, trajo rabia contenida; Cigarreras, una adaptación coral sobre mujeres obreras, dejó el escenario empapado de furia colectiva. 
                Y El Monte de las Ánimas… bueno, más de uno salió mirando por encima del hombro tras esa función.</p>

                <p>Una curiosidad: en 2019, durante un ciclo sobre exilio y memoria, hubo espectadores que se levantaron para aplaudir antes de que acabara la función. No por entusiasmo, sino por emoción pura: no podían más.
                Aquí las emociones no siempre esperan al aplauso final.</p>

               
                <div style="font-size: 17px; line-height: 1.35;"> 
                 <b> <i>“No me di cuenta de cuándo dejó de ser ayer y empezó a ser nunca.” </i> </b> </br>
                  De algún tiempo a esta parte, Max Aub.  
                </div> 
            </div>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24313012">
                <script src="https://public.flourish.studio/resources/embed.js"></script>
                <noscript><img src="https://public.flourish.studio/visualisation/24313012/thumbnail" width="300%" alt="chart visualization" />
                </noscript></div>
            `,

      location: {
        //center: [-3.6894, 40.425],
        center: [-3.68986, 40.4248],
        //zoom: 17.89,
        zoom: 18,
        pitch: 50,
        bearing: 110,
      },
      mapAnimation: "flyTo",
      //mapAnimation: 'easeTo',
      //mapAnimation: 'jumpTo',
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-name",
          opacity: 1,
          duration: 5000,
        },
      ],
      onChapterExit: [
        // {
        //     layer: 'layer-name',
        //     opacity: 0
        // }
      ],
    },
    {
      id: "teatro 2",
      alignment: "left",
      hidden: false,
      title: ":🎭 Nuevo Teatro Alcalá",
      image:
        "https://madridesteatro.com/wp-content/uploads/2015/01/big_nuevo-teatro-alcala-fachada.jpg",
      //description: 'Teatro Teleport',
      description: `
            <div style="font-size: 17px; line-height: 1.5;">
                <p>📍Ubicación: Calle de Jorge Juan, 62, barrio de Salamanca.</p>
                <p>Este teatro tiene alma de superviviente.</p>
                <p>El <strong>Nuevo Alcal&aacute;</strong> es uno de esos teatros que ha sabido reinventarse sin perder el ritmo. Empez&oacute; en 1927 como <em>Palacio de los Recreos</em>, y desde entonces ha pasado por varias etapas: fue cine, sala de espect&aacute;culos, espacio para musicales&hellip; Incluso en los momentos en los que parec&iacute;a quedar en segundo plano, siempre ha encontrado la forma de volver a levantar el tel&oacute;n.</p>
                <p>Hoy es uno de los grandes escenarios del musical en Madrid. Si hay luces, canciones pegadizas y ni&ntilde;os con ojos como platos a la salida, casi seguro que est&aacute;s aqu&iacute;.</p>
                <p>En este teatro se respira <strong>esperanza</strong>, y no solo porque se programen historias con final feliz. <em>Matilda, el musical</em> , una ni&ntilde;a con poderes que planta cara a los adultos que la subestiman,&nbsp; se convirti&oacute; en un fen&oacute;meno por su mezcla de ternura y fuerza. <em>Del color de la leche</em> tiene otro tono, pero el mismo impulso: el de una joven campesina del siglo XIX que quiere aprender a leer en un mundo que no se lo pone f&aacute;cil. Son historias que empujan hacia adelante.</p>
                <p>Tambi&eacute;n hay espacio para la <strong>risa</strong> inteligente. <em>The Producers</em>, por ejemplo, se burla de todo lo que rodea al propio teatro, con dos productores que intentan montar un musical desastroso y acaban triunfando sin querer. En cada funci&oacute;n hay carcajadas, pero tambi&eacute;n un gui&ntilde;o c&oacute;mplice a quienes est&aacute;n detr&aacute;s del tel&oacute;n.</p>
                <p>Y a veces, el escenario se vuelve <strong>imprevisible</strong>. <em>Casting Lear</em> es una adaptaci&oacute;n libre de <em>Rey Lear</em> donde el reparto cambia cada noche. Lo que ves t&uacute;, no lo ver&aacute; nadie m&aacute;s. Es desconcertante, s&iacute;, pero tambi&eacute;n emocionante.</p>
                <p>Entre musical y musical, hubo espacio para algo m&aacute;s &iacute;ntimo: <em>Hab&iacute;a una vez, mi familia</em>, un viaje nost&aacute;lgico y visual con los <em>Arag&oacute;n</em>. Circo, memoria y humor familiar en estado puro. Una de esas funciones que te hace pensar en los tuyos sin propon&eacute;rtelo.</p>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
                <blockquote>
                <h4>"<em>Una ni&ntilde;a puede cambiarlo todo. Incluso lo que los adultos ya daban por perdido.</em>&rdquo;&nbsp;</h4>
                <p>Matilda, el musical. &nbsp;</p>
                </blockquote>
                <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
            </div>

                <div class="flourish-embed flourish-chart" data-src="visualisation/24313213"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/24313213/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
            `,
      location: {
        center: [-3.67815, 40.42341],
        zoom: 17.89,
        pitch: 50,
        bearing: -210,
        // flyTo additional controls-
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        //speed: 2, // make the flying slow
        //curve: 1, // change the speed at which it zooms out
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    /*{
            id: 'teatro 3',
            alignment: 'left',
            hidden: false,
            title: 'Teatro Alcázar',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQli6s6C1P2Kd96d3NaGQmT6c_nGFIFQgBaQ&s',
            //description: 'Más cercano a Sevilla',
            description: `
                <p>Teatro risas todos los públicos.</p>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24310797">
                    <script src="https://public.flourish.studio/resources/embed.js"></script>
                    <noscript><img src="https://public.flourish.studio/visualisation/24310797/thumbnail" width="100%" alt="chart visualization" />
                    </noscript>
                </div>
            `,
            
            location: {
                //center: [-3.6991, 40.4184],
                center: [-3.6991, 40.4184],
                zoom: 17.16,
                pitch: 30,
                bearing: 12.50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/
    {
      id: "teatro 4",
      alignment: "left",
      hidden: false,
      title: "🎭 Teatro Amaya",
      image:
        "https://estaticos.esmadrid.com/cdn/farfuture/u33CyTLmnzZu8yiUc2Kaf1ypQo9ZH7Ho1s2oT9nKdSs/mtime:1528874458/sites/default/files/recursosturisticos/infoturistica/teatro_amaya.jpg",
      //description: 'Poco visitado',
      description: `
               <div style="font-size: 17px; line-height: 1.5;">
                <p>📍Ubicación: Paseo del General Martínez Campos, 9, barrio de Chamberí</p>
                <p> El Amaya tiene algo especial: no se toma demasiado en serio… y eso es precisamente lo que lo hace funcionar. 
                Es un teatro que apuesta por el humor sin complejos y por espectáculos pensados para pasarlo bien. 
                Aquí no vienes a sufrir: vienes a desconectar, reírte a carcajadas y, si hay suerte, salir con mejor ánimo del que entraste.<br>
                La función que sale mal es un clásico reciente en su cartelera: una comedia en la que todo, literalmente todo, se desmorona en escena. 
                Escenografía incluida. Es una delicia para quien disfruta del caos bien ensayado. <br>
                Monólogos 10, en cambio, cambia cada semana: Agustín Jiménez, David Navarro, Sergio Encinas… Humoristas que ya traen la risa puesta y la reparten con gusto.<br>
                Pero no todo son carcajadas. También hay sitio para lo entrañable. GUAU, el musical es un espectáculo familiar sobre la adopción de mascotas, 
                que mezcla humor con ternura y canciones pegadizas. Un plan ideal si vas con peques… o si necesitas un chute de buen rollo.<br>

                No es el teatro con más mármol ni con la programación más sesuda, pero el Amaya sabe exactamente lo que ofrece: 
                una buena risa compartida y ese puntito de esperanza que a veces cuesta encontrar fuera.
                </p>
                

                <div style="font-size: 17px; line-height: 1.35;"> 
                 <b> <i>“Cuando todo sale mal, lo único que puedes hacer… es seguir actuando.” </i> </b> </br>
                  La función que sale mal.  
                </div> 
            </div>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24313185"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/24313185/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
            `,

      location: {
        //center: [-3.6971, 40.4352],
        center: [-3.69711, 40.4352],
        zoom: 17.89,
        pitch: 40,
        bearing: 20,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    /*{
            id: 'teatro 5',
            alignment: 'right',
            hidden: false,
            title: 'Teatro Arlequín',
            image: 'https://todoestaenmadrid.com/uploads/shop/images/5437/shop_large_1.png',
            //description: 'casi no hemos ido',
            description: `
                <p>Creo que he ido una vez.</p>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24311075">
                    <script src="https://public.flourish.studio/resources/embed.js"></script>
                    <noscript><img src="https://public.flourish.studio/visualisation/24311075/thumbnail" width="100%" alt="chart visualization" />
                    </noscript>
                </div>
            `,
            
            location: {
                //center: [-3.707, 40.4212],
                center: [-3.70833, 40.42106],
                zoom: 17.89,
                pitch: 20,
                bearing: -26
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/
    /*{
            id: 'teatro 6',
            alignment: 'left',
            hidden: false,
            title: 'Teatro Bellas Artes',
            image: 'https://madridesteatro.com/wp-content/uploads/2015/02/Teatro_Bellas_Artes_Madrid_01-1024x712.jpg',
            //description: 'casi no hemos ido',
            description: `
                <p>No sé si he ido.</p>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24311317">
                    <script src="https://public.flourish.studio/resources/embed.js"></script>
                    <noscript><img src="https://public.flourish.studio/visualisation/24311317/thumbnail" width="100%" alt="chart visualization" />
                    </noscript>
                </div>
            `,
            
            location: {
                //center: [-3.6963, 40.4182],
                center: [-3.69640, 40.41822],
                zoom: 17.89,
                pitch: 40,
                bearing: -190
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/
    /*{
            id: 'teatro 7',
            alignment: 'right',
            hidden: false,
            title: 'Teatro Calderón',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Teatro_Calder%C3%B3n_%28Madrid%29_02.jpg/1068px-Teatro_Calder%C3%B3n_%28Madrid%29_02.jpg?20080718173115',
            //description: 'casi no hemos ido',
            description: `
                <p>Teatro más cercano a Julia.</p>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24305965">
                    <script src="https://public.flourish.studio/resources/embed.js"></script>
                    <noscript>
                        <img src="https://public.flourish.studio/visualisation/24305965/thumbnail" width="100%" alt="chart visualization" />
                    </noscript>
                </div>
            `,
            location: {
                //center: [ -3.7035, 40.4141],
                center: [-3.70340, 40.41399],
                zoom: 17.89,
                pitch: 40,
                bearing: -172
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/
    /*{
            id: 'teatro 8',
            alignment: 'fully',
            hidden: false,
            title: 'Teatro Coliseum',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQroaQp13Rh3XI4yd1TcZky2yi9Fmq2gni1Q&s',
            //description: 'casi no hemos ido',
            description: `
                <p>Teatro más cercano a Julia.</p>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24305965">
                    <script src="https://public.flourish.studio/resources/embed.js"></script>
                    <noscript>
                        <img src="https://public.flourish.studio/visualisation/24305965/thumbnail" width="100%" alt="chart visualization" />
                    </noscript>
                </div>
            `,
            location: {
                center: [ -3.7104, 40.4233],
                zoom: 17.89,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/
    {
      id: "teatro 9",
      alignment: "right",
      hidden: false,
      title: "🎭 Teatro Español",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Madrid_-_Teatro_Espa%C3%B1ol.jpg/500px-Madrid_-_Teatro_Espa%C3%B1ol.jpg",
      //description: 'casi no hemos ido',
      description: `
                <div style="font-size: 17px; line-height: 1.5;">
                <p>📍Ubicación: Calle del Príncipe, 25, barrio de Las Letras </p>
                <p> Es el teatro más antiguo de Madrid, en activo desde el siglo XVI, y si sus muros pudieran hablar, habría que sentarse a escucharlos con calma. 
                Aquí han pasado desde Lope y Calderón hasta Lorca, pasando por una lista interminable de autores, actrices, actores y directores que han marcado la 
                historia del teatro en España. </p>

                <p> Este no es un teatro para venir a “ver algo”. Es un teatro al que se viene a <b>sentir</b>. 
                Lo programado en los últimos años lo deja claro: Luces de bohemia escupe rabia en cada verso; Bernice, Solitudes y Forever son un 
                tríptico sobre la pérdida y la soledad; Camino largo de vuelta a casa o Feriantes remueven heridas familiares sin artificios.<br>

                Y sin embargo, también hay esperanza, aunque duela. La lucha por la vida de Baroja o Carmen, nada de nadie son obras que miran hacia
                adelante, aunque sea con los pies llenos de barro. El niño erizo, con títeres, emociona desde la diferencia, y Soñando el Carnaval de 
                los animales deja hueco para la imaginación y el juego.<br>

                Luego están las piezas que sorprenden por fuera y por dentro: El monstruo de los jardines, una reinterpretación mitológica de Calderón
                con asombro incluido; o Alter ego, danza contemporánea sobre identidad y contraste.<br>

                Y, por supuesto, también hay lugar para el humor, aunque sea raro. En El fin, una profesora intenta preparar a su alumnado para
                 el apocalipsis. En Las locuras por el verano, Goldoni sigue funcionando como el mejor enredo de domingo por la tarde.</p>

                <p>El Español no programa para gustar. Programa para agitar.
                </p>
                

                <div style="font-size: 16px; line-height: 1.35;"> 
                 <b> <i>“La tragedia es el arte de mirar la miseria sin cerrar los ojos.” </i> </b> 
                  Luces de bohemia, Ramón María del Valle-Inclán  
                </div>
            </div>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24313167"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/24313167/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
            `,
      location: {
        center: [-3.7075, 40.419],
        zoom: 17.89,
        pitch: 40,
        bearing: -140,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    /*{
            id: 'teatro 10',
            alignment: 'fully',
            hidden: false,
            title: 'Teatro Fígaro',
            image: 'https://madridesteatro.com/wp-content/uploads/2015/02/Teatro-Figaro-001-09-11-2011.jpg',
            //description: 'casi no hemos ido',
            description: `
                <p>Teatro más cercano a Julia.</p>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24305965">
                    <script src="https://public.flourish.studio/resources/embed.js"></script>
                    <noscript>
                        <img src="https://public.flourish.studio/visualisation/24305965/thumbnail" width="100%" alt="chart visualization" />
                    </noscript>
                </div>
            `,
            location: {
                center: [ -3.7029, 40.4139],
                zoom: 17.89,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/
    /*{
            id: 'teatro 11',
            alignment: 'fully',
            hidden: false,
            title: 'Teatro Infanta Isabel',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Teatro_Infanta_Isabel_%28Madrid%29_01.jpg/500px-Teatro_Infanta_Isabel_%28Madrid%29_01.jpg',
            //description: 'casi no hemos ido',
            description: `
                <p>Teatro más cercano a Julia.</p>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24305965">
                    <script src="https://public.flourish.studio/resources/embed.js"></script>
                    <noscript>
                        <img src="https://public.flourish.studio/visualisation/24305965/thumbnail" width="100%" alt="chart visualization" />
                    </noscript>
                </div>
            `,
            location: {
                center: [  -3.699, 40.4205],
                zoom: 17.89,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/
    {
      id: "teatro 12",
      alignment: "left",
      hidden: false,
      title: "🎭 Teatro La Latina",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Teatro_La_Latina_DSCN1132.JPG/500px-Teatro_La_Latina_DSCN1132.JPG",
      //description: 'casi no hemos ido',
      description: `
               <div style="font-size: 17px; line-height: 1.5;">
                <p>📍Ubicación: Plaza de la Cebada, 2, barrio de La Latina</p>
                <p> Pocos teatros representan tan bien el carácter del barrio en el que están como La Latina. Popular, directo, divertido y siempre en movimiento. 
                Desde que abrió sus puertas en 1919, ha sido un lugar para lo cercano: comedias, espectáculos cómicos, musicales, clásicos reinventados y funciones que hacen pensar… sin dejar de entretener.
                Es un teatro que sonríe mucho. El humor está en casa. Apocalípticamente correcto, con Luis Piedrahita, mezcla ironía y existencialismo a base de carcajadas. Efectiviwonder, de El Monaguillo, es puro humor cotidiano con improvisación y chispa. 
                Y Las asambleístas, con Sílvia Abril al frente, le da la vuelta al papel de la mujer en la sociedad… entre risas.</p>

                <p>Pero también hay espacio para lo emocional. En Los chicos del coro, la música transforma la vida de un grupo de niños en un 
                internado: una historia de amor y esperanza que llega sin artificio. 
                Un amor particular explora relaciones inesperadas desde lo romántico y lo irónico, mientras que El tiempo entre costuras 
                atraviesa la tristeza de la pérdida y la guerra a través del viaje de Sira Quiroga. Y luego está Malinche, 
                que sorprende por la propuesta, por el montaje, por lo visual. Nacho Cano firma un musical sobre mestizaje y encuentro entre 
                culturas que no deja indiferente. Puede gustar o no, pero asombro provoca seguro.<br>

                La comedia de los errores es, como su nombre indica, un caos bien calculado donde el desconcierto forma parte del juego. 
                Shakespeare con acento de ahora.</p>

                <p>En definitiva, La Latina no busca grandes tragedias. Prefiere hacerte pensar mientras te ríes. 
                Y que salgas de ahí con esa sensación de que el teatro también puede ser ligero, pero no superficial.
                </p>
                
                <div style="font-size: 17px; line-height: 1.35;"> 
                 <b> <i>“No importa el destino si te ríes durante el trayecto.” </i> </b> 
                  Apocalípticamente correcto  
                </div>
            </div>  

                <div class="flourish-embed flourish-chart" data-src="visualisation/24313156"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/24313156/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
            `,

      location: {
        center: [-3.7095, 40.4113],
        zoom: 17.89,
        pitch: 40,
        bearing: 140,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "teatro 13",
      alignment: "right",
      hidden: false,
      title: "🎭 Teatro Lara",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Teatro_Lara_%28Madrid%29_01.jpg/500px-Teatro_Lara_%28Madrid%29_01.jpg",
      //description: 'casi no hemos ido',
      description: `
               <div style="font-size: 17px; line-height: 1.5;">
                <p>📍Ubicación: Corredera Baja de San Pablo, 15, barrio de Malasaña </p>
                <p> El Lara es de esos teatros que parecen pequeños por fuera, pero que por dentro contienen una ciudad entera. 
                Inaugurado en 1880, con sus butacas rojas, lámparas y palcos originales, mantiene el encanto de la época dorada del teatro 
                madrileño... pero con una cartelera que va a su ritmo, al de ahora. <br>

                Este teatro es puro contraste. Puedes ver una comedia ligera sobre vecinos y risas, y al día siguiente, un monólogo poético 
                sobre el vacío existencial. El enfermo imaginario, La madre que me parió, Con la boca abierta, 
                Desencantadas… aquí la risa se gana con inteligencia, ritmo y muchísima complicidad con el público.</p>

                <p>Pero no todo es comedia. También hay funciones que duelen. Bernarda y Poncia, El tiempo entre costuras, Elizabeth Siddall o 
                Punto y coma hablan de pérdidas, despedidas, exilio, rupturas y silencios con carga. El Lara sabe usar el escenario como espejo
                y no tiene miedo a mostrarnos lo que no siempre queremos ver.<br>

                Después hay piezas que descolocan, como Archipiélago, Entrevista o Ingmar Bergman: Toallet, donde el desconcierto es parte 
                de la experiencia. Y otras que sorprenden por lo que provocan: Más allá del Principito, Jardines o Chelsea Hotel mezclan 
                poesía visual, música y emociones en bruto.<br>

                También hay lugar para el recuerdo y la nostalgia, con propuestas como Lucía, un relato con canciones de Serrat, 
                Los hijos de los 90, Filomena o El barrio, que nos invitan a mirar atrás sin que parezca que nos están sermoneando.</p>

                <p> El Lara tiene una cosa muy difícil de conseguir: no importa lo que veas, siempre sientes que estás en casa.
                Y que al salir, algo de ti se ha quedado dentro.</p>
                
                <div style="font-size: 17px; line-height: 1.35;"> 
                 <b> <i>“Hay despedidas que no se dicen. Se hacen.” </i> </b> <br> 
                  Adiós, Paca  
                </div>
            </div>
               <div class="flourish-embed flourish-chart" data-src="visualisation/24313086"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/24313086/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
            `,
      location: {
        center: [-3.7042, 40.4204],
        zoom: 17.89,
        pitch: 40,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    /*{
            id: 'teatro 14',
            alignment: 'fully',
            hidden: false,
            title: 'Teatro Lope de Vega',
            image: 'https://www.carteleramusicales.es/storage/105/conversions/Itul7HmLkHas7cNWjqwGNNDN3IMnBZ-metaTG9wZWRlVmVnYV93ZWIuanBn--teatro.webp',
            //description: 'casi no hemos ido',
            
            description: `
                <p>Teatro más cercano a Julia.</p>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24305965">
                    <script src="https://public.flourish.studio/resources/embed.js"></script>
                    <noscript>
                        <img src="https://public.flourish.studio/visualisation/24305965/thumbnail" width="100%" alt="chart visualization" />
                    </noscript>
                </div>
            `,
            location: {
                center: [  -3.7076, 40.4221],
                zoom: 17.89,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/
    /*{
            id: 'teatro 15',
            alignment: 'fully',
            hidden: false,
            title: 'Teatro Marquina',
            image: 'https://salesas.madrid/wp-content/uploads/2021/03/2-8-740x555.jpg',
            //description: 'casi no hemos ido',
            
            description: `
                <p>Teatro más cercano a Julia.</p>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24305965">
                    <script src="https://public.flourish.studio/resources/embed.js"></script>
                    <noscript>
                        <img src="https://public.flourish.studio/visualisation/24305965/thumbnail" width="100%" alt="chart visualization" />
                    </noscript>
                </div>
            `,
            location: {
                center: [ -3.6959, 40.4193],
                zoom: 17.89,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/
    {
      id: "teatro 16",
      alignment: "right",
      hidden: false,
      title: "🎭 Teatro María Guerrero",
      image:
        "https://www.apropacultura.org/sites/default/files/styles/header_780w/public/equipment/imagen_teatro_maria_guerrero.jpg?itok=ePxhUIJd",
      //description: 'casi no hemos ido',

      description: `
                <div style="font-size: 17px; line-height: 1.5;">
                <p>📍Ubicación: Calle de Tamayo y Baus, 4, barrio de Justicia </p>
                <p>Si hay un teatro que lleva la palabra “drama” con orgullo y sin necesidad de explicaciones, es el <b>María Guerrero</b>. 
                Aquí se viene a remover cosas por dentro. No por casualidad es la sede del Centro Dramático Nacional, y eso se nota desde 
                la programación hasta el propio silencio que hay en el vestíbulo antes de que empiece una función. <br>

               Las emociones aquí no se regalan, se construyen. <i>Misericordia</i> parte de un recuerdo de infancia para acabar hablándonos del duelo 
               y la fragilidad emocional. <i>Los guapos</i> plantea el reencuentro entre dos personajes rotos por su propio pasado. 
               <i>Feriantes</i> homenajea con nostalgia poética a quienes han vivido en los márgenes. Todo sin aspavientos, solo con verdad. 
               Aquí, la tristeza tiene muchas formas.</p>

                <p>También hay obras que empujan desde el desconcierto o el miedo. <i>La casa de las locas</i> juega con el ensayo y el estigma, 
                el teatro dentro del teatro. <i>Primera sangre</i> es un thriller autobiográfico sobre abusos en la infancia que no deja a nadie indiferente.<br>

                Y cómo no, <i> La casa de Bernarda Alba</i> , con la dirección de Alfredo Sanzol. Un Lorca que no solo habla de represión y deseo, 
                sino que grita. Y lo hace con rabia. Lo mismo ocurre con <i> Breve historia del ferrocarril español</i> , que parece un título 
                amable pero acaba siendo una crítica afilada al capitalismo y la monarquía, envuelta en teatro histórico con nervio.<br></p>

                <p> El María Guerrero no busca que salgas a gusto. Busca que salgas distinto. 
                Y eso, en estos tiempos, ya es bastante revolucionario.</p>
                
                <div style="font-size: 17px; line-height: 1.35;"> 
                 <b> <i>“Un muro puede ser de piedra, pero también de silencio.” </i> </b> <br> 
                  La casa de Bernarda Alba, Federico García Lorca  
                </div>
            </div>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24313119"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/24313119/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
            `,
      location: {
        center: [-3.6954, 40.4235],
        zoom: 17.89,
        pitch: 40,
        bearing: -70,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    /*{
            id: 'teatro 17',
            alignment: 'left',
            hidden: false,
            title: 'Teatro Pavón',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Teatro_Pav%C3%B3n_%28Madrid%29_01.jpg/1200px-Teatro_Pav%C3%B3n_%28Madrid%29_01.jpg',
            //description: 'casi no hemos ido',
            
            description: `
                <p>Antiguo Kamikaze.</p>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24313109"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/24313109/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
            `,
            location: {
                center: [-3.7031, 40.4132],
                zoom: 17.89,
                pitch: 40,
                bearing: -180
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/
    /*{
            id: 'teatro 18',
            alignment: 'right',
            hidden: false,
            title: 'Teatro Quique San Francisco',
            image: 'https://www.taquilla.com/data/images/t_icimgs/ba/20230524_174328-scaled__h200.jpg',
            //description: 'casi no hemos ido',
            
            description: `
                <p>Antes era otro.</p>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24313137"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/24313137/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
            `,
            location: {
                center: [-3.7137,40.434],
                zoom: 17.89,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/
    /*{
            id: 'teatro 19',
            alignment: 'fully',
            hidden: false,
            title: 'Teatro Rialto',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/M%C3%A1s_de_cien_mentiras_%28Rialto%2C_Madrid%29_01.jpg/500px-M%C3%A1s_de_cien_mentiras_%28Rialto%2C_Madrid%29_01.jpg',
            //description: 'casi no hemos ido',
            
            description: `
                <p>Teatro más cercano a Julia.</p>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24305965">
                    <script src="https://public.flourish.studio/resources/embed.js"></script>
                    <noscript>
                        <img src="https://public.flourish.studio/visualisation/24305965/thumbnail" width="100%" alt="chart visualization" />
                    </noscript>
                </div>
            `,
            location: {
                center: [ -3.7072, 40.4214],
                zoom: 17.89,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/

    /*{
            id: 'teatro 20',
            alignment: 'fully',
            hidden: false,
            title: 'Teatro de La Abadía',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/La_Abad%C3%ADa.jpg/500px-La_Abad%C3%ADa.jpg',
            //description: 'casi no hemos ido',
            
            description: `
                <p>Teatro más cercano a Julia.</p>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24305965">
                    <script src="https://public.flourish.studio/resources/embed.js"></script>
                    <noscript>
                        <img src="https://public.flourish.studio/visualisation/24305965/thumbnail" width="100%" alt="chart visualization" />
                    </noscript>
                </div>
            `,
            location: {
                center: [  -3.7164, 40.4373],
                zoom: 17.89,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },*/
    /*{
            id: 'teatro 21',
            alignment: 'left',
            hidden: false,
            title: 'Teatros Luchana',
            image: 'https://teatrosluchana.es/wp-content/uploads/2024/09/DTOS.jpg',
            //description: 'casi no hemos ido',
            
            description: `
                <p>Antiguo Cine.</p>
                <div class="flourish-embed flourish-chart" data-src="visualisation/24313131"><script src="https://public.flourish.studio/resources/embed.js"></script><noscript><img src="https://public.flourish.studio/visualisation/24313131/thumbnail" width="100%" alt="chart visualization" /></noscript></div>
            `,
            location: {
                center: [ -3.7036, 40.4349],
                zoom: 17.89,
                pitch: 40,
                bearing: 80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }*/
  ],
};
