import StudentApi from "../../../services/api/student/StudentApi";
import { useState, useEffect } from "react";

function Images() {

    const [image, setImage] = useState('');
    const [imagesList, setImagesList] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        await StudentApi.uploadImages(formData);
        fetchImages(); // Re-fetch images after uploading
    }

    const fetchImages = async () => {
        try {
            const response = await StudentApi.getImages();
            setImagesList(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <>
<div className="container p-10 mx-auto">
    <form className="mb-8" onSubmit={handleSubmit} encType="multipart/form-data">
    <div className="mb-5">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" name="image" type="file" className="hidden" onChange={(e) => setImage(e.target.files[0])} />
        </label>
    </div>
    <div id="image-preview" className="mt-4 text-xs flex"></div>
    <button type="submit" className="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {imagesList.map((image) => (
            <div key={image.id}>
                <img src={`http://127.0.0.1:8000/storage/${image.bin_img}`} alt={image.name} className="w-full h-auto" />
                <p>{image.name}</p>
            </div>
        ))}
    </div>
</div>

        </>
    );
    
}

export default Images;
