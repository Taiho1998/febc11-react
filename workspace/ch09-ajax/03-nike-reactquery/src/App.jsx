import Shipping from "./shipping";
import Product from "./Product";
import { DotLoader } from "react-spinners";
import { useCallback, useEffect, useMemo, useState } from "react";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { Slide, toast, ToastContainer } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function App() {
  console.log("App 렌더링");

  // const [data, setData] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const axios = useAxiosInstance();

  // const fetchData = async (_id) => {
  //   setIsLoading(true);
  //   try {
  //     const res = await axios.get(`/products/${_id} `, {
  //       params: { delay: 1000 },
  //     });
  //     // const res = await axios.get(`/products/${_id} `);
  //     setData(res.data.item);
  //     setError(null);
  //   } catch (err) {
  //     console.error(err);
  //     setError({ message: "잠시 후 다시 요청하십시오" });
  //     setData(null);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(5);
  // }, []);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["products", 7],
    queryFn: () => axios.get(`/products/7`),
    select: (res) => res.data.item,
  });

  const orderProduct = useMutation({
    mutationFn: (products) => axios.post(`/orders`, products),
    onSuccess: () => {
      toast.success("주문이 완료되었습니다");
      refetch();
    },
    onError: (err) => {
      toast.error(err.message);
      console.error(err);
    },
  });

  // const { data, isLoading, error } = useQuery({
  //   queryFn: () =>
  //     axios.post(`/orders`, {
  //       products: [
  //         {
  //           _id: 7,
  //           quentity,
  //         },
  //       ],
  //     }),
  // });

  console.log("isLoading", isLoading);
  console.log("error", error);
  console.log("data", data);

  const basicShippingFee = 3000;

  const [quantity, setQuantity] = useState(1);
  const [shippingFees, setShippingFees] = useState(basicShippingFee);

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    setShippingFees(basicShippingFee * Math.ceil(newQuantity / 5));
  };

  const handlePayment = useCallback(() => {
    const ok = confirm(
      `배송비 ${shippingFees.toLocaleString()}원이 추가됩니다. 상품을 결제하시겠습니까?`
    );
    if (ok) {
      orderProduct.mutate({
        products: [{ _id: 7, quantity }],
      });
    }
  }, [shippingFees]);

  return (
    <>
      <h1>02 - Nike 상품 상세 조회 - React-Query </h1>
      {isLoading && <DotLoader />}
      {error && <p>{error.message}</p>}
      {data && (
        <div>
          <Product product={data} />

          <h2>수량 선택</h2>
          <div>
            가격: {data.price.toLocaleString()}원
            <br />
            남은 수량: {data.quantity - data.buyQuantity}
            <br />
            수량:{" "}
            <input
              type="number"
              min="1"
              max={data.quantity - data.buyQuantity}
              value={quantity}
              onChange={handleQuantityChange}
            />
            (배송비는 5개당{" "}
            {data.shippingFees
              ? data.shippingFees.toLocaleString()
              : basicShippingFee}
            원씩 추가됩니다.)
            <br />
            상품 금액: {(data.price * quantity).toLocaleString()}원
          </div>
          <Shipping fees={shippingFees} handlePayment={handlePayment} />
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </>
  );
}

export default App;
