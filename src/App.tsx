import { Outlet } from "react-router";
import CommonLayout from "./components/LayOut/CommonLayout";

const App = () => {
  return (
    <div>
      <CommonLayout>
        <Outlet></Outlet>
      </CommonLayout>
    </div>
  );
};

export default App;