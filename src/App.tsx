import React, { useEffect, useRef } from 'react';
import Diagram, { DiagramRef } from 'devextreme-react/diagram';
import 'whatwg-fetch';

export default function App() {
  // Create a ref for the Diagram instance
  const diagramRef = useRef<DiagramRef | null>(null);

  useEffect(() => {
    if (diagramRef.current) {
      const diagram = diagramRef.current.instance();

      // Fetch and load diagram data
      fetch('https://js.devexpress.com/React/Demos/WidgetsGallery/JSDemos/data/diagram-flow.json')
        .then((response) => response.json())
        .then((json) => {
          diagram.import(JSON.stringify(json));
        })
        .catch(() => {
          console.error('Data Loading Error');
        });
    }
  }, []);

  return (
    <Diagram
      id="diagram"
      ref={(instance) => {
        diagramRef.current = instance as DiagramRef; // Explicitly cast the instance
      }}
    />
  );
}
