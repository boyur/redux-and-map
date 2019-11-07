import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { isMapLoadSelector } from '../../reducers/map/selectors';

import App from './App';

const mapStateToProps = createSelector(
  isMapLoadSelector,
  (isMapLoad) => ({ isMapLoad })
);

const mapDispatchToProps = null;

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(App);
