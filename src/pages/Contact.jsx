import { ContactsContainer } from '../styles/contact';
import React, { useState } from 'react';

const Contact = () => {

	return (
		<ContactsContainer>
			<form>
				<label htmlFor='subject'>Subject</label>
				<input
					type='text'
					id='subject'
					name='subject'
					maxLength={'500'}
					placeholder={'Type the subject here'}
				/>
				<label htmlFor='message'>Message</label>
				<textarea name='message' id='message' cols='30' rows='10'></textarea>
				<button type='submit'>Submit</button>
			</form>
		</ContactsContainer>
	);
};

export default Contact;
