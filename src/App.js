import React from 'react';
import { Route } from "react-router-dom";
import HorizontalMenu from './components/HorizontalMenu/HorizontalMenu';
import SearchGame from './components/SearchGame/SearchGame';
import Autopilot from './components/Autopilot/Autopilot';
import Challenge from './components/Challenge/Challenge';
import Salvo from './components/Salvo/Salvo';
import 'semantic-ui-css/semantic.min.css';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './reducers/reducers';
import { getGameAction, salvoAction, challengeAction, autopilotAction } from './actions/creators';

// import './App.css';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

function mapStateToProps(state) {
  return {
      game: state.game,
      salvoResponse: state.salvoResponse,
      autopilotSuccessMessage: state.autopilotSuccessMessage,
      error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
      getGame: (gameId) => { dispatch(getGameAction(gameId)); },
      salvoAction: (gameId, salvoCmd) => { dispatch(salvoAction(gameId, salvoCmd)); },
      challengeAction: (challengeCmd) => { dispatch(challengeAction(challengeCmd)); },
      autopilotAction: (gameId) => { dispatch(autopilotAction(gameId)); },
  };
}

const SearchGameRedux = connect(mapStateToProps, mapDispatchToProps)(SearchGame);
const AutopilotRdux = connect(mapStateToProps, mapDispatchToProps)(Autopilot);
const ChallengeRedux = connect(mapStateToProps, mapDispatchToProps)(Challenge);
const SalvoRedux = connect(mapStateToProps, mapDispatchToProps)(Salvo);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <HorizontalMenu />
        </header>
        <Route path="/search" exact render={() => <SearchGameRedux />} />
          <Route path="/autopilot" exact render={() => <AutopilotRdux />} />
          <Route path="/challenge" exact render={() => <ChallengeRedux />} />
          <Route path="/salvo" exact render={() => <SalvoRedux />} />
      </div>
    </Provider>
  );
}

export default App;
