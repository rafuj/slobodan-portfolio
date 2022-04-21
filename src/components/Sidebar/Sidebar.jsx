import {
	faGithub,
	faLinkedin,
	faSkype,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo-s.png";
import LogoSub from "../../assets/images/logo_sub.png";
import "./Sidebar.sass";
const Sidebar = () => {
	return (
		<div className="nav-bar">
			<Link className="logo" to="/">
				<img src={Logo} alt="logo" />
				<img className="sub-logo" src={LogoSub} alt="logo-sub" />
			</Link>
			<nav>
				<NavLink
					to="/"
					className={(link) => (link.isActive ? "active" : "")}
				>
					<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
				</NavLink>
				<NavLink
					to="/about"
					className={(link) =>
						link.isActive ? "about-link active" : "about-link"
					}
				>
					<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
				</NavLink>
				<NavLink
					to="/contact"
					className={(link) =>
						link.isActive ? "contact-link active" : "contact-link"
					}
				>
					<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
				</NavLink>
			</nav>
			<ul>
				<li>
					<a
						target="_blank"
						rel="noref noreferrer"
						href="https://www.linkedin.com/"
					>
						<FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noref noreferrer"
						href="http://github.com/rafuj"
					>
						<FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noref noreferrer"
						href="http://youtube.com"
					>
						<FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noref noreferrer"
						href="skype:live:42d93bb3d7ec39c2"
					>
						<FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
