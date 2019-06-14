//Variables
let nivel = null;
let exp = null;
let obj = null;
let ope = null;
//Variables de suma de 1 solo costo
let min = 5;
let air = 5;
let fir = 5;
let cha = 99;
let dea = 213;
let blo = 360;

const parrafom = document.querySelector('#parrafom');
const parrafoc = document.querySelector('#parrafoc');
const parrafod = document.querySelector('#parrafod');
const parrafob = document.querySelector('#parrafob');

function nivelActual(para) {
    nivel = parseInt(para.value);
    if (nivel < 100) {
        autorizarNivel();
        return nivel;
    } else {
        alert('Ingrese un nivel menor de 100');
    }
    //console.log(nivel);
}

function experenciaActual(para) {
    exp = parseInt(para.value);
    if (exp < 13034432) {
        autorizarNivel();
        return exp;
    } else {
        alert('Ingrese un nivel menor de 13034432');
    }
}

function objetivoAlcanzar(para) {
    obj = parseInt(para.value);
    if (obj > exp && obj > nivel) {
        return obj;
    } else {
        alert('El objetivo tiene que ser mayor que el nivel o la experiencia')
    }
}

function autorizarNivel() {
    let mind = nivel >= 13;
    let choos = nivel >= 35;
    let death = nivel >= 59;
    let boold = nivel >= 75;

    if (!mind) {
        parrafom.style.color = "#880000";
        alert('Su nivel actual no se puede usar en spell con Fire Strike')
    } else {
        parrafom.style.color = "black";
    }

    if (!choos) {
        parrafoc.style.color = "#880000";
        alert('Su nivel actual no se puede usar en spell con Fire Bolt')
    } else {
        parrafoc.style.color = "black";
    }

    if (!death) {
        parrafod.style.color = "#880000";
        alert('Su nivel actual no se puede usar en spell con Fire Blast')
    } else {
        parrafod.style.color = "black";
    }

    if (!boold) {
        parrafob.style.color = "#880000";
        alert('Su nivel actual no se puede usar en spell con Fire Wave')
    } else {
        parrafob.style.color = "black";
    }
}

/*function imprimir() {
    $.getJSON("/tabla.txt", function (datos) {
        $.each(datos, function (i, item) {
            let opeel = datos[i].level;
            let opeexp = datos[i].exp;

            if (opeel === nivel || opeexp === exp) {
                $.getJSON("/tabla.txt", function (datos) {
                    $.each(datos, function (i, item) {
                        let opeobjn = datos[i].level;
                        let opeobje = datos[i].exp;

                        if (opeobjn === obj || opeobje === obj) {
                            ope = opeobje - opeexp;

                            $(document).ready(function () {

                                let cantidadm = $('cantm').text();
                                cantidadm = parseInt(ope / 11.5);

                                let cantidadc = $('cantc').text();
                                cantidadc = parseInt(ope / 22.5);

                                let cantidadd = $('cantd').text();
                                cantidadd = parseInt(ope / 34.5);

                                let cantidadb = $('cantb').text();
                                cantidadb = parseInt(ope / 42.5);

                                $("#cantm").html(Math.trunc(cantidadm));
                                $("#cantc").html(Math.trunc(cantidadc));
                                $("#cantd").html(Math.trunc(cantidadd));
                                $("#cantb").html(Math.trunc(cantidadb));

                                $(document).ready(function () {

                                    let etam = $('etam').text();
                                    etam = cantidadm / 1200;

                                    let etac = $('etac').text();
                                    etac = cantidadc / 1200;

                                    let etad = $('etad').text();
                                    etad = cantidadd / 1200;

                                    let etab = $('costb').text();
                                    etab = cantidadb / 1200;

                                    $("#etam").html(etam.toFixed(1));
                                    $("#etac").html(etac.toFixed(1));
                                    $("#etad").html(etad.toFixed(1));
                                    $("#etab").html(etab.toFixed(1));
                                });

                                let costopcm = $('costopcm').text();
                                costopcm = (min + (3 * fir) + (2 * air));//29 cost

                                let costopcc = $('costopcc').text();
                                costopcc = cha + (4 * fir) + (3 * air);//134 cost

                                let costopcd = $('costopcd').text();
                                costopcd = dea + (5 * fir) + (4 * air);//258 cost

                                let costopcb = $('costopcb').text();
                                costopcb = blo + (7 * fir) + (5 * air);//420 cost

                                $("#costopcm").html(Math.trunc(costopcm));
                                $("#costopcc").html(Math.trunc(costopcc));
                                $("#costopcd").html(Math.trunc(costopcd));
                                $("#costopcb").html(Math.trunc(costopcb));

                                $(document).ready(function () {
                                    let costom = $('costom').text();
                                    costom = cantidadm * costopcm;

                                    let costoc = $('costoc').text();
                                    costoc = cantidadc * costopcc;

                                    let costod = $('costod').text();
                                    costod = cantidadd * costopcd;

                                    let costob = $('costob').text();
                                    costob = cantidadb * costopcb;

                                    function agregarComas(numero) {
                                        numero += '';
                                        x = numero.split('.');
                                        x1 = x[0];
                                        let rgx = /(\d+)(\d{3})/;
                                        while (rgx.test(x1)) {
                                            x1 = x1.replace(rgx, '$1' + ',' + '$2');
                                        }
                                        //return x1 + x2;
                                        return x1;
                                    }

                                    costom = agregarComas(costom);
                                    costoc = agregarComas(costoc);
                                    costod = agregarComas(costod);
                                    costob = agregarComas(costob);

                                    $("#costom").html(costom);
                                    $("#costoc").html(costoc);
                                    $("#costod").html(costod);
                                    $("#costob").html(costob);
                                });
                            });
                        }
                    });
                });
            }
        });
    });
}*/

