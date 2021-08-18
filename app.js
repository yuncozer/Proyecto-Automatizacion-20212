google.charts.load('current', {'packages':['gauge']});
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartTemp1);
google.charts.setOnLoadCallback(drawChartTemp2);
google.charts.setOnLoadCallback(drawChartTemp3);
google.charts.setOnLoadCallback(drawChartTemp4);

//  Funciones de los manometros
function drawChartTemp1() {

  var dataTemp1 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Tehrm 1', 0]
    ]);

  var optionsTemp1 = {
    width: 600, height: 220,
    redFrom: 20, redTo: 40,
    yellowFrom:13, yellowTo: 20,
    greenFrom:-20, greenTo: 13,
    majorTicks:['-20','-15','-10','-5','0','5','10','15','20','25','30','35','40'],
    minorTicks: 5,
    max: 40
    };

  var formatterTemp1 = new google.visualization.NumberFormat({
      suffix: '°C',
      fractionDigits: 1
      });
      formatterTemp1.format(dataTemp1, 1);

  var chartTemp1 = new google.visualization.Gauge(document.getElementById("chart_Temp1"));

  chartTemp1.draw(dataTemp1, optionsTemp1, formatterTemp1);
  var temp1 = firebase.database().ref('Refrigerador/TThe1').limitToLast(1);


  temp1.on('value', function(snapshot) {
    temp1= snapshot.val();
    if(temp1){
        var currentValue;
        var data = [];
        for(var key in temp1){
          currentValue = temp1[key];
          data.push(currentValue);
        }
      }
      temp1 = data[0];
  });

  setInterval(function() {
    dataTemp1.setValue(0, 1,temp1);
    formatterTemp1.format(dataTemp1, 1);
    chartTemp1.draw(dataTemp1, optionsTemp1);
  }, 1300);
}

function drawChartTemp2() {

  var dataTemp2 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Tehrm 2', 0]
    ]);

  var optionsTemp2 = {
    width: 600, height: 220,
    redFrom: 20, redTo: 40,
    yellowFrom:13, yellowTo: 20,
    greenFrom:-20, greenTo: 13,
    majorTicks:['-20','-15','-10','-5','0','5','10','15','20','25','30','35','40'],
    minorTicks: 5,
    max: 40
    };

  var formatterTemp2 = new google.visualization.NumberFormat({
      suffix: '°C',
      fractionDigits: 1
      });
      formatterTemp2.format(dataTemp2, 1);

  var chartTemp2 = new google.visualization.Gauge(document.getElementById("chart_Temp2"));

  chartTemp2.draw(dataTemp2, optionsTemp2, formatterTemp2);
  var temp2 = firebase.database().ref('Refrigerador/TThe2').limitToLast(1);


  temp2.on('value', function(snapshot) {
    temp2= snapshot.val();
    if(temp2){
        var currentValue;
        var data = [];
        for(var key in temp2){
          currentValue = temp2[key];
          data.push(currentValue);
        }
      }
      temp2 = data[0]-1;
  });

  setInterval(function() {
    dataTemp2.setValue(0, 1,temp2);
    formatterTemp2.format(dataTemp2, 1);
    chartTemp2.draw(dataTemp2, optionsTemp2);
  }, 1300);
}

function drawChartTemp3() {

  var dataTemp3 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Tehrm 3', 0]
    ]);

  var optionsTemp3 = {
    width: 600, height: 220,
    redFrom: 20, redTo: 40,
    yellowFrom:13, yellowTo: 20,
    greenFrom:-20, greenTo: 13,
    majorTicks:['-20','-15','-10','-5','0','5','10','15','20','25','30','35','40'],
    minorTicks: 5,
    max: 40
    };

  var formatterTemp3 = new google.visualization.NumberFormat({
      suffix: '°C',
      fractionDigits: 1
      });
      formatterTemp3.format(dataTemp3, 1);

  var chartTemp3 = new google.visualization.Gauge(document.getElementById("chart_Temp3"));

  chartTemp3.draw(dataTemp3, optionsTemp3, formatterTemp3);
  var temp3 = firebase.database().ref('Refrigerador/TThe3').limitToLast(1);


  temp3.on('value', function(snapshot) {
    temp3= snapshot.val();
    if(temp3){
        var currentValue;
        var data = [];
        for(var key in temp3){
          currentValue = temp3[key];
          data.push(currentValue);
        }
      }
      temp3 = data[0]-1;
  });

  setInterval(function() {
    dataTemp3.setValue(0, 1,temp3);
    formatterTemp3.format(dataTemp3, 1);
    chartTemp3.draw(dataTemp3, optionsTemp3);
  }, 1300);
}

