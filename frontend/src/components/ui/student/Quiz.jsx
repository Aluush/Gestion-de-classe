import { useState } from "react";
import StudentApi from "../../../services/api/student/StudentApi";
import { useUserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";


const questions = [
    {
        id: 1,
        question: "Qu'est-ce que l'HTML ?",
        options: [
            "Un langage de programmation",
            "Un langage de balisage pour créer des pages web",
            "Un système d'exploitation",
            "Un logiciel de dessin"
        ],
        answer: "Un langage de balisage pour créer des pages web"
    },
    {
        id: 2,
        question: "Quelle est la différence entre un logiciel open source et un logiciel propriétaire ?",
        options: [
            "Le prix",
            "La couleur de l'interface",
            "Le fait que le code source soit disponible ou non",
            "Le nombre de fonctionnalités"
        ],
        answer: "Le fait que le code source soit disponible ou non"
    },
    {
        id: 3,
        question: "Quel est le rôle principal d'un système d'exploitation ?",
        options: [
            "Gérer les ressources matérielles et logicielles d'un ordinateur",
            "Calculer des opérations mathématiques complexes",
            "Créer des graphiques et des images",
            "Surfer sur Internet"
        ],
        answer: "Gérer les ressources matérielles et logicielles d'un ordinateur"
    },
    {
        id: 4,
        question: "Que signifie le terme 'CPU' en informatique ?",
        options: [
            "Central Programming Unit",
            "Common Processing Unit",
            "Central Processing Unit",
            "Common Programming Unit"
        ],
        answer: "Central Processing Unit"
    },
    {
        id: 5,
        question: "Quel est le format de fichier standard pour les feuilles de calcul ?",
        options: [
            ".xls",
            ".doc",
            ".pdf",
            ".exe"
        ],
        answer: ".xls"
    },
    {
        id: 6,
        question: "Quel est le langage utilisé pour créer des requêtes SQL pour interroger les bases de données ?",
        options: [
            "Structured Query Language",
            "Standard Query Language",
            "Server Query Language",
            "Simple Query Language"
        ],
        answer: "Structured Query Language"
    },
    {
        id: 7,
        question: "Quelle est la fonction principale d'un pare-feu (firewall) ?",
        options: [
            "Protéger un ordinateur contre les virus",
            "Bloquer les appels téléphoniques indésirables",
            "Contrôler et filtrer le trafic réseau",
            "Nettoyer le disque dur d'un ordinateur"
        ],
        answer: "Contrôler et filtrer le trafic réseau"
    },
    {
        id: 8,
        question: "Quel est le composant matériel d'un ordinateur qui stocke les données de manière permanente ?",
        options: [
            "RAM",
            "CPU",
            "Disque dur",
            "Carte graphique"
        ],
        answer: "Disque dur"
    },
    {
        id: 9,
        question: "Qu'est-ce que signifie le terme 'URL' ?",
        options: [
            "Uniform Resource Locator",
            "Universal Registry Listing",
            "Uniform Registry Locator",
            "Universal Resource Listing"
        ],
        answer: "Uniform Resource Locator"
    },
    {
        id: 10,
        question: "Quel est le langage de programmation le plus largement utilisé pour le développement de logiciels d'entreprise ?",
        options: [
            "Java",
            "C++",
            "Python",
            "Ruby"
        ],
        answer: "Java"
    }
];

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const { user } = useUserContext();
    const navigate = useNavigate();

    const sendScoreToBackend = async (finalScore) => {
        try {
            const response = await StudentApi.insertNote1(finalScore, user.id);
            return response.data.message;
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données:', error);
            throw error;
        }
    };

    const handleAnswerClick = async (selectedAnswer) => {
        if (selectedAnswer === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            // Quiz finished
            const finalScore = score;
            try {
                const message = await sendScoreToBackend(finalScore);
                alert(message);
            } catch (error) {
                console.error('Une erreur s\'est produite lors de l\'envoi des données:', error);
                alert('Une erreur s\'est produite lors de l\'envoi des données. Veuillez réessayer.');
            }
            alert("Quiz terminé! Votre score est de " + finalScore + "/" + questions.length);
            navigate("/student/principeQuiz");

        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Quiz d'informatique</h1>
            <div className="mb-4">
                <p className="text-lg">{questions[currentQuestion].question}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                    <button
                        key={index}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleAnswerClick(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Quiz;