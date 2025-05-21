import React from 'react';

function AnalysisPanel({ text }) {
  return (
    <div>
      <h2>Analysis Result</h2>
      <pre>{text}</pre>
    </div>
  );
}

export default AnalysisPanel;
