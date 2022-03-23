import {observer} from "mobx-react-lite"
import React from "react"
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap"
import star2 from "../assets/Star2.png"

const DevicePage = observer(() => {
	const device = {
		id: 2,
		name: "iPhone 13 Pro 128GB Silver",
		price: 1159,
		rating: 5,
		img: "9d1806a4-751a-446b-8ff8-0b970c884253.jpg",
	}
	const description = [
		{
			id: 1,
			title: "Dimensions",
			description: "146.7 x 71.5 x 7.7 mm (5.78 x 2.81 x 0.30 in)",
		},
		{
			id: 2,
			title: "Display size",
			description: "6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)",
		},
		{id: 3, title: "Memory internal", description: "128GB 6GB RAM"},
		{
			id: 4,
			title: "Camera",
			description: "Quad 12MP/12MP/12MP/TOF 3D LiDAR",
		},
		{
			id: 5,
			title: "CPU",
			description:
				"Hexa-core (2x3.22 GHz Avalanche + 4xX.X GHz Blizzard)",
		},
	]

	return (
		<Container className="mt-3">
			<Row>
				<Col md={4}>
					<Image width={300} height={300} src={device.img} />
				</Col>
				<Col md={4}>
					<Row className="d-flex flex-column align-items-center">
						<h2>{device.name}</h2>
						<div
							className="d-flex align-items-center justify-content-center"
							style={{
								background: `url(${star2}) no-repeat center center`,
								width: 240,
								height: 240,
								backgroundSize: "cover",
								fontSize: 64,
							}}>
							{device.rating}
						</div>
					</Row>
				</Col>
				<Col md={4}>
					<Card
						className="d-flex flex-column align-items-center justify-content-around"
						style={{
							width: 300,
							height: 300,
							fontSize: 32,
							border: "5px solid lightgray",
						}}>
						<h3>From: {device.price} EUR.</h3>
						<Button variant={"outline-dark"}>Add to basket</Button>
					</Card>
				</Col>
			</Row>
			<Row className="d-flex flex-column m-3">
				<h1>Specifications:</h1>
				{description.map((info, index) => (
					<Row
						key={info.id}
						style={{
							background:
								index % 2 === 0 ? "lightgray" : "transparent",
							padding: 10,
						}}>
						{info.title}: {info.description}
					</Row>
				))}
			</Row>
		</Container>
	)
})

export default DevicePage