function drawChartTemp4() {

  var dataTemp4 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Tehrm 4', 0]
    ]);

  var optionsTemp4 = {
    width: 600, height: 220,
    redFrom: 20, redTo: 40,
    yellowFrom:13, yellowTo: 20,
    greenFrom:-20, greenTo: 13,
    majorTicks:['-20','-15','-10','-5','0','5','10','15','20','25','30','35','40'],
    minorTicks: 5,
    max: 40
    };

  var formatterTemp4 = new google.visualization.NumberFormat({
      suffix: '°C',
      fractionDigits: 1
      });
      formatterTemp4.format(dataTemp4, 1);

  var chartTemp4 = new google.visualization.Gauge(document.getElementById("chart_Temp4"));

  chartTemp4.draw(dataTemp4, optionsTemp4, formatterTemp4);
  var temp4 = firebase.database().ref('Refrigerador/TThe4').limitToLast(1);


  temp4.on('value', function(snapshot) {
    temp4= snapshot.val();
    if(temp4){
        var currentValue;
        var data = [];
        for(var key in temp4){
          currentValue = temp4[key];
          data.push(currentValue);
        }
      }
      temp4 = data[0]-1;
  });

  setInterval(function() {
    dataTemp4.setValue(0, 1,temp4);
    formatterTemp4.format(dataTemp4, 1);
    chartTemp4.draw(dataTemp4, optionsTemp4);
  }, 1300);
}

// Graficas con evento click boton

(() =>{
    let botontherm1 = document.getElementById('bt1');
    botontherm1.addEventListener('click', () => {

      google.charts.setOnLoadCallback(drawChart);
     
      function drawChart() {

        var dataTableTime = new google.visualization.DataTable();
            dataTableTime.addColumn('datetime', 'Time');
            dataTableTime.addColumn('number', 'Temperatura');
      
      var qtyDatos=200;
          // create options object with titles, colors, etc.
          var optionsChartTime = {
              title: "Therm 1",
              titleTextStyle: {
                         color: 'black',
                         fontSize: 20,
                         fontName: 'Arial',
                         bold: true,
                         italic: false
                      },
              hAxis: {title: "Tiempo", format:'HH:mm', titleTextStyle: {color: 'blue',fontSize: 22,
                           bold: true}},
              vAxis: {title: "Tempertura(°C)", titleTextStyle: {color: 'blue', fontSize: 22,
                           bold: true}, viewWindowMode:'explicit', viewWindow: {
              max:50,
              min:-40
          }},
              'width':900,
              'height':500,
              pointsVisible: true,
               backgroundColor: 'white',
               colors: ['blue'],
               curveType: 'function'
          };
      
      
          var formatDate = new google.visualization.DateFormat(
             { prefix: 'Time: ', pattern: "dd MMM HH:mm" });
      
          formatDate.format(dataTableTime, 0);
      
      
          var chartTime = new google.visualization.LineChart(document.getElementById("curve_chart"));
          var temp = firebase.database().ref('Refrigerador/TThe1').limitToLast(qtyDatos);
          var hora = firebase.database().ref('Refrigerador/Hora').limitToLast(qtyDatos);
          var minutos = firebase.database().ref('Refrigerador/Minutos').limitToLast(qtyDatos);
          var dia = firebase.database().ref('Refrigerador/Dia').limitToLast(qtyDatos);
          var mes = firebase.database().ref('Refrigerador/Mes').limitToLast(qtyDatos);
          var año = firebase.database().ref('Refrigerador/Ano').limitToLast(qtyDatos);
      
          temp.on('value', function(snapshot) {
            temp = snapshot.val();
            if(temp){
                var currentValue;
                var data = [];
                for(var key in temp){
                  currentValue = temp[key];
                  data.push(currentValue);
                }
              }
              temp = data;
          });
      
          hora.on('value', function(snapshot) {
            hora = snapshot.val();
            if(hora){
                var currentValue;
                var data = [];
                for(var key in hora){
                  currentValue = hora[key];
                  data.push(parseFloat(currentValue));
                }
              }
              hora = data;
          });
      
          minutos.on('value', function(snapshot) {
            minutos = snapshot.val();
            if(minutos){
                var currentValue;
                var data = [];
                for(var key in minutos){
                  currentValue = minutos[key];
                  data.push(parseFloat(currentValue));
                }
              }
              minutos = data;
          });
      
          dia.on('value', function(snapshot) {
            dia = snapshot.val();
            if(dia){
                var currentValue;
                var data = [];
                for(var key in dia){
                  currentValue = dia[key];
                  data.push(parseFloat(currentValue));
                }
              }
              dia = data;
          });
      
          mes.on('value', function(snapshot) {
            mes = snapshot.val();
            if(mes){
                var currentValue;
                var data = [];
                for(var key in mes){
                  currentValue = mes[key];
                  data.push(parseFloat(currentValue));
                }
              }
              mes = data;
          });
      
          año.on('value', function(snapshot) {
            año = snapshot.val();
            if(año){
                var currentValue;
                var data = [];
                for(var key in año){
                  currentValue = año[key];
                  data.push(parseFloat(currentValue));
                }
              }
              año = data;
          });
      
          setInterval(function() {
            dataTableTime = new google.visualization.DataTable();
                dataTableTime.addColumn('datetime', 'Time');
                dataTableTime.addColumn('number', 'Temperatura');
            for(index = 0; index < qtyDatos; index++){
              dataTableTime.addRow(
                [new Date(año[index], mes[index]-1, dia[index], hora[index], minutos[index], 0, 0), temp[index]-1]);
            }
              chartTime.draw(dataTableTime, optionsChartTime);
          }, 1300);
      
      }
      
    }, false)
})();
    
