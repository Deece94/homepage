import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import PageBlock from "./PageBlock";

const Header = styled.h1`
	text-decoration: underline;
`;

const Paragraph = styled.p`
	color: ${(props) => props.theme.colors.white};
`;

const Link = styled.a`
	color: ${(props) => props.theme.colors.white};
	text-decoration: none;
	font-weight: bold;
	&:hover {
		text-decoration: underline;
	}
`;

export default function About() {
	const [inputs, setInputs] = useState({
		firstname: "",
		lastname: "",
		email: "",
		message: "",
	});

	const handleChange = (event: ChangeEvent) => {
		const { name, value } = event.currentTarget as HTMLInputElement;

		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log(inputs);

		alert("I'll get around to adding this in soon");
	};
	return (
		<PageBlock id="contact">
			<Header>Contact Me</Header>
			<form onSubmit={handleSubmit}>
				<label>
					First Name
					<input
						type="text"
						onChange={handleChange}
						name="firstname"
						value={inputs.firstname}
					/>
				</label>
				<br />

				<label>
					Last Name
					<input
						type="text"
						onChange={handleChange}
						name="lastname"
						value={inputs.lastname}
					/>
				</label>
				<br />

				<label>
					Email Name
					<input
						type="text"
						onChange={handleChange}
						name="email"
						value={inputs.email}
					/>
				</label>
				<br />

				<label>
					Message
					<textarea
						onChange={handleChange}
						name="message"
						value={inputs.message}
					></textarea>
				</label>
				<br />

				<button type="submit">Submit</button>
			</form>

			<Paragraph>
				Or email me at{" "}
				<Link href="mailto:hello@dylancollar.com">hello@dylancollar.com</Link>
			</Paragraph>
		</PageBlock>
	);
}
