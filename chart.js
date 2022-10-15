var incidents_map = "charts/incidents_map.json";
var top_sharks_stacked = "charts/top_sharks_stacked.json";
var timing_bubble = "charts/timing_bubble.json"
var victim_activity_radial = "charts/victim_activity_radial.json"
var trend_line_bar = "charts/trend_line_bar.json"

// Chart 1
vegaEmbed("#incidents_map", incidents_map, {"actions":false}).then(function(result) {
}).catch(console.error);

// Chart 2
vegaEmbed("#top_sharks_stacked", top_sharks_stacked, {"actions":false}).then(function(result) {
}).catch(console.error);

// Chart 3
vegaEmbed("#trend_line_bar", trend_line_bar, {"actions":false}).then(function(result) {
}).catch(console.error);

// Chart 5
vegaEmbed("#timing_bubble", timing_bubble, {"actions":false}).then(function(result) {
}).catch(console.error);

// Chart 6
vegaEmbed("#victim_activity_radial", victim_activity_radial, {"actions":false}).then(function(result) {
}).catch(console.error);