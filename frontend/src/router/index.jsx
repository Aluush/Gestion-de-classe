import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Login from "../page/Login";
import Users from "../page/Users";
import Register from "../page/Register";
import NotFound from "../page/NotFound";
import Layouts from "../layouts/Layouts";
import GuestLayout from "../layouts/GuestLayout";
import StudentDashboardLayout from "../layouts/student/StudentDashboardLayout";
import Cv from "../components/ui/student/Cv";
import Fichiers from "../components/ui/student/Fichiers";
import Geolocalisation from "../components/ui/student/Geolocalisation";
import Images from "../components/ui/student/Images";
import Matrices from "../components/ui/student/Matrices";
import Quiz from "../components/ui/student/Quiz";
import Quiz2 from "../components/ui/student/Quiz2";
import Statisstique from "../components/ui/student/Statisstique";
import Dashboard from "../components/ui/student/Dashboard";
import PrincipeQuiz from "../components/ui/student/PrincipeQuiz";



export const router = createBrowserRouter([
    {
        element: <Layouts />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/users",
                element: <Users></Users>,
            },
            {
                path: "*",
                element: <NotFound></NotFound>,
            },
        ],
    },
    {
        element: <GuestLayout></GuestLayout>,
        children: [
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ],
    },
    {
        element: <StudentDashboardLayout></StudentDashboardLayout>,
        children: [
            {
                path: "/student/dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "/student/cv",
                element: <Cv></Cv>,
            },
            {
                path: "/student/matrices",
                element: <Matrices></Matrices>
            },
            {
                path: "/student/fichiers",
                element: <Fichiers></Fichiers>
            },
            {
                path: "/student/images",
                element: <Images></Images>
            },
            {
                path: "/student/principeQuiz",
                element: <PrincipeQuiz></PrincipeQuiz>
            },
            {
                path: "/student/quiz",
                element: <Quiz></Quiz>
            },
            {
                path: "/student/quiz2",
                element: <Quiz2></Quiz2>
            },
            {
                path: "/student/Statistique",
                element: <Statisstique></Statisstique>
            },
            {
                path: "/student/Geolocalisation",
                element: <Geolocalisation></Geolocalisation>
            },
        ],
    },
]);