(() =>{
  let botontherm1 = document.getElementById('bt2');
  botontherm1.addEventListener('click', () => {
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var dataTableTime = new google.visualization.DataTable();
          dataTableTime.addColumn('datetime', 'Time');
          dataTableTime.addColumn('number', 'Temperatura');
    
    var qtyDatos=200;
        // create options object with titles, colors, etc.
        var optionsChartTime = {
            title: "Therm 2",
            titleTextStyle: {
                       color: 'black',
                       fontSize: 20,
                       fontName: 'Arial',
                       bold: true,
                       italic: false
                    },
            hAxis: {title: "Tiempo", format:'HH:mm', titleTextStyle: {color: 'blue',fontSize: 22,
                         bold: true}},
            vAxis: {title: "Tempertura(°C)", titleTextStyle: {color: 'blue', fontSize: 22,
                         bold: true}, viewWindowMode:'explicit', viewWindow: {
            max:50,
            min:-40
        }},
            'width':900,
            'height':500,
            pointsVisible: true,
             backgroundColor: 'white',
             colors: ['blue'],
             curveType: 'function'
        };
    
    
        var formatDate = new google.visualization.DateFormat(
           { prefix: 'Time: ', pattern: "dd MMM HH:mm" });
    
        formatDate.format(dataTableTime, 0);
    
    
        var chartTime = new google.visualization.LineChart(document.getElementById("curve_chart"));
        var temp = firebase.database().ref('Refrigerador/TThe2').limitToLast(qtyDatos);
        var hora = firebase.database().ref('Refrigerador/Hora').limitToLast(qtyDatos);
        var minutos = firebase.database().ref('Refrigerador/Minutos').limitToLast(qtyDatos);
        var dia = firebase.database().ref('Refrigerador/Dia').limitToLast(qtyDatos);
        var mes = firebase.database().ref('Refrigerador/Mes').limitToLast(qtyDatos);
        var año = firebase.database().ref('Refrigerador/Ano').limitToLast(qtyDatos);
    
        temp.on('value', function(snapshot) {
          temp = snapshot.val();
          if(temp){
              var currentValue;
              var data = [];
              for(var key in temp){
                currentValue = temp[key];
                data.push(currentValue);
              }
            }
            temp = data;
        });
    
        hora.on('value', function(snapshot) {
          hora = snapshot.val();
          if(hora){
              var currentValue;
              var data = [];
              for(var key in hora){
                currentValue = hora[key];
                data.push(parseFloat(currentValue));
              }
            }
            hora = data;
        });
    
        minutos.on('value', function(snapshot) {
          minutos = snapshot.val();
          if(minutos){
              var currentValue;
              var data = [];
              for(var key in minutos){
                currentValue = minutos[key];
                data.push(parseFloat(currentValue));
              }
            }
            minutos = data;
        });
    
        dia.on('value', function(snapshot) {
          dia = snapshot.val();
          if(dia){
              var currentValue;
              var data = [];
              for(var key in dia){
                currentValue = dia[key];
                data.push(parseFloat(currentValue));
              }
            }
            dia = data;
        });
    
        mes.on('value', function(snapshot) {
          mes = snapshot.val();
          if(mes){
              var currentValue;
              var data = [];
              for(var key in mes){
                currentValue = mes[key];
                data.push(parseFloat(currentValue));
              }
            }
            mes = data;
        });
    
        año.on('value', function(snapshot) {
          año = snapshot.val();
          if(año){
              var currentValue;
              var data = [];
              for(var key in año){
                currentValue = año[key];
                data.push(parseFloat(currentValue));
              }
            }
            año = data;
        });
    
        setInterval(function() {
          dataTableTime = new google.visualization.DataTable();
              dataTableTime.addColumn('datetime', 'Time');
              dataTableTime.addColumn('number', 'Temperatura');
          for(index = 0; index < qtyDatos; index++){
            dataTableTime.addRow(
              [new Date(año[index], mes[index]-1, dia[index], hora[index], minutos[index], 0, 0), temp[index]-1]);
          }
            chartTime.draw(dataTableTime, optionsChartTime);
        }, 1300);
    
    }
  }, false)
})();

