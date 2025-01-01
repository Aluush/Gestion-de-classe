import  { useState } from 'react';
import { toast } from 'sonner'; // Assurez-vous d'avoir correctement installé et importé le package de toast

function Matrices() {
    const [matrix1, setMatrix1] = useState([]);
    const [matrix2, setMatrix2] = useState([]);
    const [rows1, setRows1] = useState(0);
    const [cols1, setCols1] = useState(0);
    const [rows2, setRows2] = useState(0);
    const [cols2, setCols2] = useState(0);
    const [resultMatrix, setResultMatrix] = useState([]);

    const generateRandomMatrix = (rows, cols) => {
        const matrix = [];
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < cols; j++) {
                row.push(Math.floor(Math.random() * 10)); // Valeurs aléatoires de 0 à 9
            }
            matrix.push(row);
        }
        return matrix;
    };

    const handleSubmit1 = (e) => {
        e.preventDefault();
        setMatrix1(generateRandomMatrix(rows1, cols1));
    };

    const handleSubmit2 = (e) => {
        e.preventDefault();
        setMatrix2(generateRandomMatrix(rows2, cols2));
    };

    const sumMatrices = () => {
        if (matrix1.length === 0 || matrix2.length === 0 || matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
            toast("Les matrices doivent avoir la même taille pour additionner.");
            return;
        }

        const result = [];
        for (let i = 0; i < matrix1.length; i++) {
            const row = [];
            for (let j = 0; j < matrix1[i].length; j++) {
                row.push(matrix1[i][j] + matrix2[i][j]);
            }
            result.push(row);
        }
        setResultMatrix(result);
    };

    const productMatrices = () => {
        if (matrix1.length === 0 || matrix2.length === 0 || matrix1[0].length !== matrix2.length) {
            toast("Le nombre de colonnes de la matrice 1 doit être égal au nombre de lignes de la matrice 2 pour les multiplier.");
            return;
        }

        const result = [];
        for (let i = 0; i < matrix1.length; i++) {
            const row = [];
            for (let j = 0; j < matrix2[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < matrix2.length; k++) {
                    sum += matrix1[i][k] * matrix2[k][j];
                }
                row.push(sum);
            }
            result.push(row);
        }
        setResultMatrix(result);
    };

    return (
        <div className="flex">
            <div className="w-1/2 p-4 border border-gray-300 rounded mr-2">
                <h2 className="mb-2">Matrice 1</h2>
                <form className="mb-4" onSubmit={handleSubmit1}>
                    <label className="block mb-2">
                        Nombre de lignes :
                        <input
                            className="block w-full border border-gray-300 rounded p-2 bg-gray-100"
                            type="number"
                            value={rows1}
                            onChange={(e) => setRows1(parseInt(e.target.value))}
                        />
                    </label>
                    <label className="block mb-2">
                        Nombre de colonnes :
                        <input
                            className="block w-full border border-gray-300 rounded p-2 bg-gray-100"
                            type="number"
                            value={cols1}
                            onChange={(e) => setCols1(parseInt(e.target.value))}
                        />
                    </label>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Générer Matrice 1
                    </button>
                </form>

                <table className="border border-gray-300 rounded">
                    <tbody>
                        {matrix1.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, colIndex) => (
                                    <td key={colIndex} className="border border-gray-300 p-2">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="w-1/2 p-4 border border-gray-300 rounded">
                <h2 className="mb-2">Matrice 2</h2>
                <form className="mb-4" onSubmit={handleSubmit2}>
                    <label className="block mb-2">
                        Nombre de lignes :
                        <input
                            className="block w-full border border-gray-300 rounded p-2 bg-gray-100"
                            type="number"
                            value={rows2}
                            onChange={(e) => setRows2(parseInt(e.target.value))}
                        />
                    </label>
                    <label className="block mb-2">
                        Nombre de colonnes :
                        <input
                            className="block w-full border border-gray-300 rounded p-2 bg-gray-100"
                            type="number"
                            value={cols2}
                            onChange={(e) => setCols2(parseInt(e.target.value))}
                        />
                    </label>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Générer Matrice 2
                    </button>
                </form>

                <table className="border border-gray-300 rounded">
                    <tbody>
                        {matrix2.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, colIndex) => (
                                    <td key={colIndex} className="border border-gray-300 p-2">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={sumMatrices}
            >
                Calculer Somme
            </button>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={productMatrices}
            >
                Calculer Produit
            </button>

            {resultMatrix.length > 0 && (
                <div className="w-full p-4 border border-gray-300 rounded mt-4">
                    <h2>Résultat</h2>
                    <table className="border border-gray-300 rounded">
                        <tbody>
                            {resultMatrix.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, colIndex) => (
                                        <td key={colIndex} className="border border-gray-300 p-2">
                                            {cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default Matrices;
