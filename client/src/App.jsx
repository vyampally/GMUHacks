import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import DocumentManager from "./routes/documentManager/DocumentManager";
import FirstTimeHomeBuyer from "./routes/firstTimeHomeBuyer/FirstTimeHomeBuyer";
import { Layout, RequireAuth } from "./routes/layout/layout";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        {/* Layout for authenticated and unauthenticated users */}
        <Route path="/" element={<Layout />}>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/list" element={<ListPage />} loader={listPageLoader} />
          <Route path="/:id" element={<SinglePage />} loader={singlePageLoader} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/document-manager" element={<DocumentManager />} /> {/* Document Manager */}
          <Route path="/first-time-home-buyer" element={<FirstTimeHomeBuyer />} /> {/* First Time Home Buyer */}
        </Route>

        {/* Protected routes (RequireAuth) */}
        <Route element={<RequireAuth />}>
          <Route path="/profile" element={<ProfilePage />} loader={profilePageLoader} />
          <Route path="/profile/update" element={<ProfileUpdatePage />} />
          <Route path="/add" element={<NewPostPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
