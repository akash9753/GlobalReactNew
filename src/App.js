import React, { useEffect } from "react";
import "./App.css";
import LiftingStateUp from "./LiftingStateUp1/LiftingStateUp";
// import HookForm from './react-hook-form/HookForm';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import ListKeys from "./ListAndKeys/Listkeys";
import Test from "./LiftingStateUp1/Test";
import Employee from "./LiftingStateUp2/Employee";
import CvsI from "./CompositionVsInheritance/CvsI";
import Ex1 from "./CompositionVsInheritance/Ex1";
import Ex2 from "./CompositionVsInheritance/Ex2";
import Ex3 from "./CompositionVsInheritance/Ex3";
import Header from "./Container/Header";
import Auth from "./Container/Auth";
import { UserContextProvider } from "./context/userContext";
import UserefEx1 from "./useref/UserefEx1";
import UserefEx2 from "./useref/UserefEx2";
import UserefEx3 from "./useref/UserefEx3";
import JSDom from "./useref/JSDom";
import Navbar from "./MaterialCrud/Navbar";
import AddUser from "./MaterialCrud/AddUser";
import AllUsers from "./MaterialCrud/Allusers";
import HomeCrud from "./MaterialCrud/HomeCrud";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./MaterialCrud/EditUser";
import SearchUsers from "./higherOrderComponent/Users";
import TodoList from "./higherOrderComponent/TodoList";
import Users from "./higherOrderComponent/Users";
import SearchTodos from "./higherOrderComponent/TodoList";
import Jsx from "./JsxInReact/Jsx";
import Jsx2 from "./JsxInReact/Jsx2";
import Jsx3 from "./JsxInReact/Jsx3";
import Jsx4 from "./JsxInReact/Jsx4";
import JsxFragment1 from "./JsxInReact/JsxFragment1";
import JsxFragment2 from "./JsxInReact/JsxFragment2";
import PortalEx1 from "./portals/PortalEx1";
import ProfilerEx1 from "./Profiler/ProfilerEx1";
import ForwardRef from "./ForwardRef/ForwardRef";
import RenderProps from "./rendr-props/RenderProps";
import Uncontrolled from "./uncontrolledComponent/Uncontrolled";
import Controlled from "./uncontrolledComponent/Controlled";
import ProptypesChecking from "./proptypes-Checking/ProptypesChecking";
import Home from "./Home";
import Usestate from "./Hooks/Usestate";
import Useeffect from "./Hooks/Useeffect";
import Usememo from "./Hooks/Usememo";
import Usecallback from "./Hooks/Usecallback";
import ReactTable from "./reactTable/ReactTable";
import SortingTable from "./reactTable/SortingTable";
import Filtering from "./reactTable/Filtering";
import PaginationTable from "./reactTable/PaginitionTable";
import ActionCrud from "./reactTable/ActionCrud";
import ReactTableHome from "./ReactTableCrudBootstrap.js/ReactTableHome";
import Popup from "./popup/Popup";
import Responsiveness from "./responsiveness/Responsiveness";
import Animation from "./animation/Animation";
function App() {
  useEffect(() => {
    document.title = "Global React";
  }, []);
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const state = {
    name: "akash patel",
  };
  var onRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    console.log(id, phase, startTime, commitTime);
  };
  return (
    <div className="app">
      {/* <HookForm/> */}
      {/* <ListKeys arr = {arr}/> */}
      {/* <ListKeys/> */}
      {/* <button onClick={notify}>Notify!</button>
        <ToastContainer /> */}
      {/* <LiftingStateUp name={state.name}/>
      <Test name={state.name}/>
      <Employee/> */}
      {/* <CvsI/>
      <hr/>
      <h2>sending data in function as props</h2>
      <Ex1/>
      <hr/>
      <h2>sending big data in function as props</h2>
      <Ex2/>
      <hr/>
      <h2>sending component as props to another component which is inside a class or function</h2>
      <Ex3/>
      <hr/> */}
      {/* <UserContextProvider>
      <Header/>
      <Auth/> 
      </UserContextProvider> */}
      {/* <LoginForm/> */}
      {/* <UserefEx1/>
      <hr/>
      <UserefEx2/>
      <hr/>
      <UserefEx3/>
      <hr />
      <JSDom/> */}
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
         <Route path="/" element={<HomeCrud />} />
         <Route path="/allUsers" element={<Allusers />} />
         <Route path="/adduser" element={<AddUser />} />
         <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter> */}
      {/* <h2>Higher Order Component</h2>
      <div className='section'>
      <div><SearchUsers/></div>
      <div><SearchTodos/></div>
      </div> */}
      {/* <Jsx/>
      <Jsx2/>
      <Jsx3/>
      <Jsx4/>
      <JsxFragment1/> */}
      {/* <Profiler id='profiler' onRender={onRenderCallback}>
      <ProfilerEx1/>
      </Profiler> */}
      {/* <ForwardRef/> */}
      {/* <RenderProps/> */}
      {/* <Uncontrolled/>
      <Controlled/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/proptypesChecking"
            element={<ProptypesChecking name={"akash"} age={10} />}
          />
          <Route path="homecrud" element={<HomeCrud />}>
            <Route path="allusers" element={<AllUsers />} />
            <Route path="adduser" element={<AddUser />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/proptypesChecking"
            element={<ProptypesChecking name={"akash"} age={10} />}
          />
          <Route path="/usestate" element={<Usestate />} />
          <Route path="/useeffect" element={<Useeffect />} />
          <Route path="/usememo" element={<Usememo />} />
          <Route path="/usecallback" element={<Usecallback />} />
          `<Route path="/react-table" element={<ReactTable />} />`
          <Route path="/sort-table" element={<SortingTable />} />
          <Route path="/filter-table" element={<Filtering />} />PaginationTable
          <Route path="/pagination-table" element={<PaginationTable />} />
          <Route path="/action-crud" element={<ActionCrud />} />
          <Route path="/popup" element={<Popup />} />
          <Route path="/responsiveness" element={<Responsiveness />} />
          <Route path="/animation" element={<Animation />} />
        
          {/* <Route path="/homecrud" element={<HomeCrud />} />
          <Route path="/allusers" element={<AllUsers />} /> */}
          {/* <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} /> */}
          {/* </Routes>

          <Routes> */}
          <Route path="/react-table-home" element={<ReactTableHome />} />
          <Route path="/all-users" element={<ActionCrud />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
