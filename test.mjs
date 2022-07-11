import ErgastClient from "ergast-client"
let ergast = new ErgastClient();

ergast.getSeason("2022", function(err, season) {
});
