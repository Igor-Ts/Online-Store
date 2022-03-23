import React from "react"
import {Button, Form, Modal} from "react-bootstrap"

const CreateBrand = ({show, onHide}) => {
	return (
		<Modal show={show} onHide={onHide} centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add new type
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Control
						placeholder={"Write a type name"}></Form.Control>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onHide}>
					Close
				</Button>
				<Button variant="outline-success" onClick={onHide}>
					Add
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default CreateBrand