function imprimir() {
    fetch('./tabla.json')
        .then(response => {
            return response.json()
        })
        .then(datos => {
            for (let i = 0; i < datos.length; i++) {
                let opeel = datos[i].level;
                let opeexp = datos[i].exp;

                if (opeel === exp || opeexp === exp || opeel === nivel || opeexp === nivel) {
                    for (let i = 0; i < datos.length; i++) {
                        let opeobjn = datos[i].level;
                        let opeobje = datos[i].exp;

                        if (opeobjn === obj || opeobje === obj) {
                            ope = opeobje - opeexp;

                            $(document).ready(function () {
                                let cantidadm = document.getElementById('cantm');
                                cantidadm = parseInt(ope / 11.5);

                                let cantidadc = document.getElementById('cantc');
                                cantidadc = parseInt(ope / 22.5);

                                let cantidadd = document.getElementById('cantd');
                                cantidadd = parseInt(ope / 34.5);

                                let cantidadb = document.getElementById('cantb');
                                cantidadb = parseInt(ope / 42.5);

                                $("#cantm").html(Math.trunc(cantidadm));
                                $("#cantc").html(Math.trunc(cantidadc));
                                $("#cantd").html(Math.trunc(cantidadd));
                                $("#cantb").html(Math.trunc(cantidadb));

                                $(document).ready(function () {

                                    let etam = document.getElementById('etam');
                                    etam = cantidadm / 1200;

                                    let etac = document.getElementById('etac');
                                    etac = cantidadc / 1200;

                                    let etad = document.getElementById('etad');
                                    etad = cantidadd / 1200;

                                    let etab = document.getElementById('costb');
                                    etab = cantidadb / 1200;

                                    $("#etam").html(etam.toFixed(1));
                                    $("#etac").html(etac.toFixed(1));
                                    $("#etad").html(etad.toFixed(1));
                                    $("#etab").html(etab.toFixed(1));
                                });

                                let costopcm = document.getElementById('costopcm');
                                costopcm = (min + (3 * fir) + (2 * air));//29 cost

                                let costopcc = document.getElementById('costopcc');
                                costopcc = cha + (4 * fir) + (3 * air);//134 cost

                                let costopcd = document.getElementById('costopcd');
                                costopcd = dea + (5 * fir) + (4 * air);//258 cost

                                let costopcb = document.getElementById('costopcb');
                                costopcb = blo + (7 * fir) + (5 * air);//420 cost

                                $("#costopcm").html(Math.trunc(costopcm));
                                $("#costopcc").html(Math.trunc(costopcc));
                                $("#costopcd").html(Math.trunc(costopcd));
                                $("#costopcb").html(Math.trunc(costopcb));

                                $(document).ready(function () {
                                    let costom = document.getElementById('costom');
                                    costom = cantidadm * costopcm;

                                    let costoc = document.getElementById('costoc');
                                    costoc = cantidadc * costopcc;

                                    let costod = document.getElementById('costod');
                                    costod = cantidadd * costopcd;

                                    let costob = document.getElementById('costob');
                                    costob = cantidadb * costopcb;

                                    function agregarComas(numero) {
                                        numero += '';
                                        x = numero.split('.');
                                        x1 = x[0];
                                        let rgx = /(\d+)(\d{3})/;
                                        while (rgx.test(x1)) {
                                            x1 = x1.replace(rgx, '$1' + ',' + '$2');
                                        }
                                        //return x1 + x2;
                                        return x1;
                                    }

                                    costom = agregarComas(costom);
                                    costoc = agregarComas(costoc);
                                    costod = agregarComas(costod);
                                    costob = agregarComas(costob);

                                    $("#costom").html(costom);
                                    $("#costoc").html(costoc);
                                    $("#costod").html(costod);
                                    $("#costob").html(costob);
                                })
                            })
                        }
                    }
                }
            }
        })
        .catch(error => {
            console.log(error.mensaje)
        })
}