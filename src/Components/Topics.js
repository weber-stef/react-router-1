import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function Topics({ match }) {
	return (
		<div>
			<h1>Topics</h1>
			<p>Lets choose some topic here</p>
			<ul>
				<li>
					<Link to={`${match.url}/components`}>Components</Link>
				</li>
				<li>
					<Link to="/topics/props">Props</Link>
				</li>
			</ul>
			<Route path={`${match.path}/:topic`} component={myTopicFunction} />
			<Route path={match.path} exact render={() => <h3>Select topic</h3>} />
		</div>
	);
}
function myTopicFunction({ match }) {
	return <h3>You clicked : {match.params.topic}</h3>;
}
