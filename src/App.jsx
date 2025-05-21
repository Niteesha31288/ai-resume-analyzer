import React, { useState } from 'react';
import ResumeUpload from './components/ResumeUpload';
import ResumePreview from './components/ResumePreview';
import AnalysisPanel from './components/AnalysisPanel';
import './App.css';

function App() {
  const [resumeText, setResumeText] = useState('');
  const [analysis, setAnalysis] = useState(null);
  
  console.log("Loaded API key:", process.env.REACT_APP_OPENAI_API_KEY);

  const handleUpload = (text) => {
    setResumeText(text);
    setAnalysis(null);
  };


  const analyzeResume = async () => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{
            role: 'user',
            content: `Analyze the following resume and suggest improvements for structure, keywords, and formatting:\n\n${resumeText}`
          }]
        })
      });
  
      const data = await response.json();
  
      if (!data.choices || !data.choices[0]) {
        throw new Error("No valid response from OpenAI API.");
      }
  
      setAnalysis(data.choices[0].message.content);
  
    } catch (error) {
      console.error("Error analyzing resume:", error);
      setAnalysis("❌ Error analyzing resume. Please check your API key or try again later.");
    }
  };
  

 /* return (
    <div className="app">
      <h1>AI Resume Analyzer</h1>
      <ResumeUpload onUpload={handleUpload} />
      {resumeText && <ResumePreview text={resumeText} />}
      {resumeText && <button onClick={analyzeResume}>Analyze Resume</button>}
      {analysis && <AnalysisPanel text={analysis} />}
    </div>
  ); 
  */
  return (
    <div className="app">
      <h1>AI Resume Analyzer</h1>
      
      <section>
        <ResumeUpload onUpload={handleUpload} />
      </section>
  
      {resumeText && (
        <section>
          <h2>Resume Preview</h2>
          <ResumePreview text={resumeText} />
          <button onClick={analyzeResume}>Analyze Resume</button>
        </section>
      )}
  
      {analysis && (
        <section>
          <h2>Analysis Result</h2>
          <AnalysisPanel text={analysis} />
        </section>
      )}
    </div>
  );
  
}

export default App;
