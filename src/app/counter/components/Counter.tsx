import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { deacrement, increament, selectCounter } from "../slice/counterSlice";

const Counter = () => {
  const dispatch: AppDispatch = useDispatch();
  const counterValue = useSelector(selectCounter);
  const handleIncrement = () => {
    dispatch(increament());
  };
  const handleDeacrement = () => {
    dispatch(deacrement());
  };

  return (
    <section className=" max-w-md rounded border mx-auto mt-10">
      <div className=" p-4">
        <h3 className=" text-2xl mb-4 ">Counter Value: {counterValue}</h3>
      </div>
      <div className="flex gap-10 p-6">
        <button
          onClick={handleIncrement}
          className=" bg-green-500 hover:bg-green-700 text-white p-2 rounded"
        >
          Increment
        </button>
        <button
          onClick={handleDeacrement}
          className=" bg-red-500 hover:bg-red-700 text-white p-2 rounded"
        >
          Deacrement
        </button>
      </div>
    </section>
  );
};

export default Counter;
