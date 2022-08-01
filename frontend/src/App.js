// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	// usestate for setting a javascript
	// object for storing and using data
	const [data, setdata] = useState({
		name: "",
		age: 0,
		date: "",
		programming: "",
	});

	// Using useEffect for single rendering
	useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy
		fetch("/data").then((res) =>
			res.json().then((data) => {
				// Setting a data from api
				setdata({
					name: data.Name,
					version: data.Version,
					date: data.Date,
				});
			})
		);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>{data.name}</h1>
				<p>Version: {data.version}</p>
				<p>Started: {data.date}</p>
			</header>
		</div>
	);
}

export default App;
