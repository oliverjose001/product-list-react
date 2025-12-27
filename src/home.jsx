import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  let [datas, setDatas] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.products.slice(0, 25));
        setLoading(false);
      })
      .catch((err) => console.error("this from api error : ", err));
  }, []);

  return (
    <>
      <h1 className="head">Products</h1>

      {loading && <p className="head"> Loading ..... </p>}
      <div className="condinar">
        {datas.map((u) => (
          <div className="card" key={u.id}>
            <Link
              to={`/products/${u.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h6>{u.id} </h6>
              <h4>{u.title} </h4>
              <img src={u.images[0]} alt="img" />
              <h5>{u.brand || u.shippingInformation} </h5>
              <p>
                {" "}
                &#8377;{u.price} / &#9733;{u.rating}{" "}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
