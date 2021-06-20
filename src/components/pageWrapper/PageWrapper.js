import Menu from "../menu/Menu";


const PageWrapper = ({ children }) => {
  return (
    <>
      <Menu/>
      <div>
        {children}
      </div>
    </>
  );
};

export default PageWrapper;
