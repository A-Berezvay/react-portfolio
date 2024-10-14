import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const SkillChart = () => {
  const data = {
    labels: ['JavaScript', 'React', 'HTML', 'CSS', 'Python', 'Node.js', 'SQL', 'Ruby'],
    datasets: [
      {
        label: 'My Coding Skills',
        data: [40, 40, 55, 60, 5, 10, 10, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Pink
          'rgba(54, 162, 235, 0.6)', // Blue
          'rgba(255, 206, 86, 0.6)', // Yellow
          'rgba(75, 192, 192, 0.6)', // Teal
          'rgba(153, 102, 255, 0.6)', // Purple
          'rgba(255, 159, 64, 0.6)', // Orange
          'rgba(64, 159, 255, 0.6)', // Sky Blue
          'rgba(164, 255, 101, 0.6)' // Light Green
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // Pink
          'rgba(54, 162, 235, 1)', // Blue
          'rgba(255, 206, 86, 1)', // Yellow
          'rgba(75, 192, 192, 1)', // Teal
          'rgba(153, 102, 255, 1)', // Purple
          'rgba(255, 159, 64, 1)', // Orange
          'rgba(64, 159, 255, 1)', // Sky Blue
          'rgba(164, 255, 101, 1)' // Light Green
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default SkillChart;

