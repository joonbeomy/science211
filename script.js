document.addEventListener('DOMContentLoaded', function() {
    const sections = [
        { id: 'intro', name: '소개' },
        { id: 'precambrian', name: '선캄브리아 시대' },
        { id: 'paleozoic', name: '고생대' },
        { id: 'mesozoic', name: '중생대' },
        { id: 'cenozoic', name: '신생대' },
        { id: 'present', name: '현재와 미래' }
    ];

    const navContainer = document.getElementById('nav-container');

    sections.forEach(section => {
        const button = document.createElement('button');
        button.textContent = section.name;
        button.className = 'nav-button px-3 py-2 text-sm md:px-4 md:py-2 md:text-base rounded-full transition-colors duration-300 hover:bg-purple-200';
        button.onclick = () => {
            document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' });
        };
        navContainer.appendChild(button);
    });
    
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section, #intro');

    window.addEventListener('scroll', () => {
        let current = '';
        contentSections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navButtons.forEach(button => {
            const correspondingSection = sections.find(s => s.name === button.textContent);
            if (correspondingSection && correspondingSection.id === current) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    });


    const eraLengthCtx = document.getElementById('eraLengthChart').getContext('2d');
    new Chart(eraLengthCtx, {
        type: 'bar',
        data: {
            labels: ['지질 시대'],
            datasets: [
                { label: '선캄브리아 시대 (40.59억 년)', data: [4059], backgroundColor: '#a5b4fc', borderWidth: 1, barPercentage: 0.5 },
                { label: '고생대 (2.89억 년)', data: [289], backgroundColor: '#7dd3fc', borderWidth: 1, barPercentage: 0.5 },
                { label: '중생대 (1.86억 년)', data: [186], backgroundColor: '#6ee7b7', borderWidth: 1, barPercentage: 0.5 },
                { label: '신생대 (0.66억 년)', data: [66], backgroundColor: '#fde047', borderWidth: 1, barPercentage: 0.5 }
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { stacked: true, display: false },
                y: { stacked: true, display: false }
            },
            plugins: {
                legend: { position: 'bottom' },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label;
                        }
                    }
                },
                title: {
                    display: true,
                    text: '지질 시대의 상대적 길이 (단위: 백만 년)',
                    padding: { top: 10, bottom: 20 }
                }
            }
        }
    });

    const extinctionCtx = document.getElementById('extinctionChart').getContext('2d');
    new Chart(extinctionCtx, {
        type: 'line',
        data: {
            labels: ['캄브리아기', '오르도비스기', '실루리아기', '데본기', '석탄기', '페름기', '트라이아스기', '쥐라기', '백악기', '고제3기', '신제3기', '제4기'],
            datasets: [{
                label: '상대적 생물 다양성',
                data: [20, 85, 90, 110, 120, 150, 70, 140, 180, 80, 160, 150],
                fill: true,
                borderColor: 'rgb(168, 85, 247)',
                backgroundColor: 'rgba(168, 85, 247, 0.2)',
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: '지질 시대별 생물 다양성 변화 (개념도)'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { display: false }
                }
            }
        }
    });

    const flowSteps = document.querySelectorAll('.flow-step');
    flowSteps.forEach(step => {
        step.addEventListener('click', () => {
            const text = step.querySelector('.flow-text');
            text.classList.toggle('hidden');
        });
    });
});