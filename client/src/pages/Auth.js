import {observer} from "mobx-react-lite"
import React, {useContext, useState} from "react"
import {Button, Card, Container, Form, Stack} from "react-bootstrap"
import {NavLink, useLocation, useNavigate} from "react-router-dom"
import {Context} from "../index"
import {login, registration} from "../http/userAPI"
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts"

const Auth = observer(() => {
	const {user} = useContext(Context)
	const location = useLocation()
	const navigate = useNavigate()
	const isLogin = location.pathname === LOGIN_ROUTE
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const click = async () => {
		try {
			let data
			if (isLogin) {
				data = await login(email, password)
			} else {
				data = await registration(email, password)
			}
			user.setUser(user)
			user.setIsAuth(true)
			navigate(SHOP_ROUTE)
		} catch (e) {
			alert(e.reasponse.data.message)
		}
	}

	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{height: window.innerHeight - 54}}>
			<Card style={{width: 600}} className="p-5">
				<h2 className="m-auto">{isLogin ? "Login" : "Sign up"}</h2>
				<Form className="d-flex flex-column">
					<Form.Control
						className="mt-3"
						placeholder="Enter your email ..."
						value={email}
						onChange={(e) =>
							setEmail(e.target.value)
						}></Form.Control>
					<Form.Control
						className="mt-3"
						placeholder="Enter your password ..."
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"></Form.Control>
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
						<Button variant={"outline-success"} onClick={click}>
							{isLogin ? "Log in" : "Sign in"}
						</Button>
					</Stack>
				</Form>
			</Card>
		</Container>
	)
})

export default Auth
