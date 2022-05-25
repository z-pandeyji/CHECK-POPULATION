function searchPopulation() {
  var name = document.getElementById('searchText').value;
  var url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();

  //Waiting for response
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var items = JSON.parse(xhr.response);
      var Population = new Array();
      items.forEach(function (value) {
        var countryPopulation = value.population;
        var countryName = value.name.official;
        if (
          countryPopulation !== '' &&
          countryPopulation !== undefined &&
          countryPopulation !== ',' &&
          countryName !== '' &&
          countryName !== undefined &&
          countryName !== ','
        ) {
          Population.push(
            `<br/>Official-Name:-<b>${countryName}</b><br/>Population:-<b>${countryPopulation}</b>`
          );
        }
      });
      let result = document.getElementById('results');
      result.style.backgroundColor = "lightgray";
      result.style.width = "50%";
      result.style.display = 'inline-block';
      result.style.color = "black";
      result.style.margin = '10px';
      result.style.padding = '25px';
      result.innerHTML = Population;
      // document.getElementById('results').innerHTML = Population;
    }
  };
}
