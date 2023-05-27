let temperaturasFarenheit = [32, 50, 77, 80, 42, 66, 25, 33,
    31, 40, 65, 70];    // ºF
let temperaturasCelsius = [];
temperaturasCelsius[0] = (temperaturasFarenheit[0]-32) * 5/9;
temperaturasCelsius[1] = (temperaturasFarenheit[1]-32) * 5/9;
temperaturasCelsius[2] = (temperaturasFarenheit[2]-32) * 5/9;
temperaturasCelsius[3] = (temperaturasFarenheit[3]-32) * 5/9;
temperaturasCelsius[4] = (temperaturasFarenheit[4]-32) * 5/9;
temperaturasCelsius[5] = (temperaturasFarenheit[5]-32) * 5/9;
temperaturasCelsius[6] = (temperaturasFarenheit[6]-32) * 5/9;
temperaturasCelsius[7] = (temperaturasFarenheit[7]-32) * 5/9;
temperaturasCelsius[8] = (temperaturasFarenheit[8]-32) * 5/9;
temperaturasCelsius[9] = (temperaturasFarenheit[9]-32) * 5/9;
temperaturasCelsius[10] = (temperaturasFarenheit[10]-32) * 5/9;
temperaturasCelsius[11] = (temperaturasFarenheit[11]-32) * 5/9;

let promedioTemperaturasCelsius = (temperaturasCelsius[0]+temperaturasCelsius[1]+temperaturasCelsius[2]+temperaturasCelsius[3]+temperaturasCelsius[4]+temperaturasCelsius[5]+temperaturasCelsius[6]+temperaturasCelsius[7]+temperaturasCelsius[8]+temperaturasCelsius[9]+temperaturasCelsius[10]+temperaturasCelsius[11]) / temperaturasCelsius.length;
console.log(promedioTemperaturasCelsius);


