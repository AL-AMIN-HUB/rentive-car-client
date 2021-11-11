import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./Review.css";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/allReview", data).then((res) => {
      if (res?.data?.insertedId) {
        alert("Your review has been successfully");
      }
    });
    reset();
  };
  return (
    <div className="review" style={{ textAlign: "center" }}>
      <h1>Review Our Products</h1>
      <form style={{ margin: "0 auto" }} onSubmit={handleSubmit(onSubmit)}>
        <input style={{ fontSize: "18px", padding: "10px" }} {...register("name")} />
        <input style={{ fontSize: "18px", padding: "10px" }} {...register("email")} />
        {/* <input disabled style={{ fontSize: "18px", padding: "10px" }} {...register("name")} defaultValue="name" />
        <input disabled style={{ fontSize: "18px", padding: "10px" }} {...register("email")} defaultValue="email" /> */}
        <input
          type="number"
          style={{ fontSize: "18px", padding: "10px" }}
          {...register("rating", { min: 1, max: 5 }, { required: true })}
          placeholder="Rating out of 5"
        />
        <input style={{ fontSize: "18px", padding: "10px" }} {...register("profession", { required: true })} placeholder="Your Profession" />
        <input style={{ fontSize: "18px", padding: "10px" }} {...register("img", { required: true })} placeholder="Your photo url" />
        <textarea
          rows="7"
          style={{ fontSize: "18px", padding: "10px", border: "1px solid grey" }}
          {...register("desc", { required: true })}
          placeholder="Comment "
        />
        <input style={{ fontSize: "18px", padding: "10px", cursor: "pointer" }} type="submit" />
      </form>
    </div>
  );
};

export default Review;
