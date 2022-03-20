import React, {useContext} from "react"
import {Context} from "../index"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import {NavLink} from "react-router-dom"
import {SHOP_ROUTE} from "../utils/consts"
import {Button} from "react-bootstrap"
import {observer} from "mobx-react-lite"

const NavBar = observer(() => {
	const {user} = useContext(Context)
	console.log(user)
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<NavLink style={{color: "white"}} to={SHOP_ROUTE}>
					Dev!ce
				</NavLink>
				{user.isAuth ? (
					<Nav className="ml-auto" style={{color: "white"}}>
						<Button variant={"outline-light"}>Admin</Button>
						<Button variant={"outline-light"} className="ms-2">
							Log out
						</Button>
					</Nav>
				) : (
					<Nav className="ml-auto" style={{color: "white"}}>
						<Button
							variant={"outline-light"}
							onClick={() => user.setIsAuth(true)}>
							Authorization
						</Button>
					</Nav>
				)}
			</Container>
		</Navbar>
	)
})

export default NavBar
