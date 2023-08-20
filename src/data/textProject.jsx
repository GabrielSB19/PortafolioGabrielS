import CasaDorada from "../assets/imgPortafolio/CasaDorada.png";
import SneakLadders from "../assets/imgPortafolio/SneakLadders.png";
import CarRenting from "../assets/imgPortafolio/CarRenting.png";
import GameStore from "../assets/imgPortafolio/GameStore.png";
import FibaData from "../assets/imgPortafolio/FibaData.png";
import HellishMaze from "../assets/imgPortafolio/HellishMaze.png";
import RCode from "../assets/imgPortafolio/RCode.png";
import SPAJSt from "../assets/imgPortafolio/SPAJS.png";
import VisionChest from "../assets/imgPortafolio/VisionChest.png";
import Virtualica from "../assets/imgPortafolio/Virtualica.png";
import BankCustomer from "../assets/imgPortafolio/BankCustomer.png";
import FourCardSection from "../assets/imgPortafolio/FourCardSection.png";
import JuegoMemoria from "../assets/imgPortafolio/JuegoMemoria.png";
import BaseApperel from "../assets/imgPortafolio/BaseApperel.png";
import IntroComponentWithSignupForm from "../assets/imgPortafolio/IntroComponentWithSignupForm.png";
import InteractiveCardDetails from "../assets/imgPortafolio/InteractiveCardDetails.png";
import ExpensesChartComponent from "../assets/imgPortafolio/ExpensesChartComponent.png";
import TipCalculator from "../assets/imgPortafolio/TipCalculator.png";
import TimeTrackingDashboard from "../assets/imgPortafolio/TimeTrackingDashboard.png";
import FacturaSemillero from "../assets/imgPortafolio/FacturaSemillero.png";
import Traductor from "../assets/imgPortafolio/Traductor.png";
import IACancer from "../assets/imgPortafolio/IACancer.png";
import EShop from "../assets/imgPortafolio/EShop.png";

