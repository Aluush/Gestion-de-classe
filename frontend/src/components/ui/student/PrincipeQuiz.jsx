import { Link } from 'react-router-dom';
import quiz1 from '../../../../public/quiz1.jpeg';
import quiz2 from '../../../../public/quiz2.jpeg';

function PrincipeQuiz() {
    return (
<div className="flex justify-center container p-10">
    <div className="flex space-x-8">
        <Link to="/student/quiz" className="block">
            <img
                src={quiz2}
                alt="Quiz Généralité"
                className="w-64 h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300"
            />
        </Link>
        <Link to="/student/quiz2" className="block">
            <img
                src={quiz1}
                alt="Quiz Réseau Informatique"
                className="w-64 h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition duration-300"
            />
        </Link>
    </div>
</div>

    
    );
}

export default PrincipeQuiz;
