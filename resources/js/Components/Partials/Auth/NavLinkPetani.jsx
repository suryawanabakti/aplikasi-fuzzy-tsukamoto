import React from "react";
import { Link } from "@inertiajs/react";
import {
    IconDatabase,
    IconHistory,
    IconHome,
    IconList,
    IconListNumbers,
    IconUsers,
} from "@tabler/icons-react";

export default function NavLinkPetani() {
    return (
        <ul className="navbar-nav">
            <li
                className={`nav-item ${
                    route().current("dashboard") && "active"
                }`}
            >
                <Link className="nav-link" href={route("dashboard")}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <IconHome className="icon" />
                    </span>
                    <span className="nav-link-title">Home</span>
                </Link>
            </li>
            <li
                className={`nav-item ${
                    route().current("admin.data-panen.*") && "active"
                }`}
            >
                <Link
                    className="nav-link"
                    href={route("admin.data-panen.index")}
                >
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <IconDatabase className="icon" />
                    </span>
                    <span className="nav-link-title">Data Panen</span>
                </Link>
            </li>
            <li
                className={`nav-item ${
                    route().current("perhitungan*") && "active"
                }`}
            >
                <Link className="nav-link" href={route("perhitungan.index")}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <IconListNumbers className="icon" />
                    </span>
                    <span className="nav-link-title">Perhitungan</span>
                </Link>
            </li>
            <li
                className={`nav-item ${
                    route().current("riwayat*") && "active"
                }`}
            >
                <Link className="nav-link" href={route("riwayat.index")}>
                    <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <IconHistory className="icon" />
                    </span>
                    <span className="nav-link-title">Riwayat</span>
                </Link>
            </li>
        </ul>
    );
}
