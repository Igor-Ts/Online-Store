import React, {useContext} from "react"
import {Context} from "../index"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import {NavLink} from "react-router-dom"
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts"
import {Button} from "react-bootstrap"
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom"

const NavBar = observer(() => {
	const {user} = useContext(Context)
	const navigate = useNavigate()

	const logOut = () => {
		user.setUser({})
		user.setIsAuth(false)
	}
	console.log(user)
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink style={{color: "white"}} to={SHOP_ROUTE}>
					Dev!ce
				</NavLink>
				{user.isAuth ? (
					<Nav className="ml-auto" style={{color: "white"}}>
						<Button
							variant={"outline-light"}
							onClick={() => navigate(ADMIN_ROUTE)}>
							Admin
						</Button>
						<Button
							variant={"outline-light"}
							onClick={() => logOut()}
							className="ms-2">
							Log out
						</Button>
					</Nav>
				) : (
					<Nav className="ml-auto" style={{color: "white"}}>
						<Button
							variant={"outline-light"}
							onClick={() => navigate(LOGIN_ROUTE)}>
							Authorization
						</Button>
					</Nav>
				)}
			</Container>
		</Navbar>
	)
})

export default NavBar
