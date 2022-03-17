//  Ivan Eremeev - 2022
//  Telegram: @IvanMessage
//  Email: ivan.frontcoder@gmail.com

$(document).ready(function () {

	// Аккордеон
	function accordion() {
		if ($('.accordion').length) {
			$('.accordion').each(function () {
				var accordion = $(this),
					trigger = accordion.find('.accordion__trigger'),
					content = accordion.find('.accordion__content'),
					time = 300;
				trigger.on('click', function () {
					var $thisTrigger = $(this),
						data = $thisTrigger.data('trigger');
					if (!$thisTrigger.hasClass('active')) {
						content.slideUp(
							time,
							function () {
								$(this).removeClass('open')
							}
						);
						trigger.removeClass('active');
						$thisTrigger.addClass('active');
						accordion.find('#' + data).stop().slideDown(
							time,
							function () {
								$(this).addClass('open')
							}
						);
					} else {
						$thisTrigger.removeClass('active');
						accordion.find('#' + data).stop().slideUp(
							time,
							function () {
								$(this).removeClass('open')
							}
						);
					}
				})
			})
		}
	}
	accordion();

	// Hightcharts | Графики
	Highcharts.setOptions({
		chart: {
			type: 'column',
			backgroundColor: '#180f46',
			borderWidth: 0,
			plotBackgroundColor: '#180f46',
			plotShadow: false,
			plotBorderWidth: 0,
			spacingBottom: 10,
			spacingTop: 10,
			spacingLeft: 5,
			spacingRight: 5,
		},
		title: false,
		legend: false,
		xAxis: {
			categories: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
				'Oct',
				'Nov',
				'Dec'
			],
			crosshair: true,
			labels: {
				style: {
					color: '#b5b5bd',
				}
			}
		},
		yAxis: {
			title: false,
			labels: {
				style: {
					color: '#b5b5bd',
				}
			},
			gridLineColor: '#261d5a',
		},
		plotOptions: {
			series: {
				pointPadding: 0.05,
				groupPadding: 0,
				borderWidth: 0,
				shadow: false,
				dataLabels: {
					enabled: true,
				}
			},
			column: {
				color: {
					linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
					stops: [
						[0, '#31A877'],
						[1, '#4B3EDE']
					]
				},
			},
		},
		credits: {
			enabled: false,
		},
	});

	function charts(chartBlock, chartButtons) {
		var chartId = chartBlock.attr('id');
		var dataColumns = chartBlock.data('columns');
		var button = chartButtons.find('li');
		var chart = new Highcharts.Chart({
			chart: {
				renderTo: chartId,
			},
			series: [{
				name: "Прирост",
				data: dataColumns,
			}]
		});
		button.on('click', function () {
			var dataBtn = $(this).data('columns');
			button.removeClass('active');
			$(this).addClass('active');
			chart.update({
				series: [{
					data: dataBtn,
				}]
			});
		})
	}
	charts($('#highcahrts_0'), $('#years_0'));
	charts($('#highcahrts_1'), $('#years_1'));
	charts($('#highcahrts_2'), $('#years_2'));

});