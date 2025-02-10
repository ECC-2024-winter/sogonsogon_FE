import { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import * as S from "./HeartButton.style";

// TODO: function 컴포넌트로 수정
const HeartButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <S.Button onClick={onClick}>
      {isChecked ? (
        <S.Orange>
          <HeartFilled />
        </S.Orange>
      ) : (
        <HeartOutlined />
      )}
    </S.Button>
  );
};

export default HeartButton;
