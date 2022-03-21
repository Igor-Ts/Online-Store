import React from "react"
import {Col, Container, Stack} from "react-bootstrap"
import TypeBar from "../components/TypeBar"

const Shop = () => {
	return (
		<Container>
			<Stack className="mt-2">
				<Col md={3}>
					<TypeBar></TypeBar>
				</Col>
				<Col md={9}></Col>
			</Stack>
		</Container>
	)
}

export default Shop
