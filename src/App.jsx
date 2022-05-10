import { useState } from 'react';
import Home from './pages/home/Home';
import Header from './components/Header';
import { GlobalStyles } from './styles/Globalstyles';

function App() {
	return (
		<>
			<GlobalStyles />
      <Header/>
			<Home />
		</>
	);
}

export default App;
