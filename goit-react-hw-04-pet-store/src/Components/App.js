import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import NotFoundPage from '../Pages/NotFound';
import style from '../styles.css';
import Loader from './Loader';
import Nav from './Nav';

const AsyncHomePage = Loadable({
  loader: () => import('../Pages/HomePage' /* webpackChunkName: "HomePage" */),
  loading: Loader,
});

const AsyncAboutPage = Loadable({
  loader: () =>
    import('../Pages/AboutPage' /* webpackChunkName: "AboutPage" */),
  loading: Loader,
});

const AsyncPetPage = Loadable({
  loader: () => import('../Pages/PetPage' /* webpackChunkName: "PetPage" */),
  loading: Loader,
});

const AsyncPetsPage = Loadable({
  loader: () => import('../Pages/PetsPage' /* webpackChunkName: "PetsPage" */),
  loading: Loader,
});

const App = () => {
  return (
    <div className={style.containerStyles}>
      <Nav />
      <Switch>
        <Route path="/" exact component={AsyncHomePage} />
        <Route path="/about" component={AsyncAboutPage} />
        <Route path="/pets/:id" component={AsyncPetPage} />
        <Route path="/pets" component={AsyncPetsPage} />
        <Route component={NotFoundPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
