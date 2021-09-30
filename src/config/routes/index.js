import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from '../../pages/Search';
import DetailCountries from '../../pages/DetailCountries';

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/detail">
            <DetailCountries />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
