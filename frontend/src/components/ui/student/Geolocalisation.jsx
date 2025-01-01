// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { useState, useEffect } from 'react';

// import StudentApi from '../../../services/api/student/StudentApi';

// const Geolocalisation = () => {
//   const mapStyles = {
//     height: '400px',
//     width: '100%'
//   };

//   const defaultCenter = {
//     lat: 40.712776,
//     lng: -74.005974
//   };

//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     StudentApi.getStudents()
//       .then(({ data }) => {  // Assuming the API response contains an array of students
//         setStudents(data);   // Set the state with the array of students
//         console.log(data);
//       })
//       .catch(() => {
//         console.log('error getting students');
//       });
//   }, []);

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyCINnAMI4ObPbTj9BIgxBhvhiR5fxevl1g">
//       <GoogleMap
//         mapContainerStyle={mapStyles}
//         zoom={10}
//         center={defaultCenter}
//       >
//         {students.map((student) => (
//           <Marker
//             key={student.id}
//             position={{ lat: parseFloat(student.latitude), lng: parseFloat(student.longitude) }}
//             title={student.name}
//           />
//         ))}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Geolocalisation;


import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

import StudentApi from '../../../services/api/student/StudentApi';

const Geolocalisation = () => {
  const mapStyles = {
    height: '520px',
    width: '100%'
  };

  const [currentPosition, setCurrentPosition] = useState(null);
  const defaultCenter = currentPosition ? currentPosition : { lat: 40.712776, lng: -74.005974 };

  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Get current position
    navigator.geolocation.getCurrentPosition(
      position => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      error => {
        console.log(error);
      }
    );

    // Get students
    StudentApi.getStudents()
      .then(({ data }) => {
        console.log("data")
        console.log(data)
        setStudents(data);
      })
      .catch(() => {
        console.log('error getting students');
      });
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCINnAMI4ObPbTj9BIgxBhvhiR5fxevl1g">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      >
        {currentPosition && (
          <Marker
            position={currentPosition}
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            }}
            title="Current Position"
          />
        )}
        {students.map((student) => (
          <Marker
            key={student.id}
            position={{ lat: parseFloat(student.latitude), lng: parseFloat(student.longitude) }}
            title={student.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Geolocalisation;
