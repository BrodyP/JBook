import React, { useEffect, useRef } from 'react';
import './preview.css';

interface PreviewPtops {
  code: string;
  err: string;
}

const html = `
<html>
  <head>
    <style>
      html {
        background-color: white;
      }
    </style>
  </head>
  <body>
    <div id='root' />
    <script>
    const handleError = (err) => {
      const root = document.querySelector('#root');
      root.innerHTML = '<div style = "color: red;"> <h4>Runtime Error</h4>' + err + ' </div>'
      console.error(err);
    };

      window.addEventListener('error', (event) => {
        event.preventDefault();
        handleError(event.error)
      })

      window.addEventListener('message', (event) => {
        try {
          eval(event.data);
        } catch (err) {
          handleError(err);
        }
      })
    </script>
  </body>
</html>
    `;

const Preview: React.FC<PreviewPtops> = ({ code, err }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcDoc = html;
    setTimeout(() => {
      iframe.current.contentWindow.postMessage(code, '*');
    }, 50);
  }, [code]);

  return (
    <div className="preview-wrapper">
      <iframe
        title="code-preview"
        sandbox="allow-scripts"
        ref={iframe}
        srcDoc={html}
      />
      {err && <div className="preview-error">{err}</div>}
    </div>
  );
};

export default Preview;
