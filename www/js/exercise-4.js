/**
 * #############################
 * ##  E J E R C I C I O   4  ##
 * #############################
 *
 * Obtener un array con los nombres de todos los municipios de la provincia de Lugo (Galicia)
 * ordenados por orden alfabético inverso (de la Z a la A). Deberás hacer uso de fetch y
 * async / await.
 *
 * Para facilitarte esta tarea dispones de la siguiente API: https://www.el-tiempo.net/api
 *
 * Debes entrar en la web y leer la documentación para encontrar la URL que necesitas. En
 * este caso es bastante simple e intuitivo. ¡A por todas! ;)
 *
 */

'use strict';
const url = 'https://www.el-tiempo.net/api/json/v2/provincias';

async function province(url) {
  const response = await fetch(url);
  const codProvince = await response.json();
  const lugo = codProvince.provincias[26].CODPROV;
  const urlProv = `${url}/${lugo}/municipios`;
  const responseProvince = await fetch(urlProv);
  const municipalities = await responseProvince.json();

  const arrayProvince = [];

  for (const municipality of municipalities.municipios) {
    arrayProvince.push(municipality.NOMBRE);
  }

  arrayProvince.sort().reverse();

  for (const municipality of arrayProvince) {
    console.log(municipality);
  }
}

province(url);
