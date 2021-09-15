import { Button } from "react-bootstrap";

const Cart = (props) => {
  const { cart } = props;
  return (
    <div>
      <div className="cart">
        {cart.map((p) => (
          <div key={p.id} style={{ width: "400px", height: "40px" }}>
            <img style={{ width: "40px", float: "left" }} src={p.image} />
            <h5 style={{ float: "left" }}>
              {p.name} x {p.quantity}
            </h5>
            <p style={{ textAlign: "right" }}>
              ${p.price * p.quantity}{" "}
              <Button
                onClick={() => props.removeProduct(p)}
                style={{ marginLeft: "20px" }}
              >
                X
              </Button>
            </p>
          </div>
        ))}
      </div>
      <div className="total">
        <h3>Cart Value : ${props.total}</h3>
      </div>
      <div>
        <Button onClick={() => props.orderPlace()}>Place Order</Button>
      </div>
    </div>
  );
};

export default Cart;
