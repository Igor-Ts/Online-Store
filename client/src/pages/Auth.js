import React from "react"
import {Button, Card, Container, Form, Stack} from "react-bootstrap"
import {NavLink, useLocation} from "react-router-dom"
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts"

const Auth = () => {
	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE
	console.log(location)

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{height: window.innerHeight - 54}}>
			<Card style={{width: 600}} className="p-5">
				<h2 className="m-auto">{isLogin ? "Login" : "Sign up"}</h2>
				<Form className="d-flex flex-column">
					<Form.Control
						className="mt-3"
						placeholder="Enter your email ..."></Form.Control>
					<Form.Control
						className="mt-3"
						placeholder="Enter your password ..."></Form.Control>
					<Stack
						direction="horizontal"
						gap={2}
						className="d-flex justify-content-between mt-3">
						{isLogin ? (
							<div>
								New in shop?
								<NavLink to={REGISTRATION_ROUTE}>
									Sign up
								</NavLink>
							</div>
						) : (
							<div>
								Have an account?
								<NavLink to={LOGIN_ROUTE}> Log in </NavLink>
							</div>
						)}
						<Button variant={"outline-success"}>
							{isLogin ? "Log in" : "Sign in"}
						</Button>
					</Stack>
				</Form>
			</Card>
		</Container>
	)
}

export default Auth
