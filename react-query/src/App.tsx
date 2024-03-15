import { Route, Routes } from "react-router-dom";
import PostsList from "./components/PostsList";
import AddPost from "./components/AddPost";
import AppLayout from "./layout/AppLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<PostsList />} />
          <Route path="/add-post" element={<AddPost />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
