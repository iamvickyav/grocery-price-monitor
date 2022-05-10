function exec() {
  var data = [{
    label: "Horlicks Box",
    data: ["May-2020", "Jul-2020", "Dec-2020", "Feb-2021", "Apr-2021"],
    price: [219, 219, 229, 229, 230]
  }, {
    label: "Horlicks Pouch",
    data: ["May-2021", "Jul-2021", "Aug-2021", "Sep-2021", "Oct-2021", "Dec-2021", "Mar-2022", "Apr-2022", "May-2022"],
    price: [182, 182, 188, 182, 182, 190, 190]
  }, {
    label: "SVS - கடலை எண்ணெய் 500ml",
    data: ["May-20", "Jun-20", "Jul-20", "Oct-20", "Dec-20", "Feb-21", "Apr-21", "May-21", "Jul-21", "Aug-21", "Oct-21", "Dec-21", "Mar-22", "May-22"],
    price: [94, 92, 85, 81, 85.5, 86, 94, 95, 92, 91, 90, 90.5, 91, 97]
  }, {
    label: "Chakra Tea",
    data: ["May-20", "Jun-20", "Jul-20", "Oct-20", "Dec-20", "Apr-21", "May-21", "Jul-21", "Aug-21", "Oct-21", "Dec-21", "Mar-22", "Apr-22"],
    price: [151, 153, 156, 156, 166, 176, 176, 176, 190, 190, 190, 195, 198]
  }, {
    label: "Cumbu",
    data: ["May-20", "Jun-20", "Jul-20", "Oct-20", "Feb-21", "Apr-21", "May-21"],
    price: [10, 10, 10, 9.6, 9.6, 9.6, 9.6]
  }, {
    label: "Kezvaragu",
    data: ["May-20", "Jun-20", "Jul-20"],
    price: [11, 10, 10]
  }, {
    label: "Milagu",
    data: ["May-20", "Jun-20", "Jul-20", "Oct-20", "Dec-20", "Feb-21", "Apr-21", "May-21"],
    price: [27, 24, 24, 24, 25, 25, 28, 29]
  }, {
    label: "Kadugu",
    data: ["May-20", "Jun-20", "Jul-20", "Oct-20", "Feb-21", "Apr-21", "May-21", "Jul-21"],
    price: [12, 12, 12, 12, 13, 13, 13, 11.6]
  }, {
    label: "Venthayam",
    data: ["May-20", "Jun-20", "Jul-20", "Oct-20", "Feb-21", "Apr-21", "May-21", "Jul-21"],
    price: [15, 14, 14, 15, 14, 16, 16, 15]
  }, {
    label: "Karamani",
    data: ["Jun-20", "Jul-20", "Dec-20"],
    price: [18, 19.6, 18.8]
  }, {
    label: "Muzhu Payar Polish",
    data: ["May-20", "Jun-20", "Jul-20", "Oct-20", "Feb-21", "Apr-21", "May-21", "Jul-21"],
    price: [15, 14, 14, 15, 14, 16, 16, 15]
  }, {
    label: "Samai",
    data: ["Jun-20", "Jul-20"],
    price: [19.6, 20]
  }]

  data.forEach((e, index) => {
    var ctx = document.getElementById('myChart' + index).getContext('2d');
    var dataTemplate = prepareTemplate(e)
    prepareChart(ctx, dataTemplate)
  });
}

function prepareChart(ctx, data) {
  new Chart(ctx, data);
}

function prepareTemplate(input) {
  return {
    type: 'line',
    data: {
      labels: input.data,
      datasets: [{
        data: input.price,
        label: input.label,
        borderColor: '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
        backgroundColor: "#000",
        fill: false,
        tension: 0.9
      }]
    },
  };
}