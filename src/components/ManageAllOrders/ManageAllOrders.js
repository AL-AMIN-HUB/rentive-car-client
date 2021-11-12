import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
// import useAuth from "../../hooks/useAuth";
// import Stack from "@mui/material/Stack";
// import LinearProgress from "@mui/material/LinearProgress";
import swal from "sweetalert";

const ManageAllOrders = () => {
  /*   const [updateStatus, setUpdateStatus] = useState("");
  const [orderId, setOrderId] = useState("");
  const { user, isLoading, setIsLoading } = useAuth(); */
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    // setIsLoading(true);
    fetch("https://peaceful-mountain-47357.herokuapp.com/allOrdersManage")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
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
    fetch(`https://peaceful-mountain-47357.herokuapp.com/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          swal("Successfully delete Your Order!. We are obliged to delete the order at your request. Thanks again");
        }
        const remaining = allOrders.filter((order) => order._id !== id);
        setAllOrders(remaining);
      });
  };

  const handleOrderId = (id) => {
    // setOrderId(id);
    // console.log(id);
  };
  //
  const handleOnSubmit = (e) => {
    // setUpdateStatus(e.target?.status?.value);
    /* fetch("http://localhost:5000/update/status", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          swal({
            title: "Thank You!",
            text: "Status update is complete",
            icon: "success",
            button: "Done",
          });
        }
      }); */

    e.preventDefault();
  };

  return (
    <div className="text-center">
      <h2>All Orders Found: {allOrders.length} </h2>
      <table className="table">
        <thead className="text-center">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Car</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Manage Order</th>
          </tr>
        </thead>
        {allOrders.map((order, index) => (
          <tbody key={order._id} className="text-center">
            <tr>
              <th style={{ width: "25px", borderRight: "1px solid grey" }} scope="row">
                {index + 1}
              </th>
              <td style={{ width: "200px", margin: "0 0 0 5px" }}>
                <img style={{ width: "100%" }} src={order.img} alt="" />
              </td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>${order.price}</td>
              <td>
                <form onSubmit={handleOnSubmit} action="#">
                  <select onClick={() => handleOrderId(order?._id)} name="status" id="">
                    <option value="Pending">Pending</option>
                    <option value="Shipping">Shipping</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                  <Button className="btn-custom" sx={{ px: 2, py: 1, m: 1, color: "white" }} type="submit">
                    Update
                  </Button>
                </form>
              </td>
              <td style={{ width: "100px" }}>
                <Button color="success" onClick={() => handleDelete(order._id)} variant="contained">
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

export default ManageAllOrders;
