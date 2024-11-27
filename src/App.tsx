import React, { useRef } from "react";
import Diagram, { DiagramRef } from "devextreme-react/diagram";

function App() {
  const diagramRef = useRef<DiagramRef | null>(null); // Set the type to DiagramRef | null

  return (
    <Diagram
      id="diagram"
      ref={(instance) => {
        diagramRef.current = instance as DiagramRef; // Explicitly cast the instance
      }}
    />
  );
}

export default App;
