import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


function App() {
  return (
	<div>
		<div className="flex flex-col w-full h-screen bg-gradient-to-r from-blue-sapphire to-blue-munsell">
			<h1 className="justify-start text-6xl text-beige-lace font-black p-4">KLMS</h1>
			<div className='items-center tracking-wide leading-relaxed space-y-14 text-center my-auto text-beige-lace font-bold text-4xl'>
				<p>
					Votre professeur de math, physique, chimie
					<br/>
					de la primaire au lycée
					<FontAwesomeIcon icon={solid('school')} className="ml-2"/>
					<br/>
					sur Saverne et environs
				</p>
				<button 
					className='p-3 font-black font-inter rounded-lg border-b-4 border-l-2 hover:border-b-0 hover:border-l-0 hover:border-t-4 hover:border-r-2  border-red-persimmon-darker bg-red-persimmon uppercase shadow-xl' 
					type="button"
				>
					Contactez-moi
				</button>
			</div>
		</div>
	</div>
  );
}

export default App;
