import { useNavigate } from "react-router-dom";

export const useRouteChange = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    };
    return routeChange;
};