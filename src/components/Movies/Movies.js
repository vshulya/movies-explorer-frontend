import React from 'react';
//import Preloader from '../Preloader/Preloader';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';



function Movies() {

  // const [isLoading, setIsLoading] = React.useState(false);

  // React.useEffect(() => {
  //   setIsLoading(true);
  //  //api
  //   .then(res => res)
  //   .finally(() =>{
  //     setIsLoading(false);
  //   })
  // })

  return (
    <>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
    </>
  )
};
export default Movies ;