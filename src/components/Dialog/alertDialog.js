import React from 'react';
import PropTypes from 'prop-types';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";

import {useTranslation} from "react-i18next";

const AlertDialog = (props) => {

    const {t} = useTranslation();

    return (
        <Dialog
            open={props.error}
            keepMounted
            onClose={props.handleError}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description">
            <DialogTitle id="alert-dialog-slide-title">{t("Error")}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {t(props.message)}
                </DialogContentText>
            </DialogContent>
            <DialogActions>

                <Button onClick={props.handleError} color="primary">
                    OK
                </Button>
            </DialogActions>
        </Dialog>)
};

AlertDialog.propTypes = {
    error: PropTypes.bool.isRequired,
    handleError: PropTypes.func,
    message: PropTypes.string.isRequired
};

export default AlertDialog;
