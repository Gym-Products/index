import { Header } from "@components/Organisms";

import GlobalStyle from "../styles/global";

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <GlobalStyle />
    </>
  );
};

export default DefaultTemplate;

interface DefaultTemplateProps {
  children: React.ReactNode;
}
