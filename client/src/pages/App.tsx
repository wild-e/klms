import React from 'react';

function App() {
  return (
	<div>
		<div className="flex flex-col w-full h-screen bg-sky-700">
			<h1 className="justify-start text-6xl text-neutral-50 font-black p-4">KLMS</h1>
			<div className='items-center space-y-6 text-center my-auto text-neutral-50 font-bold text-4xl'>
				<p>
					Votre professeur de math, physique, chimie
					<br/>
					de la primaire au lycée
					<br/>
					sur Saverne et environs
				</p>
				<button className='p-3 font-black rounded-lg border-b border-r border-color-sky-900 bg-blue-300 uppercase' type="button">
					Contactez-moi
				</button>
			</div>
		</div>
	</div>
  );
}

export default App;