(() =>{
  let botontherm1 = document.getElementById('bt3');
  botontherm1.addEventListener('click', () => {
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var dataTableTime = new google.visualization.DataTable();
          dataTableTime.addColumn('datetime', 'Time');
          dataTableTime.addColumn('number', 'Temperatura');
    
    var qtyDatos=200;
        // create options object with titles, colors, etc.
        var optionsChartTime = {
            title: "Therm 3",
            titleTextStyle: {
                       color: 'black',
                       fontSize: 20,
                       fontName: 'Arial',
                       bold: true,
                       italic: false
                    },
            hAxis: {title: "Tiempo", format:'HH:mm', titleTextStyle: {color: 'blue',fontSize: 22,
                         bold: true}},
            vAxis: {title: "Tempertura(°C)", titleTextStyle: {color: 'blue', fontSize: 22,
                         bold: true}, viewWindowMode:'explicit', viewWindow: {
            max:50,
            min:-40
        }},
            'width':900,
            'height':500,
            pointsVisible: true,
             backgroundColor: 'white',
             colors: ['blue'],
             curveType: 'function'
        };
    
    
        var formatDate = new google.visualization.DateFormat(
           { prefix: 'Time: ', pattern: "dd MMM HH:mm" });
    
        formatDate.format(dataTableTime, 0);
    
    
        var chartTime = new google.visualization.LineChart(document.getElementById("curve_chart"));
        var temp = firebase.database().ref('Refrigerador/TThe3').limitToLast(qtyDatos);
        var hora = firebase.database().ref('Refrigerador/Hora').limitToLast(qtyDatos);
        var minutos = firebase.database().ref('Refrigerador/Minutos').limitToLast(qtyDatos);
        var dia = firebase.database().ref('Refrigerador/Dia').limitToLast(qtyDatos);
        var mes = firebase.database().ref('Refrigerador/Mes').limitToLast(qtyDatos);
        var año = firebase.database().ref('Refrigerador/Ano').limitToLast(qtyDatos);
    
        temp.on('value', function(snapshot) {
          temp = snapshot.val();
          if(temp){
              var currentValue;
              var data = [];
              for(var key in temp){
                currentValue = temp[key];
                data.push(currentValue);
              }
            }
            temp = data;
        });
    
        hora.on('value', function(snapshot) {
          hora = snapshot.val();
          if(hora){
              var currentValue;
              var data = [];
              for(var key in hora){
                currentValue = hora[key];
                data.push(parseFloat(currentValue));
              }
            }
            hora = data;
        });
    
        minutos.on('value', function(snapshot) {
          minutos = snapshot.val();
          if(minutos){
              var currentValue;
              var data = [];
              for(var key in minutos){
                currentValue = minutos[key];
                data.push(parseFloat(currentValue));
              }
            }
            minutos = data;
        });
    
        dia.on('value', function(snapshot) {
          dia = snapshot.val();
          if(dia){
              var currentValue;
              var data = [];
              for(var key in dia){
                currentValue = dia[key];
                data.push(parseFloat(currentValue));
              }
            }
            dia = data;
        });
    
        mes.on('value', function(snapshot) {
          mes = snapshot.val();
          if(mes){
              var currentValue;
              var data = [];
              for(var key in mes){
                currentValue = mes[key];
                data.push(parseFloat(currentValue));
              }
            }
            mes = data;
        });
    
        año.on('value', function(snapshot) {
          año = snapshot.val();
          if(año){
              var currentValue;
              var data = [];
              for(var key in año){
                currentValue = año[key];
                data.push(parseFloat(currentValue));
              }
            }
            año = data;
        });
    
        setInterval(function() {
          dataTableTime = new google.visualization.DataTable();
              dataTableTime.addColumn('datetime', 'Time');
              dataTableTime.addColumn('number', 'Temperatura');
          for(index = 0; index < qtyDatos; index++){
            dataTableTime.addRow(
              [new Date(año[index], mes[index]-1, dia[index], hora[index], minutos[index], 0, 0), temp[index]-1]);
          }
            chartTime.draw(dataTableTime, optionsChartTime);
        }, 1300);
    
    }
  }, false)
})();
     
