"use client"

import { useState } from 'react'

import './App.css'
import Bar from './components/Bar/Bar';
import Extensions from './components/Extentions/Extentions';
import Succes from './components/Succes/Succes';

function App() {

	return (
		<>
			<Bar />
			<Extensions />
			<Succes />
		</>
	)
}

export default App
