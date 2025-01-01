"use client";

import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom"; // Importer la balise Link depuis React Router
import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiShoppingBag,
    HiTable,
    HiUser,
} from "react-icons/hi";
import { useUserContext } from "../context/UserContext";

export function SideBar() {
    const { user } = useUserContext();

    return (
        <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item icon={HiUser}>
                        <Link to="/student/dashboard"> {user.name}</Link>{" "}
                        {/* Lien vers l'affichage du CV */}
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiChartPie}>
                        <Link to="/student/cv">About Me</Link>{" "}
                        {/* Lien vers l'affichage du CV */}
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiInbox}>
                        <Link to="/student/matrices">
                            {" "}
                            Manipulation de matrices
                        </Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiInbox}>
                        <Link to="/student/fichiers">
                            {" "}
                            Manipulation de formulaires{" "}
                        </Link>
                    </Sidebar.Item>

                    <Sidebar.Item icon={HiShoppingBag}>
                        <Link to="/student/images">
                            Insert /Affiche des images
                        </Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiArrowSmRight}>
                        <Link to="/student/principeQuiz">Quiz</Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiTable}>
                        <Link to="/student/Statistique">Statistiques </Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={HiTable}>
                        <Link to="/student/Geolocalisation">Géolocalisation </Link>
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
