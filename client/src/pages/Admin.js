import React from "react"
import {Button, Container} from "react-bootstrap"
import CreateBrand from "../components/modals/CreateBrand"
import CreateDevice from "../components/modals/CreateDevice"
import CreateType from "../components/modals/CreateType"

const Admin = () => {
	return (
		<Container className="d-flex flex-column">
			<Button variant={"outline-dark"} className="mt-4 p-2">
				{" "}
				Add type
			</Button>
			<Button variant={"outline-dark"} className="mt-4 p-2">
				{" "}
				Add brand
			</Button>
			<Button variant={"outline-dark"} className="mt-4 p-2">
				{" "}
				Add device
			</Button>
			<CreateBrand />
			<CreateDevice />
			<CreateType show={true} />
		</Container>
	)
}

export default Admin
