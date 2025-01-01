// import  { useState, useEffect } from 'react';


// function Fichiers() {
//     const [nom, setNom] = useState('');
//     const [prenom, setPrenom] = useState('');
//     const [cne, setCne] = useState('');
//     const [note1, setNote1] = useState('');
//     const [note2, setNote2] = useState('');
//     const [note3, setNote3] = useState('');
//     const [etudiants, setEtudiants] = useState([]);

//     useEffect(() => {
//         fetch('/rsi.txt')
//             .then((response) => response.text())
//             .then((data) => {
//                 const lines = data.split('\n');
//                 const etudiants = lines.map((line) => {
//                     const [nom, prenom, cne, note1, note2, note3] = line.split(',');
//                     return { nom, prenom, cne, note1, note2, note3 };
//                 });
//                 setEtudiants(etudiants);
//             })
//             .catch((error) => console.error('Erreur lors de la récupération des étudiants:', error));
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const nouvelEtudiant = `${nom},${prenom},${cne},${note1},${note2},${note3}\n`;
//         fetch('/rsi.txt', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'text/plain',
//             },
//             body: nouvelEtudiant,
//         })
//             .then(() => {
//                 setEtudiants([...etudiants, { nom, prenom, cne, note1, note2, note3 }]);
//                 setNom('');
//                 setPrenom('');
//                 setCne('');
//                 setNote1('');
//                 setNote2('');
//                 setNote3('');
//             })
//             .catch((error) => console.error('Erreur lors de l\'ajout de l\'étudiant:', error));
//     };

//     return (
//         <div className="p-4 container center p-8">
//             <h3>Manipulation des Fichiers</h3>
//             <form onSubmit={handleSubmit} className="mb-4 m-10 p-10">
//                 <label className="block mb-2">
//                     Nom:
//                     <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} className="block w-full border border-gray-300 rounded p-2" />
//                 </label>
//                 <label className="block mb-2">
//                     Prénom:
//                     <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} className="block w-full border border-gray-300 rounded p-2" />
//                 </label>
//                 <label className="block mb-2">
//                     CNE:
//                     <input type="text" value={cne} onChange={(e) => setCne(e.target.value)} className="block w-full border border-gray-300 rounded p-2" />
//                 </label>
//                 <label className="block mb-2">
//                     Note 1:
//                     <input type="number" value={note1} onChange={(e) => setNote1(e.target.value)} className="block w-full border border-gray-300 rounded p-2" />
//                 </label>
//                 <label className="block mb-2">
//                     Note 2:
//                     <input type="number" value={note2} onChange={(e) => setNote2(e.target.value)} className="block w-full border border-gray-300 rounded p-2" />
//                 </label>
//                 <label className="block mb-2">
//                     Note 3:
//                     <input type="number" value={note3} onChange={(e) => setNote3(e.target.value)} className="block w-full border border-gray-300 rounded p-2" />
//                 </label>
//                 <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ajouter</button>
//             </form>

//             <div>
//                 <h2 className="text-lg font-bold mb-2">Liste des étudiants</h2>
//                 <table className="w-full border border-gray-300 rounded">
//                     <thead>
//                         <tr>
//                             <th className="border border-gray-300 p-2">Nom</th>
//                             <th className="border border-gray-300 p-2">Prénom</th>
//                             <th className="border border-gray-300 p-2">CNE</th>
//                             <th className="border border-gray-300 p-2">Note 1</th>
//                             <th className="border border-gray-300 p-2">Note 2</th>
//                             <th className="border border-gray-300 p-2">Note 3</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {etudiants.map((etudiant, index) => (
//                             <tr key={index}>
//                                 <td className="border border-gray-300 p-2">{etudiant.nom}</td>
//                                 <td className="border border-gray-300 p-2">{etudiant.prenom}</td>
//                                 <td className="border border-gray-300 p-2">{etudiant.cne}</td>
//                                 <td className="border border-gray-300 p-2">{etudiant.note1}</td>
//                                 <td className="border border-gray-300 p-2">{etudiant.note2}</td>
//                                 <td className="border border-gray-300 p-2">{etudiant.note3}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Fichiers;

