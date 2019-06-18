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
//Variables de las operaciones
let cantidadm = document.getElementById('cantm');
let cantidadc = document.getElementById('cantc');
let cantidadd = document.getElementById('cantd');
let cantidadb = document.getElementById('cantb');

let etam = document.getElementById('etam');
let etac = document.getElementById('etac');
let etad = document.getElementById('etad');
let etab = document.getElementById('costb');

let costopcm = document.getElementById('costopcm');
let costopcc = document.getElementById('costopcc');
let costopcd = document.getElementById('costopcd');
let costopcb = document.getElementById('costopcb');

let costom = document.getElementById('costom');
let costoc = document.getElementById('costoc');
let costod = document.getElementById('costod');
let costob = document.getElementById('costob');

//Cambiar a rojo el texto
const parrafom = document.querySelector('#parrafom');
const parrafoc = document.querySelector('#parrafoc');
const parrafod = document.querySelector('#parrafod');
const parrafob = document.querySelector('#parrafob');
let mensaje = document.querySelector('#mensaje');

function nivelActual(para) {
    nivel = parseInt(para.value);
    if (nivel < 100) {
        autorizarNivel();
        return nivel;
    } else {
        alert('Ingrese un nivel menor de 100');
    }
}

function experenciaActual(para) {
    exp = parseInt(para.value)
    if (exp < 13034432) {
        autorizarNivel();
        return exp;
    } else {
        alert('Ingrese un nivel menor de 13034432');
    }
}

function objetivoAlcanzar(para) {
    obj = parseInt(para.value);
    if (obj < 100) {
        if (nivel < obj) {
            return obj;
        } else {
            alert('El objetivo tiene que ser mayor que el nivel')
        }
    } else {
        alert('Ingrese un objetivo menor a 100')
    }
}

function autorizarNivel() {
    let mind = nivel >= 13;
    let choos = nivel >= 35;
    let death = nivel >= 59;
    let boold = nivel >= 75;

    let mindd = exp >= 1833;
    let chooss = exp >= 22406;
    let deathh = exp >= 247886;
    let booldd = exp >= 1210421;

    if (nivel) {
        if (!mind) {
            parrafom.style.color = "#880000";
        } else {
            parrafom.style.color = "black";
        }
        if (!choos) {
            parrafoc.style.color = "#880000";
        } else {
            parrafoc.style.color = "black";
        }
        if (!death) {
            parrafod.style.color = "#880000";
        } else {
            parrafod.style.color = "black";
        }
        if (!boold) {
            parrafob.style.color = "#880000";
            mensaje.style.display = 'block';
        } else {
            parrafob.style.color = "black";
            mensaje.style.display = 'none';
        }
    }

    if (exp) {
        if (!mindd) {
            parrafom.style.color = "#880000";
        } else {
            parrafom.style.color = "black";
        }
        if (!chooss) {
            parrafoc.style.color = "#880000";
        } else {
            parrafoc.style.color = "black";
        }
        if (!deathh) {
            parrafod.style.color = "#880000";
        } else {
            parrafod.style.color = "black";
        }
        if (!booldd) {
            parrafob.style.color = "#880000";
            mensaje.style.display = 'block';
        } else {
            parrafob.style.color = "black";
            mensaje.style.display = 'none';
        }

    }
}

