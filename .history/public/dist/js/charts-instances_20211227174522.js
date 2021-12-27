/****************************************/
/************ Instances Scripts **************/
/****************************************/

$(document).ready(() => {


    // start script 
    try {

    // bar chart client figure
    if (document.getElementById('client_figure_bars')) {
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
                        },
                        ticks: {
                            font: {
                            family: "Poppins",
                            style: "normal",
                            weight: "normal",
                            style: 12,
                            }
                        }
                    },
                    x: {
                        grid:{
                            display:false
                        },
                         ticks: {
                            font: {
                            size: 12,
                            family: "Poppins",
                            style: "normal",
                            weight: "normal",
                            }
                        }
                    },
               
                },
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            }
        });
    }
    // bar chart client figure
    if (document.getElementById('cash_available_line_chart')) {
        const cash_available_line_chart_ctx = document.getElementById('cash_available_line_chart').getContext('2d');
        const cash_available_line_chart = new Chart(cash_available_line_chart_ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'May','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: "Chiffre d’affaire du client",
                    data: [1000, 800,600,400, 100, 0, 50,-100,-400,500, 300, 350],
                    fill: false,
                    borderColor: '#E7EDF8',
                    borderJoinStyle: 'round',
                    pointHitRadius: '30',
                    tension: 0.1
                    
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        grid:{
                            display:false
                        },
                        ticks: {
                            font: {
                            family: "Poppins",
                            style: "normal",
                            weight: "normal",
                            style: 12,
                            }
                        }
                    },
                    x: {
                        grid:{
                            display:false
                        },
                         ticks: {
                            font: {
                            size: 12,
                            family: "Poppins",
                            style: "normal",
                            weight: "normal",
                            }
                        }
                    },
               
                },
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            }
        });
    }




    } catch (e) {
        console.log('Error In script detected');
        console.log('==========================');
        console.error(e);
    }
    // end script 




})