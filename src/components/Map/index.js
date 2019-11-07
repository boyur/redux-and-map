import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { onViewportChange, onLoadMap, getStyle } from '../../reducers/map/actions';
import { viewportSelector } from '../../reducers/map/selectors';


import Map from './Map';

const mapStateToProps = createSelector(
  viewportSelector,
  (viewport) => ({ viewport })
);

const mapDispatchToProps = {
  onViewportChange,
  onLoadMap,
  getStyle
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Map);