import { useState, useEffect } from 'react';

function Fichiers() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [cne, setCne] = useState('');
    const [note1, setNote1] = useState('');
    const [note2, setNote2] = useState('');
    const [note3, setNote3] = useState('');
    const [etudiants, setEtudiants] = useState([]);

    const parseStudentData = (data) => {
        const lines = data.split('\n');
        return lines.map((line) => {
            const [nom, prenom, cne, note1, note2, note3] = line.split(',');
            return { nom, prenom, cne, note1, note2, note3 };
        });
    };

    useEffect(() => {
        fetch('/rsi.txt')
            .then((response) => response.text())
            .then((data) => {
                const etudiants = parseStudentData(data);
                setEtudiants(etudiants);
            })
            .catch((error) => console.error('Erreur lors de la récupération des étudiants:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nom || !prenom || !cne || !note1 || !note2 || !note3) {
            alert('Veuillez remplir tous les champs');
            return;
        }
        const nouvelEtudiant = `${nom},${prenom},${cne},${note1},${note2},${note3}\n`;
        fetch('/rsi.txt', {  // Utilisation de l'URL relative
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: nouvelEtudiant,
        })
            .then(() => {
                setEtudiants([...etudiants, { nom, prenom, cne, note1, note2, note3 }]);
                setNom('');
                setPrenom('');
                setCne('');
                setNote1('');
                setNote2('');
                setNote3('');
            })
            .catch((error) => console.error('Erreur lors de l\'ajout de l\'étudiant:', error));
    };
    

    return (
        <div className="p-4 container center p-8">
            <h3>Manipulation des Fichiers</h3>
            <form onSubmit={handleSubmit} className="mb-4 mx-auto max-w-lg">
                <label className="block mb-2">
                    Nom:
                    <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} className="block w-full border border-gray-300 rounded p-2" />
                </label>
                <label className="block mb-2">
                    Prénom:
                    <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} className="block w-full border border-gray-300 rounded p-2" />
                </label>
                <label className="block mb-2">
                    CNE:
                    <input type="text" value={cne} onChange={(e) => setCne(e.target.value)} className="block w-full border border-gray-300 rounded p-2" />
                </label>
                <label className="block mb-2">
                    Note 1:
                    <input type="number" value={note1} onChange={(e) => setNote1(e.target.value)} className="block w-full border border-gray-300 rounded p-2" />
                </label>
                <label className="block mb-2">
                    Note 2:
                    <input type="number" value={note2} onChange={(e) => setNote2(e.target.value)} className="block w-full border border-gray-300 rounded p-2" />
                </label>
                <label className="block mb-2">
                    Note 3:
                    <input type="number" value={note3} onChange={(e) => setNote3(e.target.value)} className="block w-full border border-gray-300 rounded p-2" />
                </label>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ajouter</button>
            </form>

            <div>
                <h2 className="text-lg font-bold mb-2">Liste des étudiants</h2>
                <table className="w-full border border-gray-300 rounded">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">Nom</th>
                            <th className="border border-gray-300 p-2">Prénom</th>
                            <th className="border border-gray-300 p-2">CNE</th>
                            <th className="border border-gray-300 p-2">Note 1</th>
                            <th className="border border-gray-300 p-2">Note 2</th>
                            <th className="border border-gray-300 p-2">Note 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        {etudiants.map((etudiant, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 p-2">{etudiant.nom}</td>
                                <td className="border border-gray-300 p-2">{etudiant.prenom}</td>
                                <td className="border border-gray-300 p-2">{etudiant.cne}</td>
                                <td className="border border-gray-300 p-2">{etudiant.note1}</td>
                                <td className="border border-gray-300 p-2">{etudiant.note2}</td>
                                <td className="border border-gray-300 p-2">{etudiant.note3}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Fichiers;
