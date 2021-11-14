import { useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";

import data from "../models/foods";
import Food from "./Food";

import "bootstrap/dist/css/bootstrap.css";
import FoodForm from "./FoodForm";

function App() {
  const [foods, setFoods] = useState(data);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const buttonAdd = useRef(null);

  const handleClick = () => {
    setShow(true);

    buttonAdd.current.blur()
  };

  return (
    <Container>
      <h1 className="mt-5 text-center">Menu</h1>
      <div className="text-right">
        <Button
          variant="secondary"
          className="rounded-circle mr-4 font-weight-bold"
          onClick={handleClick}
          ref={buttonAdd}
        >
          +
        </Button>
      </div>
      <section className="card-deck my-3">
        {foods.map((food) => (
          <Food food={food} key={food.id} />
        ))}
      </section>
      <FoodForm show={show} handleClose={handleClose} handleShow={handleShow} />
    </Container>
  );
}

export default App;
