import { useState } from "react";
import StudentApi from "../../../services/api/student/StudentApi";
import { useUserContext } from "../../../context/UserContext";

const questions = [
    {
        id: 1,
        question: "Qu'est-ce qu'une adresse IP ?",
        options: [
            "Une adresse physique d'un ordinateur sur un réseau",
            "Un identifiant unique d'un ordinateur sur Internet",
            "Une adresse électronique",
            "Un numéro de téléphone"
        ],
        answer: "Un identifiant unique d'un ordinateur sur Internet"
    },
    {
        id: 2,
        question: "Quelle est la fonction d'un routeur dans un réseau informatique ?",
        options: [
            "Connecter différents réseaux",
            "Envoyer des emails",
            "Gérer les logiciels sur les ordinateurs",
            "Afficher des pages web"
        ],
        answer: "Connecter différents réseaux"
    },
    {
        id: 3,
        question: "Quel protocole est utilisé pour envoyer des emails sur Internet ?",
        options: [
            "HTTP",
            "FTP",
            "SMTP",
            "SSH"
        ],
        answer: "SMTP"
    },
    {
        id: 4,
        question: "Qu'est-ce qu'un pare-feu (firewall) dans un réseau informatique ?",
        options: [
            "Un dispositif de sécurité qui contrôle et filtre le trafic réseau",
            "Un logiciel de messagerie instantanée",
            "Un antivirus",
            "Un navigateur web"
        ],
        answer: "Un dispositif de sécurité qui contrôle et filtre le trafic réseau"
    },
    {
        id: 5,
        question: "Quel est le rôle d'un switch dans un réseau informatique ?",
        options: [
            "Connecter des ordinateurs sur un même réseau local",
            "Bloquer les virus",
            "Enregistrer les données",
            "Analyser les données"
        ],
        answer: "Connecter des ordinateurs sur un même réseau local"
    },
    {
        id: 6,
        question: "Quel est le principal avantage d'utiliser un réseau local virtuel (VLAN) ?",
        options: [
            "Sécuriser les données",
            "Faciliter la gestion des adresses IP",
            "Simplifier la configuration des routeurs",
            "Réduire le trafic réseau et améliorer les performances"
        ],
        answer: "Réduire le trafic réseau et améliorer les performances"
    },
    {
        id: 7,
        question: "Quel est le rôle d'un serveur DNS dans un réseau ?",
        options: [
            "Convertir les noms de domaine en adresses IP",
            "Envoyer des emails",
            "Gérer les connexions sécurisées",
            "Contrôler l'accès à Internet"
        ],
        answer: "Convertir les noms de domaine en adresses IP"
    },
    {
        id: 8,
        question: "Qu'est-ce que le NAT (Network Address Translation) ?",
        options: [
            "Une technique pour sécuriser les réseaux sans fil",
            "Un protocole de communication",
            "Une méthode pour convertir les adresses IP privées en adresses IP publiques",
            "Un type de câble réseau"
        ],
        answer: "Une méthode pour convertir les adresses IP privées en adresses IP publiques"
    },
    {
        id: 9,
        question: "Quelle est la différence entre TCP et UDP ?",
        options: [
            "TCP est plus rapide que UDP",
            "UDP est plus fiable que TCP",
            "TCP garantit la livraison des données dans l'ordre, tandis qu'UDP ne le garantit pas",
            "UDP est utilisé pour les connexions sécurisées"
        ],
        answer: "TCP garantit la livraison des données dans l'ordre, tandis qu'UDP ne le garantit pas"
    },
    {
        id: 10,
        question: "Qu'est-ce qu'un réseau VPN (Virtual Private Network) ?",
        options: [
            "Un réseau public accessible à tous",
            "Un réseau privé utilisé uniquement par une entreprise",
            "Un réseau sécurisé qui permet de se connecter à distance de manière sécurisée",
            "Un réseau sans fil"
        ],
        answer: "Un réseau sécurisé qui permet de se connecter à distance de manière sécurisée"
    }
];




function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const { user } = useUserContext();

    const sendScoreToBackend = async (finalScore) => {
        try {
            const response = await StudentApi.insertNote2(finalScore, user.id);
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