// import { useEffect } from 'react';
// import Chart from 'chart.js/auto';

// const ChartComponent = () => {
//   useEffect(() => {
//     let myChart = null;

//     const createChart = () => {
//       if (myChart) {
//         myChart.destroy();
//       }

//       const ctx = document.getElementById('myChart').getContext('2d');
//       myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//           labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
//           datasets: [{
//             label: 'Ventes mensuelles',
//             data: [65, 59, 80, 81, 56, 55, 40],
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)',
//               'rgba(255, 99, 132, 0.2)'
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)',
//               'rgba(255, 99, 132, 1)'
//             ],
//             borderWidth: 1
//           }]
//         },
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         }
//       });
//     };

//     createChart();

//     return () => {
//       if (myChart) {
//         myChart.destroy();
//       }
//     };
//   }, []);

//   return (
//     <div className="w-full h-80">
//       <canvas id="myChart" className="w-full h-full"></canvas>
//     </div>
//   );
// };

// export default ChartComponent;


import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import StudentApi from '../../../services/api/student/StudentApi';

const ChartComponent = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    // Récupérer les données des étudiants depuis l'API
    const fetchStudentData = async () => {
      try {
        const response = await StudentApi.getStatistique();
        setStudentData(response.data); // Supposons que la réponse contient directement les données des étudiants
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, []);

  useEffect(() => {
    let myChart = null;

    const createChart = () => {
      if (myChart) {
        myChart.destroy();
      }

      const ctx = document.getElementById('myChart').getContext('2d');
      myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: studentData.map(student => student.email), // Utiliser le nom de chaque étudiant comme label
          datasets: [{
            label: 'Moyenne',
            data: studentData.map(student =>student.moyenne), // Calculer la moyenne de chaque étudiant
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    };

    if (studentData.length > 0) {
      createChart();
    }

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [studentData]);

  // const calculateAverage = (grades) => {
  //   // Calculer la moyenne des notes d'un étudiant
  //   if (grades.length === 0) return 0;
  //   const sum = grades.reduce((acc, grade) => acc + grade, 0);
  //   return sum / grades.length;
  // };

  return (
    <div className="w-full h-100">
      <canvas id="myChart" className="w-full h-full"></canvas>
    </div>
  );
};

export default ChartComponent;
