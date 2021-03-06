import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { tenantsProp } from './PropTypes';
import Styles from './Styles';
import TenantsTableHeader from './TenantsTableHeader';
import TenantView from './TenantView';

const TenantsView = ({ tenants, onCreateTenantClick, onTenantClick }) => {
  const classes = Styles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle" size="medium" aria-label="enhanced table">
            <TenantsTableHeader />
            <TableBody>
              {tenants.map(tenant => (
                <TenantView key={tenant.id} tenant={tenant} onTenantClick={onTenantClick} />
              ))}
            </TableBody>
          </Table>
        </div>
      </Paper>

      <Fab color="primary" aria-label="add" className={classes.fab} size="large" onClick={onCreateTenantClick}>
        <AddIcon />
      </Fab>
    </div>
  );
};

TenantsView.propTypes = {
  tenants: tenantsProp.isRequired,
  onCreateTenantClick: PropTypes.func.isRequired,
  onTenantClick: PropTypes.func.isRequired,
};

export default TenantsView;