(() =>{
  let botontherm1 = document.getElementById('bt4');
  botontherm1.addEventListener('click', () => {
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var dataTableTime = new google.visualization.DataTable();
          dataTableTime.addColumn('datetime', 'Time');
          dataTableTime.addColumn('number', 'Temperatura');
    
    var qtyDatos=200;
        // create options object with titles, colors, etc.
        var optionsChartTime = {
            title: "Therm 4",
            titleTextStyle: {
                       color: 'black',
                       fontSize: 20,
                       fontName: 'Arial',
                       bold: true,
                       italic: false
                    },
            hAxis: {title: "Tiempo", format:'HH:mm', titleTextStyle: {color: 'blue',fontSize: 22,
                         bold: true}},
            vAxis: {title: "Tempertura(°C)", titleTextStyle: {color: 'blue', fontSize: 22,
                         bold: true}, viewWindowMode:'explicit', viewWindow: {
            max:50,
            min:-40
        }},
            'width':900,
            'height':500,
            pointsVisible: true,
             backgroundColor: 'white',
             colors: ['blue'],
             curveType: 'function'
        };
    
    
        var formatDate = new google.visualization.DateFormat(
           { prefix: 'Time: ', pattern: "dd MMM HH:mm" });
    
        formatDate.format(dataTableTime, 0);
    
    
        var chartTime = new google.visualization.LineChart(document.getElementById("curve_chart"));
        var temp = firebase.database().ref('Refrigerador/TThe4').limitToLast(qtyDatos);
        var hora = firebase.database().ref('Refrigerador/Hora').limitToLast(qtyDatos);
        var minutos = firebase.database().ref('Refrigerador/Minutos').limitToLast(qtyDatos);
        var dia = firebase.database().ref('Refrigerador/Dia').limitToLast(qtyDatos);
        var mes = firebase.database().ref('Refrigerador/Mes').limitToLast(qtyDatos);
        var año = firebase.database().ref('Refrigerador/Ano').limitToLast(qtyDatos);
    
        temp.on('value', function(snapshot) {
          temp = snapshot.val();
          if(temp){
              var currentValue;
              var data = [];
              for(var key in temp){
                currentValue = temp[key];
                data.push(currentValue);
              }
            }
            temp = data;
        });
    
        hora.on('value', function(snapshot) {
          hora = snapshot.val();
          if(hora){
              var currentValue;
              var data = [];
              for(var key in hora){
                currentValue = hora[key];
                data.push(parseFloat(currentValue));
              }
            }
            hora = data;
        });
    
        minutos.on('value', function(snapshot) {
          minutos = snapshot.val();
          if(minutos){
              var currentValue;
              var data = [];
              for(var key in minutos){
                currentValue = minutos[key];
                data.push(parseFloat(currentValue));
              }
            }
            minutos = data;
        });
    
        dia.on('value', function(snapshot) {
          dia = snapshot.val();
          if(dia){
              var currentValue;
              var data = [];
              for(var key in dia){
                currentValue = dia[key];
                data.push(parseFloat(currentValue));
              }
            }
            dia = data;
        });
    
        mes.on('value', function(snapshot) {
          mes = snapshot.val();
          if(mes){
              var currentValue;
              var data = [];
              for(var key in mes){
                currentValue = mes[key];
                data.push(parseFloat(currentValue));
              }
            }
            mes = data;
        });
    
        año.on('value', function(snapshot) {
          año = snapshot.val();
          if(año){
              var currentValue;
              var data = [];
              for(var key in año){
                currentValue = año[key];
                data.push(parseFloat(currentValue));
              }
            }
            año = data;
        });
    
        setInterval(function() {
          dataTableTime = new google.visualization.DataTable();
              dataTableTime.addColumn('datetime', 'Time');
              dataTableTime.addColumn('number', 'Temperatura');
          for(index = 0; index < qtyDatos; index++){
            dataTableTime.addRow(
              [new Date(año[index], mes[index]-1, dia[index], hora[index], minutos[index], 0, 0), temp[index]-1]);
          }
            chartTime.draw(dataTableTime, optionsChartTime);
        }, 1300);
    
    }
  }, false)
})();
         
   
