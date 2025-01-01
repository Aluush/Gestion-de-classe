import { axiosClient } from "../../../api/axios";

const StudentApi = {
    getCsrfToken: async () => {
        return await axiosClient.get("/sanctum/csrf-cookie");
    },
    login: async (email, password) => {
        return await axiosClient.post("/login", { email, password });
    },
    logout: async () => {
        return await axiosClient.post("/logout", {});
    },
    getUser: async () => {
        return await axiosClient.get("/api/user");
    },
    getStudents: async () => {
        return await axiosClient.get("/student/getPosition");
    },
    uploadImages: async (formData) => {
        return await axiosClient.post("/upload-image", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
    },
    getImages: async () => {
        return await axiosClient.get("/getImages");
    },
    insertNote1: async (note1, id) => {
        return await axiosClient.post("/insertNote1", { note1, id });
    },
    insertNote2: async (note2, id) => {
        return await axiosClient.post("/insertNote2", { note2, id });
    },
    getStatistique: async () => {
        return await axiosClient.get("/getStaistique");
    },
    register: async (name,email,password) => {
        return await axiosClient.post("/register",{name,email,password});
    },
    
};

export default StudentApi;
