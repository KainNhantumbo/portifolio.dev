import { useState } from 'react';
import Home from './pages/home/Home';
import { GlobalStyles } from './styles/Globalstyles';

function App() {
	return (
		<>
			<GlobalStyles />
			<Home />
		</>
	);
}

export default App;
