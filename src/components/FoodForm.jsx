import { Button, Form, Modal } from "react-bootstrap";

function FoodForm({ show, handleShow, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title as="h5">Nova Comida</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formFoodName">
            <Form.Label>Imagem </Form.Label>
            <Form.Control type="text" name="name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFoodImage">
            <Form.Label>Nome </Form.Label>
            <Form.Control type="text" name="image" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" type="submit">
            Confirmar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default FoodForm;
