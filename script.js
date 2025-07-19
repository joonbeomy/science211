document.addEventListener('DOMContentLoaded', () => {
    // Giraffe Chart
    const giraffeCtx = document.getElementById('giraffeChart').getContext('2d');
    new Chart(giraffeCtx, {
        type: 'bar',
        data: {
            labels: ['짧은 목', '중간 목', '긴 목'],
            datasets: [
                {
                    label: '선택 이전',
                    data: [30, 50, 20],
                    backgroundColor: '#a5f3fc', // cyan-200
                    borderColor: '#0891b2', // cyan-600
                    borderWidth: 2
                },
                {
                    label: '선택 이후 (오랜 시간 뒤)',
                    data: [5, 25, 70],
                    backgroundColor: '#4BB3FD', 
                    borderColor: '#006BA6',
                    borderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: '개체 수 비율 (%)'
                    }
                }
            },
            plugins: {
                title: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        title: function(tooltipItems) {
                            const item = tooltipItems[0];
                            let label = item.chart.data.labels[item.dataIndex];
                            if (Array.isArray(label)) {
                              return label.join(' ');
                            } else {
                              return label;
                            }
                        }
                    }
                }
            }
        }
    });

    // Biodiversity Chart
    const biodiversityCtx = document.getElementById('biodiversityChart').getContext('2d');
    new Chart(biodiversityCtx, {
        type: 'doughnut',
        data: {
            labels: ['유전적 다양성', '종 다양성', '생태계 다양성'],
            datasets: [{
                data: [1, 1, 1],
                backgroundColor: [
                    '#4BB3FD',
                    '#0496FF',
                    '#3E83C1'
                ],
                borderColor: '#FFFFFF',
                borderWidth: 4,
                hoverOffset: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        title: function(tooltipItems) {
                            const item = tooltipItems[0];
                            let label = item.chart.data.labels[item.dataIndex];
                            if (Array.isArray(label)) {
                              return label.join(' ');
                            } else {
                              return label;
                            }
                        }
                    }
                }
            }
        }
    });
});