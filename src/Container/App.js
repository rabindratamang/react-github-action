import React, {useState} from 'react';
import {ThemeProvider} from "styled-components";
import {PrimaryButton,SecondaryButton,TertiaryButton, SignUpModal} from '../Components/Common';
import {GlobalStyle, darkTheme, defaultTheme} from "../Components/Common/Utils";

function App() {

  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <ThemeProvider theme={ useDarkTheme ? darkTheme : defaultTheme}>
        <button 
          style={{margin: "0 16px 24px", padding: "8px", background:"none"}}
          onClick={()=>setUseDarkTheme(true)}
        >
          Dark Theme
        </button>
        <button 
          style={{margin: "0 16px 24px", padding: "8px", background:"none"}}
          onClick={()=>setUseDarkTheme(false)}
        >
          Default Theme
        </button>
       
        <div style={{
            background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
            width: "100vw",
            height: "100vh",
          }}
        >

          <PrimaryButton>Primary Button</PrimaryButton>
          <SecondaryButton>Secondary Button</SecondaryButton>
          <TertiaryButton>Tertiary Button</TertiaryButton>

          <PrimaryButton disabled>Primary Disabled</PrimaryButton>
          <SecondaryButton disabled>Secondary Disabled</SecondaryButton>
          <TertiaryButton disabled>Tertiary Disabled</TertiaryButton>

          <PrimaryButton modifiers="small">Primary Button</PrimaryButton>
          <SecondaryButton modifiers={["large"]}>Secondary Button</SecondaryButton>
          <TertiaryButton>Tertiary Button</TertiaryButton>


          <PrimaryButton modifiers={["small", "success", "primaryButtonSuccess"]}>
            Hello world
          </PrimaryButton>
          <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>
            Goodbye world
          </SecondaryButton>
          <TertiaryButton modifiers={["error", "tertiaryButtonError"]}>
            Hey world
          </TertiaryButton>

          <PrimaryButton onClick={() => setShowModal(!showModal)}>Toggle Modal</PrimaryButton>
          <SignUpModal showModal={showModal} setShowModal={setShowModal}/>
        </div>
      <GlobalStyle/>
  </ThemeProvider>
  );
}

export default App;
