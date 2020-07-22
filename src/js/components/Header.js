import React from "react"
import Logo from '../../img/logo1.png'

const Header = () => {
    return(
    <header>
		<nav className="nav-container">
			<ul className="top-navigation-bar">
				<div className="navigation-select">
					<a href="/"><img src = {Logo} alt="Amazon-logo" className="logo"/> </a>
					<li><input type="text" placeholder="Search " className="top-search hide-content"/></li>
				</div>

				<div className="navigation-select ">
					<li className="dropdown">
						<button className="dropbtn hide-content">Login</button>
						<div className="dropdown-content">
							<a href="/login">Log In</a>
							<a href="/sign-up">Sign Up</a>
							<a href="/">My Profile</a>
							<a href="/">Wishlist</a>
							<a href="/">Rewards </a>
						</div>
					</li>
					<li className="dropdown">
						<button className="dropbtn hide-content">More
							<span className="material-icons arrow">keyboard_arrow_down</span>
						</button>
						<div className="dropdown-content">
							<a href="/">Sell on Amazon</a>
							<a href="/">24*7 Customer Care</a>
							<a href="/">Advertise</a>
						</div>
					</li>
					<li className="dropdown ">
						<a className="dropbtn" href="">
							<span className="material-icons">
								shopping_cart
							</span> <span className="hide-content"> Cart </span>
						</a>
					</li>
					<li className="dropdown show-content" id="menu">
						<div className="dropbtn" href="">
							<span className="material-icons">
								menu
							</span>
						</div>
					</li>
				</div>
			</ul>
			<ul className="show-content">
				<div className="bottom-search">
				<li><input type="text" placeholder="Search Here " className="top-search "/></li>
				</div>
			</ul>	
		</nav>
	</header>
    )
}

export default Header;