        // Function to change iframe source based on card ID
        function changeDashboard(cardId) {
            const iframe = document.getElementById('dashboard-frame');
            const cards = document.querySelectorAll('.card');
            
            // Remove active class from all cards
            cards.forEach(card => {
                card.classList.remove('card_active');
            });
            
            // Add active class to clicked card
            document.getElementById(cardId).classList.add('card_active');
            
            // Set iframe source based on card ID using switch case
            switch(cardId) {
                case 'resumo':
                    iframe.src = 'https://app.powerbi.com/view?r=eyJrIjoiZWU4ZGZkNmEtODk2My00YmQzLTkzYzQtYjhhMGI1N2NkOTIzIiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9';
                    break;
                case 'one-page':
                    iframe.src = 'https://app.powerbi.com/view?r=eyJrIjoiOThjNWZiZWEtNzUyOC00MGJkLTliOTYtMWQ5OGVlNTczMWQ4IiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9';
                    break;
                case 'iad':
                    iframe.src = 'https://app.powerbi.com/view?r=eyJrIjoiZjc2ZTYzMGItYWMyYS00ZjNhLWIwYjMtZTgxODdiYWNjYTMwIiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9';
                    break;
                case 'tcl':
                    iframe.src = 'https://app.powerbi.com/view?r=eyJrIjoiMzhjMDRkZTctNWJkYi00NjU5LTg1MzMtZmUxN2VlNTllOTVlIiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9';
                    break;
                case 'tempos':
                    iframe.src = 'https://app.powerbi.com/view?r=eyJrIjoiNzllY2EzZDAtMDE2OS00ZmNlLWE3NjItNmE3YTAxMjBmZTYzIiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9';
                    break;
                case 'celeridade':
                    iframe.src = 'https://app.powerbi.com/view?r=eyJrIjoiYWFjZWZmZDAtYjVjNi00NmYzLThmN2ItNTg4ZTk4NTVkODBmIiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9';
                    break;
                case 'metas':
                    iframe.src = 'https://app.powerbi.com/view?r=eyJrIjoiOTViY2Y1ZWYtNGY1ZS00ZjJmLTkwODUtY2Y5NjMyNDYyMDkzIiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9';
                    break;
                case 'processos':
                    iframe.src = 'https://app.powerbi.com/view?r=eyJrIjoiMzRjMmI2ZDctOTJkNi00MzA1LTg5MDctYjkxN2VhZTJhZTY2IiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9';
                    break;
                case 'litigiosidade':
                    iframe.src = 'https://app.powerbi.com/view?r=eyJrIjoiYmI5ZTU0MjYtMTk3ZS00ZDg2LWI2ODEtMDJiNmJmMGFjNWNmIiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9';
                    break;
                case 'violencia':
                    iframe.src = 'https://app.powerbi.com/view?r=eyJrIjoiYjYyNmMyMmQtMjMwYi00MTFmLTkyZjUtMTg0YWNkY2M0Y2QyIiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9';
                    break;
                default:
                    iframe.src = 'https://app.powerbi.com/view?r=eyJrIjoiZWU4ZGZkNmEtODk2My00YmQzLTkzYzQtYjhhMGI1N2NkOTIzIiwidCI6ImIxY2E3YTgxLWFiZjgtNDJlNS05OGM2LWYyZjJhOTMwYmEzNiJ9';
            }
        }
        
        // Add click event listener to all cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', function() {
                changeDashboard(this.id);
            });
        });
        
        // Initialize the default dashboard
        changeDashboard('resumo');