import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Contact.sass";
const Contact = () => {
	const [letterClass, setLetterClass] = useState("text-animate");

	useEffect(() => {
		return setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 4000);
	}, []);

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_v33v3yb",
				"template_szzwfl5",
				form.current,
				"zej2eqcxXrGG8iMRv"
			)
			.then(
				(result) => {
					alert("Message Successfully Sent");
					window.location.reload(false);
				},
				(error) => {
					alert("Failed to send the message, please try again");
				}
			);
	};

	return (
		<>
			<div className="container contact-page">
				<div className="text-zone">
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={[
								"C",
								"o",
								"n",
								"t",
								"a",
								"c",
								"t",
								" ",
								"m",
								"e",
							]}
						/>
					</h1>
					<p>
						I’m very ambitious front-end developer looking for a role in
						established IT company with the opportunity to work with the
						latest technologies on challenging and diverse projects.
					</p>
					<div className="contact-form">
						<form ref={form} onSubmit={sendEmail}>
							<ul>
								<li className="half">
									<input
										type="text"
										name="user_name"
										placeholder="Name"
										required
									/>
								</li>
								<li className="half">
									<input
										type="email"
										name="user_email"
										placeholder="Email"
										required
									/>
								</li>
								<li>
									<input
										type="text"
										name="subject"
										placeholder="Subject"
										required
									/>
								</li>
								<li>
									<textarea
										name="message"
										placeholder="Message"
									></textarea>
								</li>
								<li>
									<input
										type="submit"
										value="Send"
										className="flat-button"
									/>
								</li>
							</ul>
						</form>
					</div>
				</div>
				<div className="info-map">
					Abu Raihan,
					<br />
					Bangladesh
					<br />
					Uttara, Dhaka <br />
					<span>rockbattu2@gmail.com</span>
				</div>
				<div className="map-wrap">
					<MapContainer center={[44.96366, 19.61045]} zoom={13}>
						<TileLayer url="https://${s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
						<Marker position={[44.96366, 19.61045]}>
							<Popup>
								Abu Raihan Rafuj Live Here, Come over for a cup of
								coffee :)
							</Popup>
						</Marker>
					</MapContainer>
				</div>
			</div>
			<Loader type="pacman" />
		</>
	);
};

export default Contact;
