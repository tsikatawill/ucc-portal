import { FC } from "react";
import UCCLogo from "../images/ucc-logo.gif";

interface props {
  headerTitle: string;
}

const FormHeader: FC<props> = ({ headerTitle }) => {
  return (
    <div className="form-header">
      <div className="logo-wrapper mb-2">
        <img src={UCCLogo} className="w-20 mx-auto" alt="logo" />
      </div>
      <h2 className="font-bold capitalize text-lg text-center">
        {headerTitle}
      </h2>
    </div>
  );
};

export default FormHeader;
