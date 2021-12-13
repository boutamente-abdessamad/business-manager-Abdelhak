/****************************************/
/************ Instances Scripts **************/
/****************************************/

$(document).ready(() => {


    // start script 
    try {

    // bar chart client figure
    const ctx = document.getElementById('client_figure_bars').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'May','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: "Chiffre d’affaire du client",
                data: [250000, 200000, 150000, 100000, 5000, 0,250000, 200000, 150000, 100000, 5000, 0],
                backgroundColor: [
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                ],
                borderColor: [
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                    '#E7EDF8',
                ],
                borderWidth: 0
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    grid:{
                        display:false
                    }
                },
                x: {
                    grid:{
                        display:false
                    }
                },
           
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
        


    } catch (e) {
        console.log('Error In script detected');
        console.log('==========================');
        console.error(e);
    }
    // end script 




})