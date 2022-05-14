import { ContactsContainer } from '../styles/contact';
import React, { useState } from 'react';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		subject: '',
		message: '',
		email: '',
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
	};

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
						<label htmlFor='name'>Name</label>
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
						<label htmlFor='email'>E-mail</label>
						<input
							required
							type='text'
							placeholder='Type your email here'
							name='email'
							id='email'
							onChange={formDataPicker}
						/>
					</div>
					<div className='common'>
						<label htmlFor='subject'>Subject</label>
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
						<label htmlFor='message'>Message</label>
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
					<button type='submit'>Send message</button>
				</form>
			</section>
		</ContactsContainer>
	);
};

export default Contact;
