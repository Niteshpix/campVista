import { useState } from "react";
import Script from "next/script";

const Editor = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);

  const handleButtonClick = () => {
    setEditorLoaded(true);
    if (editorLoaded === true) {
      window.VistaCreateEditor.init({
        apiKey: "VISTA-CREATE-DEMO-PARTNER",
        designType: "facebookSM",
        user: {
            email: 'nitesh@pixlerlab.com',
            externalUserId: 'Job#2k22',
        },
      });
    }
  };

  return (
    <div>
      <p>
        Editor is initialized with new project created with chosen designType.
      </p>
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginLeft: "40%",
        }}
      >
        Load Editor
      </button>
      {editorLoaded && <div id="editor"></div>}

      <Script src="https://create.vista.com/js/frame_v2.min.js" />
    </div>
  );
};

export default Editor;
