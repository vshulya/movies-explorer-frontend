import './NotFoundPage.css';
import {Link, useHistory} from "react-router-dom";

export function NotFoundPage(){

  // const history = useHistory();

  // function handleBack(){
  //   history.goBack()
  // }

  return(
    <div className="notFound">
      <h2 className="notFound__title">404</h2>
      <p className="notFound__subtitle">Страница не найдена</p>
      <Link className="notFound__link" to="/signin">Назад</Link>
      {/* <div><a href='#' className="notFound__link">Назад</a></div> TODO add to="/signin" */}
    </div>
  )
}