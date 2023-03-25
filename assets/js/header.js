
function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
  return x;
}


// API PER GJITHA RASTET 
const url = 'https://corona.lmao.ninja/v2/all';

      fetch(url)
        .then(response => response.json())
        .then(data => {
          const dataElement = document.getElementById('data');
          dataElement.innerHTML = `
            <p id="test1">Confirmed cases : <br/> ${numberWithCommas(data.cases)}</p>
            <p id="test2">Deaths : <br/>  ${numberWithCommas(data.deaths)}</p>
            <p id="test3">Recovered : <br/>  ${numberWithCommas(data.recovered)}</p>

          `;
        })
        .catch(error => document.write('ERROR'));

       
