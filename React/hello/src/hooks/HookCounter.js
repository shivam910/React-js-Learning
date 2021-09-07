import React, { useState } from "react";

export default function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button className="btn" onClick={() => setCount(count + 1)}>Count : {count}</button>
    </div>
  );
}
