import React from "react"
import { Link } from "react-router-dom"

export const NavBar = () => (
    <>
        <ul class="navbar">
            <li class="navbar__item">
                <Link to="/nurseries">Nurseries</Link>
            </li>
            <li class="navbar__item">
                <Link to="/distributors">Distributors</Link>
            </li>
            <li class="navbar__item">
                <Link to="/retailers">Retailers</Link>
            </li>
        </ul>
    </>
)