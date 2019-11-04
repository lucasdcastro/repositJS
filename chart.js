Chart.defaults.global.tooltips.enabled = false;
			var ctx_ban_def = document.getElementById("canvas_ban_def");
			var myChart = new Chart(ctx_ban_def, {
			  type: 'bar',
			  data: {
			    labels: ['dummy1', ' ', 'dummy2'],
			    datasets: [
			      {				  	
				    datalabels: {
		                color: '#000'
		            },							
			        type: 'bar',
			        label: 'A',
			        // the 1st and last value are placeholders and never get displayed on the chart
			        data: [0, 1600, 0],
					display: false,  
			      },				  
			      {
				  datalabels: {
		                display: false,
		            },					
			        type: 'line', 
			        label: 'B',
			        // the 1st and last value are placeholders and never get displayed on the chart
			        // to get a straight line, the 1st and last values must match the same value as
			        // the next/prev respectively
			        data: [2000, 2000, 2000],
			        fill: false,
			        borderWidth: 1,
			        borderColor: '#f00',
			        borderDash: [5,4],
			        lineTension: 0
			      }
			    ]
			  },
			  options: {
			  	legend: {
					    display: false,
					},			  			  			  
			    scales: {
			      yAxes: [{
			        ticks: {
			          beginAtZero: true,
					  autoSkip: false,
			        }
			      }],  
			      xAxes: [{
			        ticks: {
			          min: ' ',
			          max: ' ',
					  autoSkip: false,					  
			        }
			      }],
			    }
			  }
			});
			myChart.update();
			var ctx_ban_ac = document.getElementById("canvas_ban_ac");
			var myChart_ban_ac = new Chart(ctx_ban_ac, {
			  type: 'bar',
			  data: {
			    labels: ['dummy1', ' ', 'dummy2'],
			    datasets: [
			      {				  	
				    datalabels: {
		                color: '#000'
		            },							
			        type: 'bar',
			        label: 'A',
			        // the 1st and last value are placeholders and never get displayed on the chart
			        data: [0, 1800, 0],
					display: false,  
			      },				  
			      {
				  datalabels: {
		                display: false,
		            },					
			        type: 'line', 
			        label: 'B',
			        // the 1st and last value are placeholders and never get displayed on the chart
			        // to get a straight line, the 1st and last values must match the same value as
			        // the next/prev respectively
			        data: [1500, 1500, 1500],
			        fill: false,
			        borderWidth: 1,
			        borderColor: '#f00',
			        borderDash: [5,4],
			        lineTension: 0			        
			      }
			    ]
			  },
			  options: {
			  	legend: {
					    display: false,
					},			  			  			  
			    scales: {
			      yAxes: [{
			        ticks: {
			          beginAtZero: true,
					  autoSkip: false,
			        }
			      }],  
			      xAxes: [{
			        ticks: {
			          min: ' ',
			          max: ' ',
					  autoSkip: false,					  
			        }
			      }],
			    }
			  }
			});
			myChart_ban_ac.update();
			var ctx_ban_con = document.getElementById("canvas_ban_con");
			var myChart_ban_con = new Chart(ctx_ban_con, {
			  type: 'bar',
			  data: {
			    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun','Jul','Ago','Set','Out','Nov','Dez'],
			    datasets: [
			      {				  	
				    datalabels: {
		                color: '#000'
		            },							
			        type: 'bar',
			        label: 'A',
			        // the 1st and last value are placeholders and never get displayed on the chart
			        data: [75, 80, 70, 68, 80, 85, 45, 60, 75, 55, 90,65],					
			      }			   
			    ]
			  },
			  options: {
			  	responsive: true,
    			maintainAspectRatio: false,		  			  			  
			    scales: {
			      yAxes: [{
			        ticks: {
			          beginAtZero: true,
					  autoSkip: false,
			        }
			      }],  
			      xAxes: [{
			        ticks: {
			          min: ' ',
			          max: ' ',
					  autoSkip: false,					  
			        }
			      }],
			    }
			  }
			});
			myChart_ban_con.update();
			var ctx_car_ac = document.getElementById("canvas_car_ac");
			var myChart_car_ac = new Chart(ctx_car_ac, {
			  type: 'bar',
			  data: {
			    labels: ['dummy1', ' ', 'dummy2'],
			    datasets: [
			      {				  	
				    datalabels: {
		                color: '#000'
		            },							
			        type: 'bar',
			        label: 'A',
			        // the 1st and last value are placeholders and never get displayed on the chart
			        data: [0, 1400, 0],
					display: false,  
			      },				  
			      {
				  datalabels: {
		                display: false,
		            },					
			        type: 'line', 
			        label: 'B',
			        // the 1st and last value are placeholders and never get displayed on the chart
			        // to get a straight line, the 1st and last values must match the same value as
			        // the next/prev respectively
			        data: [1750, 1750, 1750],
			        fill: false,
			        borderWidth: 1,
			        borderColor: '#f00',
			        borderDash: [5,4],
			        lineTension: 0			        
			      }
			    ]
			  },
			  options: {
			  	legend: {
					    display: false,
					},			  			  			  
			    scales: {
			      yAxes: [{
			        ticks: {
			          beginAtZero: true,
					  autoSkip: false,
			        }
			      }],  
			      xAxes: [{
			        ticks: {
			          min: ' ',
			          max: ' ',
					  autoSkip: false,					  
			        }
			      }],
			    }
			  }
			});
			myChart_car_ac.update();
			var ctx_car_def = document.getElementById("canvas_car_def");
			var myChart_car_def = new Chart(ctx_car_def, {
			  type: 'bar',
			  data: {
			    labels: ['dummy1', ' ', 'dummy2'],
			    datasets: [
			      {				  	
				    datalabels: {
		                color: '#000'
		            },							
			        type: 'bar',
			        label: 'A',
			        // the 1st and last value are placeholders and never get displayed on the chart
			        data: [0, 1900, 0],
					display: false,  
			      },				  
			      {
				  datalabels: {
		                display: false,
		            },					
			        type: 'line', 
			        label: 'B',
			        // the 1st and last value are placeholders and never get displayed on the chart
			        // to get a straight line, the 1st and last values must match the same value as
			        // the next/prev respectively
			        data: [1700, 1700, 1700],
			        fill: false,
			        borderWidth: 1,
			        borderColor: '#f00',
			        borderDash: [5,4],
			        lineTension: 0			        
			      }
			    ]
			  },
			  options: {
			  	legend: {
					    display: false,
					},			  			  			  
			    scales: {
			      yAxes: [{
			        ticks: {
			          beginAtZero: true,
					  autoSkip: false,
			        }
			      }],  
			      xAxes: [{
			        ticks: {
			          min: ' ',
			          max: ' ',
					  autoSkip: false,					  
			        }
			      }],
			    }
			  }
			});
			myChart_car_def.update();