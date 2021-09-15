import { Card, Button } from "react-bootstrap";

const ProductCard = (props) => {
  const { products } = props;

  return (
    <div className="product">
      {products.map((p) => (
        <Card
          style={{
            width: "15rem",
            marginLeft: "1.5vw",
            marginTop: "1rem",
            float: "left",
            background: "#16A085",
            borderRadius: "25px",
          }}
          key={p.id}
        >
          <Card.Img variant="fix" src={p.image} style={{ height: "8vw" }} />

          <Card.Body>
            <Card.Title>{p.name}</Card.Title>
            {p.available === 0 ? (
              <p style={{ color: "red" }}>Out of stock</p>
            ) : (
              <p>In Stock {p.available}</p>
            )}
            <Card.Text>${p.price}</Card.Text>
            <Button
              variant="primary"
              onClick={() => props.addProduct(p)}
              disabled={p.available === 0}
            >
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
