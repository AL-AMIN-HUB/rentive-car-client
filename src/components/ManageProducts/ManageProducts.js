import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
// import useAuth from "../../hooks/useAuth";
// import Stack from "@mui/material/Stack";
// import LinearProgress from "@mui/material/LinearProgress";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  // const { user, isLoading, setIsLoading } = useAuth();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // setIsLoading(true);
    const url = "https://peaceful-mountain-47357.herokuapp.com/carExplore";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  }, []);

  /* if (isLoading) {
    return (
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="secondary" />
      </Stack>
    );
  } */

  //
  const handleDelete = (id) => {
    fetch(`https://peaceful-mountain-47357.herokuapp.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          swal("Successfully delete this products!");
        }
        const remaining = products.filter((order) => order._id !== id);
        setProducts(remaining);
      });
  };
  return (
    <div className="text-center">
      <h2>Products Found: {products.length} </h2>
      <table className="table">
        <thead className="text-center">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Car</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Manage Order</th>
          </tr>
        </thead>
        {products.map((product, index) => (
          <tbody key={product._id} className="text-center">
            <tr>
              <th style={{ width: "25px", borderRight: "1px solid grey" }} scope="row">
                {index + 1}
              </th>
              <td style={{ width: "200px", margin: "0 0 0 5px" }}>
                <img style={{ width: "100%" }} src={product.img} alt="" />
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td style={{ width: "500px" }}>{product.desc.slice(0, 150)}......</td>
              <td style={{ width: "200px" }}>
                <Link to={`/updateProduct/${product._id}`}>
                  <Button sx={{ mx: 2 }} variant="contained">
                    Edit
                  </Button>
                </Link>
                <Button color="success" onClick={() => handleDelete(product._id)} variant="contained">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManageProducts;
