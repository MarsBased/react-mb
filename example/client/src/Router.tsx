import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import routes from "./routes";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UserLoginPage from "./pages/UserLoginPage";
import UserAccountPage from "./pages/UserProfilePage";
import UserRecoveryPasswordPage from "./pages/UserRecoveryPasswordPage";
import AlbumListPage from "./pages/AlbumListPage";
import AlbumPage from "./pages/AlbumPage";
import AlbumPhotoPage from "./pages/AlbumPhotoPage";
import AdminUserListPage from "./pages/admin/AdminUserListPage";
import AdminUserDetailPage from "./pages/admin/AdminUserDetailPage";
import AdminHomePage from "./pages/admin/AdminHomePage";

const AppRouter: React.FC = () => {
  const loggedIn = true;
  const admin = true;
  console.log("RENDER", AppRouter.name);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.about()}>
          <AboutPage />
        </Route>
        {admin && (
          <Route path="/admin">
            <Switch>
              <Route exact path={routes.admin.root()}>
                <AdminHomePage />
              </Route>
              <Route exact path={routes.admin.users()}>
                <AdminUserListPage />
              </Route>
              <Route exact path={routes.admin.user(":id")}>
                <AdminUserDetailPage />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </Route>
        )}
        {loggedIn && (
          <Switch>
            <Route exact path={routes.root()}>
              <HomePage />
            </Route>
            <Route exact path={routes.account()}>
              <UserAccountPage />
            </Route>
            <Route exact path={routes.albums()}>
              <AlbumListPage />
            </Route>
            <Route exact path={routes.album(":id")}>
              <AlbumPage />
            </Route>
            <Route exact path={routes.albumPhoto(":albumId", ":photoId")}>
              <AlbumPhotoPage />
            </Route>
            {/* <Route exact path={routes.login()}>
              <Redirect to={routes.root()} />
            </Route> */}
            {/* <Route path="*">
              <NotFoundPage />
            </Route> */}
            <Route exact path={routes.recoverPassword()}>
              <UserRecoveryPasswordPage />
            </Route>
            <Route exact to={routes.login()}>
              <UserLoginPage />
            </Route>
          </Switch>
        )}
        {!loggedIn && (
          <Switch>
            {/* <Route path="*">
            <Redirect to={routes.login()} />
          </Route> */}
          </Switch>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
