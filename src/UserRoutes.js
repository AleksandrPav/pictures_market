import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const UserRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center ">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/posts" element={<PostsSearchPage />} />
                <Route path="/posts/:id" element={<SinglePostPage />}>
                    <Route path="comments" element={<SinglePostCommentsPage />} />
                </Route>
                
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
