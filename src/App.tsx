import React, { useEffect, useRef } from 'react';
import Diagram, { DiagramRef } from 'devextreme-react/diagram';
import './App.css'; // Custom styles
import 'whatwg-fetch';
import Header from './Header';

export default function App() {
  const diagramRef = useRef<DiagramRef | null>(null); // Initialize with null, not undefined

  useEffect(() => {
    if (diagramRef.current) { // Check if diagramRef.current is not null
      const diagram = diagramRef.current.instance();
      fetch('/diagram-flow.json')
        .then((response) => response.json())
        .then((json) => {
          diagram.import(JSON.stringify(json));
        })
        .catch(() => {
          throw new Error('Data Loading Error');
        });
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '90vh' }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Diagram
          id="diagram"
          ref={diagramRef}
          autoZoomMode="fitWidth"
          style={{ height: '100%' }} // Ensure the diagram takes full height
        />
      </div>
    </div>
  );
}
