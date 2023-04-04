import React, { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      const timer =  setTimeout(() => {
          setCount((prev) => prev + 1);
      }, 1000);
        return () => {
          clearInterval(timer);
        };
    })
    return <span>{count}</span>;
}

export default Counter;