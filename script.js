async function exec() {
  try {
     const first = await fetch('./data.json'); //<-- wait for the fetch to finish and return the resolved value. 
     let data = await first.json(); //<-- use the const first, not first_name
     data.forEach((e, index) => {
      var ctx = document.getElementById('myChart' + index).getContext('2d');
      var dataTemplate = prepareTemplate(e)
      prepareChart(ctx, dataTemplate)
    });
   }
   catch(e) {
     console.log('Error!', e);
   }
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
