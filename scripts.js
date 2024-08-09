document.addEventListener("DOMContentLoaded", function() {
    // Example data for the dashboard
    const data = {
        totalApplications: 120,
        newHires: 10,
        turnoverRate: 5.4,
        applications: [
            { name: 'Akash Rao', position: 'Software Engineer', date: '2024-08-01', status: 'Interview' },
            { name: 'Om Yadav', position: 'Project Manager', date: '2024-08-03', status: 'Pending' },
            // More data...
        ]
    };

    // Update summary cards
    document.getElementById('total-applications').textContent = data.totalApplications;
    document.getElementById('new-hires').textContent = data.newHires;
    document.getElementById('turnover-rate').textContent = `${data.turnoverRate}%`;

    // Populate the table
    const tableBody = document.querySelector('#applications-table tbody');
    data.applications.forEach(app => {
        const row = `<tr>
            <td>${app.name}</td>
            <td>${app.position}</td>
            <td>${app.date}</td>
            <td>${app.status}</td>
        </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    });

    // Example charts
    const applicationsCtx = document.getElementById('applications-chart').getContext('2d');
    const hiresCtx = document.getElementById('hires-chart').getContext('2d');

    new Chart(applicationsCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Applications',
                data: [30, 40, 25, 50, 45, 60, 70],
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        }
    });

    new Chart(hiresCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'New Hires',
                data: [5, 8, 3, 6, 5, 7, 10],
                backgroundColor: 'rgba(40, 167, 69, 0.2)',
                borderColor: 'rgba(40, 167, 69, 1)',
                borderWidth: 1
            }]
        }
    });
});
