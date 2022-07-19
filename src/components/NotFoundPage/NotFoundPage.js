import './NotFoundPage.css';
import {Link, useNavigate} from "react-router-dom";

export function NotFoundPage(){

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)}

  return(
    <section className="notFound">
      <div className="notFound__container">
        <div className="notFound__wrapper">
          <h2 className="notFound__title">404</h2>
          <p className="notFound__subtitle">Страница не найдена</p>
        </div>
        <Link className="notFound__link link" to="" onClick={handleBack}>Назад</Link>
      </div>
    </section>
  )
}