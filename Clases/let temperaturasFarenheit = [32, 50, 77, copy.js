let temperaturasFarenheit = [32, 50, 77, 80, 42, 66, 25, 33,
    31, 40, 65, 70];    // ºF
    let promedioTemperaturasFarenheit= (temperaturasFarenheit[0]+temperaturasFarenheit[1]+temperaturasFarenheit[2]+temperaturasFarenheit[3]+temperaturasFarenheit[4]+temperaturasFarenheit[5]+temperaturasFarenheit[6]+temperaturasFarenheit[7]+temperaturasFarenheit[8]+temperaturasFarenheit[9]+temperaturasFarenheit[10]+temperaturasFarenheit[11]) / temperaturasFarenheit.length;
    promedioTemperaturasCelsius = (promedioTemperaturasFarenheit - 32) * 5 / 9;
    console.log(promedioTemperaturasCelsius)