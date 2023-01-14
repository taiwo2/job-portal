import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import AppliedJobs from "./pages/AppliedJobs";
import Home from "./pages/Home";
import JobInfo from "./pages/JobInfo";
import PostJobs from "./pages/PostJobs";
import Profile from "./pages/Profile";
import FadeLoader from "react-spinners/ClipLoader";
import { useSelector, useDispatch } from "react-redux";
import { getallJobs } from "./redux/actions/jobActions";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Posted from "./pages/Posted";
import EditJob from "./pages/EditJob";
import { getallUsers } from "./redux/actions/userAction";
import UserInfo from "./pages/UserInfo";

const ProtectedRoute = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

function App() {
  // const [loading]
  // const navigate = useNavigate();
  const { loader } = useSelector((state) => state.loader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getallJobs());
    dispatch(getallUsers())
  }, []);

  return (
    <>
      {loader && (
        <div className="sweet-loading">
          <h1>Loading please wait</h1>
        </div>
      )}

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/job/:id" element={<JobInfo />} />
          </Route>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/appliedjobs" element={<AppliedJobs />} />
          </Route>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/postedjobs" element={<Posted />} />
          </Route>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/postjobs" element={<PostJobs />} />{" "}
          </Route>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/editjob/:id" element={<EditJob />} />
          </Route>
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/users/:id" element={<UserInfo/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
