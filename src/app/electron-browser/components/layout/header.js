import React from 'react';
import styles from './index.css';

const Header = props => {
	return (
		<header className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Kingconter</a>
			</div>
		</header>
	);
};

export default Header;