const textProject = [
  {
    id: 1,
    title: "La Casa Dorada",
    des: "Proyecto Java Escritorio desarrollado para un restaurante, se gestiona toda la información necesaria.",
    img: CasaDorada,
    section: ["Java"],
    tag: ["Java", "Escritorio", "Medio", "Gestion"],
    link: "https://github.com/GabrielSB19/JFX-System-Casa-Dorada",
    view: "https://github.com/GabrielSB19/JFX-System-Casa-Dorada/blob/master/README.md",
    deepDes:
      "Proyecto Java de escritorio desarrollado para un restaurante, en el cual se gestiona toda la información del restaurante, además de tener una sección de ventas y reportes. El proyecto fue desarrollado en Java utilizando el IDE NetBeans y la interfaz fue desarrollada en JavaFX. El proyecto cuenta con una base de datos la cual es importada a traves de archivos csv. El proyecto cuenta con una interfaz grafica en la cual se puede gestionar toda la información del restaurante, como lo son los empleados, los clientes, los productos, las categorias, las ventas y los reportes. El ReadMe cuenta con un video en el cual se muestra el funcionamiento del proyecto.",
  },
  {
    id: 2,
    title: "Sneak and Ladders",
    des: "Proyecto Java Escritorio que simula el juego de Sneak and Ladders. Se utilizo 100% programación recursiva.",
    img: SneakLadders,
    section: ["Java"],
    tag: ["Java", "Recursividad", "Medio", "Juego"],
    link: "https://github.com/GabrielSB19/Snake-and-Leader",
    view: "",
    deepDes:
      "Proyecto Java en el cual se desarollo el famoso juego de mesa Serpientes y Escaleras, en este juego se puede jugar contra la computadora o contra otro jugador mediante una CLI. Se utilizo 100% programación recursiva. El proyecto fue desarrollado en Java utilizando el IDE NetBeans. El proyecto cuenta con una interfaz en CLI en la cual se puede jugar el juego. En este proyecto no se cuenta con ningún bucle, fue desarrollado totalmente con funciones recursivas la cual se encargan de realizar las acciones del juego. En el ReadMe del proyecto se muestra como instalar el juego.",
  },
  {
    id: 3,
    title: "Car Renting",
    des: "Proyecto Java Escritorio, se simula la administración de una plataforma de alquiler de autos.",
    img: CarRenting,
    section: ["Java"],
    tag: ["Java", "Escritorio", "Medio", "Unitarias"],
    link: "https://github.com/cuatrosr/car-renting-javafx/tree/master",
    view: "https://www.youtube.com/watch?v=uGZYgUPjJF4",
    deepDes:
      "Proyecto Java de escritorio en el cual se simula la administración de una plataforma de alquiler de autos. Se utilizaron diferentes patrones de diseño como lo son el patrón de diseño MVC y el patrón de diseño DAO. En este proyecto se realizo toda el ciclo de vida del Software desde el analisi de requerimientos hasta el despliegue, se realizaron diagramas de clase y pruebas unitarias. Además de esto, tambien contamos con un video en el cual se muestra el funcionamiento del proyecto. El proyecto fue desarrollado en Java utilizando el IDE NetBeans y la interfaz fue desarrollada en JavaFX. El proyecto fue desarrollado por 2 personas.",
  },
  {
    id: 4,
    title: "Game Store",
    des: "Proyecto Java Escritorio que simula una tienda de videojuegos. Mediante el uso de Stacks, Queues y Hashs.",
    img: GameStore,
    section: ["Java"],
    tag: ["Java", "HashTables", "Stacks", "Queues"],
    link: "https://github.com/GabrielSB19/game-store",
    view: "https://github.com/GabrielSB19/game-store/blob/master/README.md",
    deepDes:
      "Proyecto Java de escritorio en el cual se simula el funcionamiento de una tienda de videojuegos. Se utilizaron diferentes patrones de diseño como lo son el patrón de diseño MVC y el patrón de diseño DAO. Además se hizo enfasis en el uso de los stacks y queues. El proyecto fue desarrollado en Java utilizando el IDE IntelliJ y la interfaz fue desarrollada en JavaFX. El proyecto cuenta con una base de datos la cual es importada a traves de archivos csv. El proyecto cuenta con un documento de ADT además del estudio de los algoritmos de ordenamiento más famosos",
  },
  {
    id: 5,
    title: "Fiba Data Control",
    des: "Proyecto Java Escritorio, se manejan +100K datos con el uso de estructuras como lo son los arboles.",
    img: FibaData,
    section: ["Java"],
    tag: ["Arboles AVL", "Arboles Binarios", "+100K Datos"],
    link: "https://github.com/GabrielSB19/fiba-data-control",
    view: "https://github.com/GabrielSB19/fiba-data-control/blob/master/README.md",
    deepDes:
      "Proyecto Java de escritorio en el cual se simula la inscripción de jugadores de basketball al sistema. Se manejaron más de 1 millon de datos de forma eficiente con estructuras de arboles. Para la gran cantidad de datos se usaron estructuras de datos que nos permiten manejar los datos de manera eficiente, estas estructuras son especialmente los arboles binarios de busquedad, arboles avl y arboles rojo-negro.",
  },
  {
    id: 6,
    title: "Hellish Maze",
    des: "Proyecto Java Escritorio, el cual es un juego donde se evidenció el uso de Grafos de la mejor manera posible.",
    img: HellishMaze,
    section: ["Java"],
    tag: ["Java", "Juego", "Grafos", "Avanzado"],
    link: "https://github.com/GabrielSB19/hellish-maze",
    view: "https://github.com/GabrielSB19/hellish-maze#readme",
    deepDes:
      "Proyecto de Java el cual es un juego donde se evidenció el uso de Grafos de la mejor manera posible. El juego consiste en encontrar el mejor camino desde un punto A hasta un punto B. En el juego se utilizan diversos caminos para llegar a la meta, estos caminos tienen trampas o comodines, el objetivo es encontrar el camino con menor peso, además existe un sistema de ranking el cual se basa en el tiempo, tambien hay diferentes dificultades.",
  },
  {
    id: 7,
    title: "SPA-JS",
    des: "SPA JS Página web desarrollada con JavaScript, que nos permite registrarnos y listar tipos de artículos.",
    img: SPAJSt,
    section: ["Web"],
    tag: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/alejandro945/spa-js",
    view: "https://spa-js-six.vercel.app/#/",
    deepDes:
      "SPA JS es una página web desarrollada con JavaScript, Html y CSS, que nos permite ver una lista con diferentes tipos de artículos, también podemos registrarnos e iniciar sesión. Por el momento la aplicación no dispone de verificación de usuario al iniciar sesión. Además la aplicación aún no es capaz de actualizar un artículo con información nueva o sustituida",
  },
  {
    id: 8,
    title: "React Vision Chess",
    des: "Juego React Ajedrez de visión, el objetivo es marcar los cuadros indicados en el menor tiempo.",
    img: VisionChest,
    section: ["Web"],
    tag: ["React", "Juego", "JavaScript", "CSS"],
    link: "https://github.com/GabrielSB19/react-vision-chess",
    view: "https://react-vision-chess.vercel.app/",
    deepDes:
      "Juego de ajedrez de visión hecho con react como herramienta marco. La visión del tablero es la capacidad de ver cómo se mueven e interactúan las piezas en el tablero de ajedrez. Esta habilidad es una parte crítica de la base ajedrecística de un jugador. Una de las mejores formas de desarrollar la visión del tablero es jugando muchas, muchas partidas.",
  },
  {
    id: 9,
    title: "Virtualica Mobile App",
    des: "Virtualica es una aplicación movil, desarrollada para el entrenamiento en las Pruebas ICFES.",
    img: Virtualica,
    section: ["Mobile"],
    tag: ["Kotlin", "Andorid", "Educación", "Avanzado"],
    link: "https://github.com/GabrielSB19/mobile-android-virtualica",
    view: "",
    deepDes:
      "Proyecto Mobile App desarrollado en Kotlin, en este proyecto se desarrolló una aplicación móvil para el entrenamiento de los estudiantes prontos a presentar las pruebas ICFES. Se cuenta con diferentes secciones, como lo son la sección de entrenamiento, la sección de simulacro y la sección de resultados. En esta aplicación los estudiantes podran repasar las preguntas ICFES para llegar con un buen nivel a estas pruebas. La aplicación fue desarrollada en Kotlin utilizando el IDE Android Studio.",
  },
  {
    id: 10,
    title: "R-Pruebas-Saber-11",
    des: "Proyecto de R, en este proyecto se analiza los resultados de los estudiantes en las ICFES",
    img: RCode,
    section: ["IA (Python)"],
    tag: ["RCode", "Estadistica", "Hipotesis"],
    link: "https://github.com/GabrielSB19/R-Code-Pruebas-Saber-11-Cali/tree/master",
    view: "https://github.com/GabrielSB19/R-Code-Pruebas-Saber-11-Cali/blob/master/Presentaci%C3%B3n/Proyecto%20Inferencia%20Estadistica.pdf",
    deepDes:
      "Proyecto desarrollado en el lenguaje de R, en este proyecto se analiza los resultados de los estudiantes en las pruebas de estado de Colombia. En este proyecto se analizó un DataSet de los estudiantes en las pruebas saber 11 en la ciudad de Cali-Colombia, se hizo un analisis exploratorio de datos, se plantearon diversas hipotesis y la comprobación de estas. Tambien se concluyeron diversas caracteristicas encontradas, estan presentes en el documento de presentación del proyecto.",
  },
  {
    id: 11,
    title: "Bank Segmentation",
    des: "Modelo IA Segmentación de clientes en un banco, Kmeans utilizado para la identificación de 3 clusters.",
    img: BankCustomer,
    section: ["IA (Python)"],
    tag: ["IA", "Python", "K-Means"],
    link: "https://github.com/GabrielSB19/Bank-Customer-Segmentation",
    view: "https://gabrielsb19-bank-customer-segmentation--deployfrontend-zsks7p.streamlit.app/",
    deepDes:
      "Modelo IA de segmentación de clientes de un banco, en este proyecto se utilizó el algoritmo de K-Means para la segmentación de los clientes. Además se desplego a traves de la herramienta de Streamlit. Se hizo todo el ciclo de vida de un modelo de IA, desde la recolección y analisis de los datos hasta el despliegue del modelo. Se probaron diferentes modelos como lo son: K-means, DBScan y cluster jerarquicos, al final se concluyo que el mejor modelo era el K-means, se utilizo el metodo de la silueta. Para hallar los hiperparametero se utilizo el metodo del codo y PCA. El DataSet para probar se encuentra en la ruta deploy/resources",
  },
  {
    id: 12,
    title: "4 Card Feature Section",
    des: "Aplicación web done se tienen 4 cartas con diferente información cada uno, cuante con animaciones",
    img: FourCardSection,
    section: ["Web"],
    tag: ["HTML", "CSS", "Desafio"],
    link: "https://github.com/GabrielSB19/four-card-feature-section-master",
    view: "https://gabrielsb19.github.io/four-card-feature-section-master/",
    deepDes:
      "Aplicacion web la cual era un desafio de diseño, en este proyecto se utilizo HTML, CSS y JavaScript. El objetivo era replicar el diseño dado. Cuenta con 4 diferentes secciones con un estilo unico y animaciones. Se utilizo el IDE Visual Studio Code además de utilizar las buenas practicas en cada uno de los desarrollos, la pagina es responsive.",
  },
  {
    id: 13,
    title: "Memorizar Parejas",
    des: "Juego JavaScript donde se debe de encontrar las parejas en el menor tiempo e intentos posibles",
    img: JuegoMemoria,
    section: ["Web"],
    tag: ["CSS", "JavaScript", "Juego", "React"],
    link: "https://github.com/GabrielSB19/memorization-game-master",
    view: "https://gabrielsb19.github.io/memorization-game-master/",
    deepDes:
      "Juego web desarrollado en JavaScript, donde el objetivo principal es encontrar todas las parejas de numero en el menor tiempo posible, además con el menor numero de intentos. Este Juego fue desarrollado utilizando HTML, CSS & JavaScript.",
  },
  {
    id: 14,
    title: "Base Apparel",
    des: "Pagina web diseñada con HTML, CSS y JavaScript, simula una pantalla para recibir más información",
    img: BaseApperel,
    section: ["Web"],
    tag: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://github.com/GabrielSB19/base-apparel-coming-soon-master",
    view: "https://gabrielsb19.github.io/base-apparel-coming-soon-master/",
    deepDes:
      "Una página web cautivadora construida con HTML, CSS y JavaScript. Su diseño elegante es el telón de fondo perfecto para la interacción del usuario. HTML y CSS crean la apariencia, mientras que JavaScript añade dinamismo. Cada clic y movimiento cuentan una historia de creatividad y esfuerzo. ",
  },
  {
    id: 15,
    title: "Intro Component",
    des: "Pagina web diseñada con JavaScript para realizar un formulario de contacto.",
    img: IntroComponentWithSignupForm,
    section: ["Web"],
    tag: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://github.com/GabrielSB19/intro-component-with-signup-form-master",
    view: "https://gabrielsb19.github.io/intro-component-with-signup-form-master/",
    deepDes:
      "Una composición excepcional que utiliza HTML, CSS y JavaScript para crear una experiencia de formulario de contacto envolvente. Los detalles son cuidadosamente orquestados: HTML estructura, CSS estilo y JavaScript interacción. Cada interacción es una prueba del poder de la tecnología web para expresión creativa.",
  },
  {
    id: 16,
    title: "Interactive Card",
    des: "Pagina web que simula un formulario de tarjeta de credito con animaciones",
    img: InteractiveCardDetails,
    section: ["Web"],
    tag: ["HTML", "CSS", "JavaScript", "SCSS"],
    link: "https://github.com/GabrielSB19/Interactive-card-details-form",
    view: "https://gabrielsb19.github.io/Interactive-card-details-form/",
    deepDes:
      "Este proyecto simula un formulario de tarjeta de crédito utilizando HTML, CSS y JavaScript. El diseño minimalista se combina con animaciones suaves y validaciones en tiempo real para recrear la experiencia de ingresar detalles de una tarjeta. Es un testimonio del poder de la tecnología web para emular situaciones del mundo real.",
  },
  {
    id: 17,
    title: "Expenses Chart",
    des: "Pagina web que simula un grafico de gastos con animaciones. Local DB",
    img: ExpensesChartComponent,
    section: ["Web"],
    tag: ["HTML", "CSS", "JavaScript", "Web", "SCSS"],
    link: "https://github.com/GabrielSB19/expenses-chart-component",
    view: "https://gabrielsb19.github.io/expenses-chart-component/",
    deepDes:
      "Un proyecto web que simula un gráfico de gastos, con animaciones y validaciones. Utiliza HTML, CSS y JavaScript para crear una visualización interactiva de datos locales",
  },
  {
    id: 18,
    title: "Tip Calculator",
    des: "Pagina web que simula un gestor de propinas con diferentes opciones",
    img: TipCalculator,
    section: ["Web"],
    tag: ["HTML", "JavaScript", "React", "SCSS"],
    link: "https://github.com/GabrielSB19/tip-calculator-app-main",
    view: "https://gabrielsb19.github.io/tip-calculator-app-main/",
    deepDes:
      "Una página web que simula un gestor de propinas con opciones de personalización. Con HTML, CSS y JavaScript, esta herramienta demuestra cómo la tecnología web puede brindar utilidad y adaptabilidad",
  },
  {
    id: 19,
    title: "Time Tracking Dash",
    des: "Pagina web que simula una pestaña de gestion de tiempo de una persona común.",
    img: TimeTrackingDashboard,
    section: ["Web"],
    tag: ["HTML", "CSS", "JavaScript", "React", "SCSS"],
    link: "https://github.com/GabrielSB19/time-tracking-dashboard",
    view: "",
    deepDes:
      "Una simulación de pestaña de gestión de tiempo diseñada con HTML, CSS y JavaScript. Esta página web ofrece una visión de cómo las tecnologías web pueden ayudar a gestionar el tiempo y las tareas diarias.",
  },
  {
    id: 20,
    title: "API Rest Factura",
    des: "API Rest con CRUD para la gestion de facturas, se trabajo en Node JS. Solo Backend",
    img: FacturaSemillero,
    section: ["Web"],
    tag: ["Node JS", "JavaScript", "API Rest"],
    link: "https://github.com/GabrielSB19/api-rest-factura-semillero",
    view: "",
    deepDes:
      "Una API Rest que gestiona facturas con operaciones CRUD, desarrollada en Node.js. Este proyecto backend demuestra cómo crear un sistema de gestión utilizando Node.js y JavaScript",
  },
  {
    id: 21,
    title: "API Translate",
    des: "Traductor de texto, cuenta con más de 50 idiomas. Traductor hecho en JavaScript y utilizando API externa",
    img: Traductor,
    section: ["Web"],
    tag: ["JavaScript", "API", "Web", "Idiomas"],
    link: "https://github.com/GabrielSB19/api-translate",
    view: "https://gabrielsb19.github.io/api-translate/",
    deepDes:
      "Un traductor de texto que admite más de 50 idiomas. Creado en JavaScript y utilizando una API externa para traducción, este proyecto muestra cómo la programación web puede abrir puertas a la comunicación multilingüe",
  },
  {
    id: 22,
    title: "IA Detector de Cancer",
    des: "Modelo de aprendizaje supervisado, utiliza marcos jerarquicos para detectar cancer benigno o maligno",
    img: IACancer,
    section: ["IA (Python)"],
    tag: ["IA", "Modelos", "Supervisado"],
    link: "https://github.com/GabrielSB19/ArticleAISupervisedLearning",
    view: "",
    deepDes:
      "Un modelo de aprendizaje supervisado desarrollado en Python para detectar cáncer benigno o maligno. Aprovechando marcos jerárquicos, este proyecto demuestra cómo la inteligencia artificial puede contribuir a la detección temprana y precisa de enfermedades. ",
  },
  {
    id: 23,
    title: "E-Comerce CD",
    des: "Proyecto Full Stack, E-Comerce de venta de CD's, se trabajo en SpringBoot, React JS, PostgresSQL y TypeScript",
    img: EShop,
    section: ["Web"],
    tag: ["Node JS", "JavaScript", "API Rest"],
    link: "https://github.com/IcesiComputacionInternet/TallerFinal/tree/Grupo_2",
    view: "",
    deepDes:
      "Proyecto Full Stack, E-Comerce de venta de CD's, se trabajo en SpringBoot, React JS, PostgresSQL y TypeScript. El proyecto fue desarrollado por 3 personas, cuenta con todo tipos de pruebas y se trabajo utilizando la metodología SCRUM. El proyecto fue desarrollado en Java utilizando el IDE IntelliJ y la interfaz fue desarrollada en React TS. El proyecto cuenta con una base de datos en PostgresSQL",
  },
];

export default textProject;
