import { AdminRoutes } from "./AppRoutes";
import { useHistory } from "react-router-dom";

export const useAppRoutes = () => {
  const history = useHistory();

  const toAdminHome = () => {
    history.push(AdminRoutes.HOME);
  };

  const toAdminLogin = () => {
    history.push(AdminRoutes.LOGIN);
  };

  const toAdminRegister = () => {
    history.push(AdminRoutes.REGISTER);
  };

  const toAdminArticles = () => {
    history.push(AdminRoutes.ARTICLES);
  };

  const toAdminCreateArticle = () => {
    history.push(AdminRoutes.ARTICLES_CREATE);
  };

  const toAdminDeleteArticle = () => {
    history.push(AdminRoutes.ARTICLES_DELETE);
  };

  const toAdminDetailArticle = () => {
    history.push(AdminRoutes.ARTICLES_DETAIL);
  };

  return {
    toAdminHome,
    toAdminLogin,
    toAdminRegister,
    toAdminArticles,
    toAdminCreateArticle,
    toAdminDeleteArticle,
    toAdminDetailArticle,
  };
};
