//Ejercicio 1 Eliminar el card central que se encuentra en la pagina por medio del DOM (El mas grande)





//Ejercicio 2 Eliminar un objeto al precionar un boton



//Ejercicio 3 Crear un mapa de google maps con la ubicacion de La universidad (10.005651, -84.216175)




// Ejercicio 4 Crear la traduccion de la pagina por medio del api de google translate con los idiomas de 
// frances, ingles y japones y latin  (en,fr,ja,la)




// Ejercicio 5 crear un google charts con ayuda de la api de charts con los siguientes valores
//Titulo = ventas y ganancias por año

// ['Año', 'Ventas', 'Ganancias'],
//     ['2010',  1000],
//     ['2011',  1170],
//     ['2012',  660],
//     ['2013',  1030]










//Solucion a los ejercicios Planteados

// //Practica 1
// $('#ejemplo1').remove()


// //Practica 2
// $(document).ready(function(){
//     $('#botonEjemplo2').click(function(){
// $('#Ejemplo2').remove();
//     });
// });

// //Practica 3


// function mapa(){
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 14,
//       center: new google.maps.LatLng(10.005651, -84.216175) // Nueva York
//     });
    
//     // Crear un marcador en la posición inicial
//     var marker = new google.maps.Marker({
//       position: new google.maps.LatLng(10.005651, -84.216175),
//       map: map
//     })
// }


// //practica 4

// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({
//       pageLanguage: 'es',
//       includedLanguages: 'en,fr,ja,la',
//       layout: google.translate.TranslateElement.InlineLayout.SIMPLE
//     }, 'google_translate_element');
//   }
// //practica 5 

// google.charts.load('current', {'packages':['bar']});
//     // Configuramos la función que se ejecutará cuando se cargue la librería
//     google.charts.setOnLoadCallback(drawChart);

//     function drawChart() {
//       // Creamos los datos del gráfico
//       var data = google.visualization.arrayToDataTable([
//         ['Año', 'Ventas', 'Ganancias'],
//         ['2010',  1000,      400],
//         ['2011',  1170,      460],
//         ['2012',  660,       1120],
//         ['2013',  1030,      540]
//       ]);

//       // Configuramos las opciones del gráfico
//       var options = {
//         chart: {
//           title: 'Ventas y ganancias por año'
//         },
//         bars: 'Vertical' // orientación horizontal de las barras
//       };

//       // Creamos una instancia del gráfico y lo dibujamos en el elemento HTML con ID 'chart_div'
//       var chart = new google.charts.Bar(document.getElementById('grafico'));
//       chart.draw(data, google.charts.Bar.convertOptions(options));
//     }