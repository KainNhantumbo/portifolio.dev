import { ContactsContainer } from '../styles/contact';
import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import {
	BiMailSend,
	FaEnvelope,
	FaEnvelopeOpenText,
	FaUser,
	MdSubject,
} from 'react-icons/all';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		subject: '',
		message: '',
		email: 'nhantumbok@gmail.com',
		from_email: '',
	});

	// picks form data
	const formDataPicker = (e) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	// sends email
	const emailSender = (e) => {
		e.preventDefault();
		console.log(formData);

		emailjs
			.send(
				'service_sjw9i8b',
				'template_eso630j',
				formData,
				'z3FUpU83GBFJyGXVF'
			)
			.then(
				(result) => {
					console.log(result.text);
					alert('Message sent sucessfully!');
				},
				(error) => {
					console.log(error.text);
					alert('An error ocurred, try again later!');
				}
			);
	};

	useEffect(() => {
		// corrects the window position
		window.scrollTo({
			top: 0,
			left: 0,
		});
	}, []);

	return (
		<ContactsContainer>
			<section className='intro'>
				<h1>Contact</h1>
				<h2>Let's work together!</h2>
				<p>You can use the form above to send me a e-mail.</p>
			</section>
			<section className='form-container'>
				<form onSubmit={emailSender}>
					<div className='common'>
						<label htmlFor='name'>
							<FaUser />
							<span>Name</span>
						</label>
						<input
							required
							type='text'
							name='name'
							placeholder='Type your name here'
							maxLength={200}
							onChange={formDataPicker}
						/>
					</div>
					<div className='common'>
						<label htmlFor='email'>
							<FaEnvelope />
							<span>E-mail</span>
						</label>
						<input
							required
							type='text'
							placeholder='Type your email here'
							name='from_email'
							id='email'
							onChange={formDataPicker}
						/>
					</div>
					<div className='common'>
						<label htmlFor='subject'>
							<MdSubject />
							<span>Subject</span>
						</label>
						<input
							type='text'
							id='subject'
							name='subject'
							required
							maxLength={'500'}
							onChange={formDataPicker}
							placeholder={'Type the subject here'}
						/>
					</div>
					<div className='common'>
						<label htmlFor='message'>
							<FaEnvelopeOpenText />
							<span>Message</span>
						</label>
						<textarea
							name='message'
							required
							id='message'
							rows='10'
							maxLength={5000}
							placeholder={'Your message here'}
							onChange={formDataPicker}
						></textarea>
					</div>
					<button type='submit'>
						<BiMailSend />
						<span>Send message</span>
					</button>
				</form>
			</section>
			<Footer />
		</ContactsContainer>
	);
};

export default Contact;
