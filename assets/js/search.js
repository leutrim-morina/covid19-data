const search = document.getElementById('search')
const display = document.getElementById('data')


search.addEventListener('keyup', (e) => {
    switch(e.keyCode) {
        case 13:
            const url = `https://corona.lmao.ninja/v2/countries/${e.target.value}`
            fetch(url)
        .then(response => response.json())
        .then(data => {
          document.getElementById('data').style.display = "none";
          document.getElementById('stitle').style.display = "none";
          const dataElement = document.getElementById('sdata');
          dataElement.innerHTML = `
            <div id="cinfo">
            <img src="${data.countryInfo.flag} "alt="Flag" id="flag" width="200px" height="100%"/><br/>
            <h2 id="sh1">COVID-19 Stats for  ${data.country}</h2>
            
            </div>
            <div id="apidata">
            <p id="test1">Confirmed cases: <br>${numberWithCommas(data.cases)}</p>
            <p id="test2">Deaths: <br>${numberWithCommas(data.deaths)}</p>
            <p id="test3">Recovered: <br> ${numberWithCommas(data.recovered)}</p>
            </div>
          `;
        }).catch(e => document.write('Maybe Country dosent exist in our platform'))
        break
    }
});