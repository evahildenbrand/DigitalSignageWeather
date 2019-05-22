class Data{
}
Data.prototype.getData = function () {
    let currentline;
    let lines;
      Promise.all(
        ["tawes1h.csv", "http://www.zamg.ac.at/ogd/"].map(function(url) {
          return fetch(url)
            .then(function(response) {
              return response.ok
                ? response.text()
                : Promise.reject(response.status);
            })
            .then(function(text) {

              //Teilt die einzelnen Lines in ein Array
              lines = text.split(/\r?\n|\r/);

              //macht aus der 1 Zeile (Wetter Hörsching) einen Array
              currentline = lines[index].split(";");
            });
        })
    );  
    return currentline;
}