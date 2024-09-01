import styles from "@/styles/index.module.css";
import SendButton from "../../components/SendButton";
import sendPost from "@/pages/api/apiConnect";
import InputText from "../../components/InputText";
import { use, useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const handleSendPost = () => {
    sendPost(inputValue);
  };

  return (
    <div className={styles.index}>
      <SendButton onClick={handleSendPost}></SendButton>
      <InputText
        value={inputValue}
        onChange={(e: any) => setInputValue(e.target.value)}
        text={inputValue}
      ></InputText>
    </div>
  );
}
