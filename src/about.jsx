import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function About() {
  const { id } = useParams(); // get product id from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) return <p className="abouy-head">Loading...</p>;

  return (
    <div className="card-container">
    <div className="about-card" >
      <h4>{product.title}</h4>
      <img src={product.images[0]} alt={product.title} />
      <h5>{product.brand}</h5>
      <p>&#8377; {product.price}</p>
      <p>&#9733; {product.rating}</p>
      <p>{product.description}</p>

      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "15px",
          color: "blue",
          textDecoration: "underline",
        }}
      >
        ← Back to Products
      </Link>
    </div></div>
  );
}
