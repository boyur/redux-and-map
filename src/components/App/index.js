import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { isShowMapSelector } from '../../reducers/ui/selectors';
import { toggleIsShowMap } from '../../reducers/ui/actions';

import App from './App';

const mapStateToProps = createSelector(
  isShowMapSelector,
  (isShowMap) => ({ isShowMap })
);

const mapDispatchToProps = {
  toggleIsShowMap
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(App);