function imprimir() {
    fetch('./tabla.json')
        .then(response => {
            return response.json()
        })
        .then(datos => {
            for (let i = 0; i < datos.length; i++) {
                let opeobjn = datos[i].level;
                let opeobje = datos[i].exp;

                if (opeobjn === obj || opeobje === obj) {
                    if (opeobje > exp) {
                        ope = opeobje - exp || opeobjn - nivel;

                        $(document).ready(function () {

                            cantidadm = parseInt(ope / 11.5);
                            cantidadc = parseInt(ope / 22.5);
                            cantidadd = parseInt(ope / 34.5);
                            cantidadb = parseInt(ope / 42.5);

                            $("#cantm").html(Math.trunc(cantidadm));
                            $("#cantc").html(Math.trunc(cantidadc));
                            $("#cantd").html(Math.trunc(cantidadd));
                            $("#cantb").html(Math.trunc(cantidadb));

                            $(document).ready(function () {

                                etam = cantidadm / 1200;
                                etac = cantidadc / 1200;
                                etad = cantidadd / 1200;
                                etab = cantidadb / 1200;

                                $("#etam").html(etam.toFixed(1));
                                $("#etac").html(etac.toFixed(1));
                                $("#etad").html(etad.toFixed(1));
                                $("#etab").html(etab.toFixed(1));
                            });

                            costopcm = (min + (3 * fir) + (2 * air));//29 cost
                            costopcc = cha + (4 * fir) + (3 * air);//134 cost
                            costopcd = dea + (5 * fir) + (4 * air);//258 cost
                            costopcb = blo + (7 * fir) + (5 * air);//420 cost

                            $("#costopcm").html(Math.trunc(costopcm));
                            $("#costopcc").html(Math.trunc(costopcc));
                            $("#costopcd").html(Math.trunc(costopcd));
                            $("#costopcb").html(Math.trunc(costopcb));

                            $(document).ready(function () {

                                costom = cantidadm * costopcm;
                                costoc = cantidadc * costopcc;
                                costod = cantidadd * costopcd;
                                costob = cantidadb * costopcb;

                                function agregarComas(numero) {
                                    numero += '';
                                    x = numero.split('.');
                                    x1 = x[0];
                                    let rgx = /(\d+)(\d{3})/;
                                    while (rgx.test(x1)) {
                                        x1 = x1.replace(rgx, '$1' + ',' + '$2');
                                    }
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
                    } else {
                        alert('El objetivo tiene que ser mayor que la experencia y menor a 100')
                    }
                }
            }
        })
        .catch(error => {
            console.log(error)
        })
}

function buscarUsuario() {

    let ur = 'https://cors-anywhere.herokuapp.com/http://services.runescape.com/m=hiscore_oldschool/index_lite.ws?player='

    let usuariobuscar = document.querySelector('#usuariobusca')
    usuariobuscar = usuariobuscar.value;
    window.localStorage.getItem('usuariobuscar') || '';

    if (!usuariobuscar) {
        return;
    }

    let url = ur + usuariobuscar;
    console.log(url)

    fetch('./tabla.json')
        .then(response => {
            return response.json();
        })
        .then(datoss => {
            for (let i = 0; i < datoss.length; i++) {
                let objobjn = datoss[i].level;
                let objobje = datoss[i].exp

                if (objobjn === obj || objobje === obj) {
                    fetch(url)
                        .then(res => {
                            return res.text();
                        })
                        .then(datos => {
                            let cor = datos && datos.split(',');
                            if (!cor || cor.length < 17) {
                                return;
                            }

                            let magianl = parseInt(cor[15], 10); //nivel actual
                            console.log(magianl)

                            $(document).ready(function () {
                                $("#nivelactu").val(magianl)
                            })

                            let magiaexp = cor[16].split('\n')[0];

                            if (magianl > nivel) {
                                nivel = magiaexp + 1;
                            }
                            exp = parseInt(magiaexp, 10) //Experencia actual
                            console.log(exp)

                            $(document).ready(function () {
                                $("#expactu").val(exp)
                            })

                            ope = objobje - exp;

                            $(document).ready(function () {

                                cantidadm = parseInt(ope / 11.5);
                                cantidadc = parseInt(ope / 22.5);
                                cantidadd = parseInt(ope / 34.5);
                                cantidadb = parseInt(ope / 42.5);

                                $("#cantm").html(Math.trunc(cantidadm));
                                $("#cantc").html(Math.trunc(cantidadc));
                                $("#cantd").html(Math.trunc(cantidadd));
                                $("#cantb").html(Math.trunc(cantidadb));

                                $(document).ready(function () {

                                    etam = cantidadm / 1200;
                                    etac = cantidadc / 1200;
                                    etad = cantidadd / 1200;
                                    etab = cantidadb / 1200;

                                    $("#etam").html(etam.toFixed(1));
                                    $("#etac").html(etac.toFixed(1));
                                    $("#etad").html(etad.toFixed(1));
                                    $("#etab").html(etab.toFixed(1));
                                });

                                costopcm = (min + (3 * fir) + (2 * air));//29 cost
                                costopcc = cha + (4 * fir) + (3 * air);//134 cost
                                costopcd = dea + (5 * fir) + (4 * air);//258 cost
                                costopcb = blo + (7 * fir) + (5 * air);//420 cost

                                $("#costopcm").html(Math.trunc(costopcm));
                                $("#costopcc").html(Math.trunc(costopcc));
                                $("#costopcd").html(Math.trunc(costopcd));
                                $("#costopcb").html(Math.trunc(costopcb));

                                $(document).ready(function () {

                                    costom = cantidadm * costopcm;
                                    costoc = cantidadc * costopcc;
                                    costod = cantidadd * costopcd;
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
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }
            }
        })
        .catch(err => {
            console.log(err)
        })

    window.localStorage.setItem('usuariobuscar', usuariobuscar);
}