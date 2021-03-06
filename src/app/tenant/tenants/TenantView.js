import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

import { tenantProp } from './PropTypes';
import Styles from './Styles';

const TenantView = ({ tenant: { id, name }, onTenantClick }) => {
  const classes = Styles();

  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox checked={false} />
      </TableCell>
      <TableCell component="th" scope="row" padding="none">
        <Link className={classes.link} onClick={() => onTenantClick(id)}>
          {name}
        </Link>
      </TableCell>
    </TableRow>
  );
};

TenantView.propTypes = {
  tenant: tenantProp.isRequired,
  onTenantClick: PropTypes.func.isRequired,
};

export default TenantView;
