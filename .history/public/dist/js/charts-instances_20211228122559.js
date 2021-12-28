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
    // line chart client figure
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
                    pointHitRadius: 30,
                    pointRadius: 5,
                    pointHoverRadius: 5,
                    radius: 6 ,     
                    // pointBorderWidth: '20',
                    backgroundColor: "#E7EDF8",
                    pointBorderColor: "#FFFFFF",
                    // pointHoverBackgroundColor: "#55bae7",
                    // pointHoverBorderColor: "#55bae7",
                    tension: 0.1,
                    pointBackgroundColor: function(context) {
                        var index = context.dataIndex;
                        var value = context.dataset.data[index];
                        return value < 0 ? '#F8485E' : '#67DFD5';
                    }
                    
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
                bezierCurve: false,
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
    // bar chart Évolution du chiffre d'affaire
    if (document.getElementById('turnover_evolution_bar_chart')) {
        const turnover_evolution_bar_chart_ctx = document.getElementById('turnover_evolution_bar_chart').getContext('2d');
        var achatsData = {
            label: 'Achats',
            data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638,688,1502,528,1200],
            backgroundColor: '#FED198',
            borderWidth: 8,
            borderColor:"#FFFFFF",
            // yAxisID: "y-axis-density"
        };

            var ventesData = {
                label: 'Ventes',
                data: [3427, 2243, 4514, 1933, 326, 1687, 271, 2638,2688,3502,5528,3200],
                backgroundColor: '#5DDDD3',
                borderWidth: 8,
                borderColor:"#FFFFFF",
                // yAxisID: "y-axis-gravity"
            };

            var turnoverEvolutionYearsData = {
                labels: ['01/2021', '02/2021', '03/2021', '04/2021', '05/2021', '06/2021','07/2021', '08/2021', '09/2021', '10/2021', '11/2021', '12/2021'],
                datasets: [achatsData, ventesData]
            };
        const cash_available_line_chart = new Chart(turnover_evolution_bar_chart_ctx, {
            type: 'bar',
            data:turnoverEvolutionYearsData,
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
                bezierCurve: false,
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                    },
                },
            }
        });
    }

    // doughnut chart Les dépenses
     if (document.getElementById('expenses_doughnut_chart')) {
        const expenses_doughnut_chart_ctx = document.getElementById('expenses_doughnut_chart').getContext('2d');
        var expenses_doughnut_chart_data = {
            labels: ['loyer', 'les salaires', 'fournisseur de matières premières'],
            datasets: [
                {
                    label: 'fournisseur de matières premières',
                    data: [10,30,60],
                    backgroundColor: [
                        '#ED847E',
                        '#FED198',
                        '#737CD2',
                    ],
                    borderColor: [
                        '#ED847E',
                        '#FED198',
                        '#737CD2',
                    ],
                    borderWidth: 5
                },
               
            ]
        };

           
        const  expenses_doughnut_chart = new Chart(expenses_doughnut_chart_ctx, {
            type: 'doughnut',
            data:expenses_doughnut_chart_data,
            options: {
                responsive: true,
                 cutoutPercentage: 10, 
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