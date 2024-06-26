export const chartAreaConfig = {
  chart: {
    height: '100%',
    maxWidth: '100%',
    type: 'area',
    fontFamily: 'Inter, sans-serif',
    dropShadow: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  tooltip: {
    enabled: true,
    x: {
      show: false
    },
    y: {
      formatter: (price: number) =>
        price.toLocaleString('en-US', {
          currency: 'USD',
          style: 'currency'
        })
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: '#1C64F2',
      gradientToColors: ['#1C64F2']
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 6
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0
    }
  },
  xaxis: {
    categories: [
      // '01 February',
      // '02 February',
      // '03 February',
      // '04 February',
      // '05 February',
      // '06 February',
      // '07 February'
    ],
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false
  }
}
