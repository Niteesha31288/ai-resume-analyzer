import React from 'react';

function ResumePreview({ text }) {
  return (
    <div>
      <h2>Resume Preview</h2>
      <pre>{text}</pre>
    </div>
  );
}

export default ResumePreview;
