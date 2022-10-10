var vg_1 = "florida_cand.vg.json";
vegaEmbed("#task1-vis", vg_1).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "visualization.vg.json";
vegaEmbed("#task2-vis", vg_2).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);