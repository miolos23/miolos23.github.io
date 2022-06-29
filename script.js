const lineChart = document.getElementById('lineChart');

const labels = [
    '22 Maj',
    '23 Maj',
    '24 Maj',
    '25 Maj',
    '26 Maj',
    '27 Maj',
    '28 Maj',
    '29 Maj',
    '30 Maj',
    '31 Maj',
    '01 Jun',
    '02 Jun',
    '03 Jun',
    '04 Jun',
    '05 Jun',
    '06 Jun',
    '07 Jun',
    '08 Jun',
    '09 Jun'
];

new Chart(lineChart, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Povratni pregledi',
                data: [1844 , 1554 , 1273 , 1284 , 1126 , 946 , 964 , 1793 , 1432 , 1130 , 1074 , 954 , 856 , 833 , 1536 , 1416 , 1248 , 1226],
                borderColor: 'rgba(66, 138, 245, 1)',
            },
            {
                label: 'Novi pregledi',
                data: [1199 , 1314 , 1147 , 1403 , 1217 , 1015 , 1138 , 1272 , 957 , 862 , 716 , 712 , 610 , 585 , 847 , 744 , 756 , 781],
                borderColor: 'rgba(235, 134, 52, 1)',
            }
        ]
    }
});