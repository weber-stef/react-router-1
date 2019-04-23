import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<ul class="navicss">
			<li>
				<Link to="/home">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/credits">Credits</Link>
			</li>
			<li>
				<Link to="/info">Info</Link>
			</li>
			<li>
				<Link to="/test">Test</Link>
			</li>
			<li>
				<Link to="/topics">Topics</Link>
			</li>
		</ul>
	);
}
