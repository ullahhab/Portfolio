import {Link} from 'react-router-dom';
function MainNavigation() {
	// To import css module you nee to add the import classes(can be something) from './filename'
	// TO add this file to anything like header below you need to :
	// <header className={classes.header} >
	return(
		<header>
		<div> React Meetups</div>
		<nav>
			<ul>
				<li>
					<Link to='/'> All Meetups</Link>
				</li>
			</ul>
		</nav>
	);






}
