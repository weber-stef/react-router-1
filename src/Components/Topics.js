import React from 'react';
import { Route, NavLink } from 'react-router-dom';

export default function Topics({ match }) {
	return (
		<div>
			<h1>Topics</h1>
			<p>Lets choose some topic here</p>
			<ul>
				<li>
					<NavLink activeClassName="selected" to={`${match.url}/components`}>
						Components
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="selected" to="/topics/props">
						Props
					</NavLink>
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
