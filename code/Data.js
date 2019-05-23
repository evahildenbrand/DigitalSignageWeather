class Data {
  constructor() {}
  getData() {
    let currentline;
    let lines;
    $.ajax({
      type: "GET",
      url: "http://www.zamg.ac.at/ogd/",
      dataType: "text",
      success: function(csv) {
        //Teilt die einzelnen Lines in ein Array
        lines = csv.split(/\r?\n|\r/);

        //macht aus der 1 Zeile (Wetter Hörsching) einen Array
        currentline = lines[index].split(";");
        return currentline;
      }
    });
  }
}
