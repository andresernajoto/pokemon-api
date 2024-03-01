import { Alert, Snackbar } from "@mui/material";

const Notifications = ({ open, onClose, severity, message }) => {
    return (
        <Snackbar
            open={open}
            onClose={onClose}
            autoHideDuration={3500}
        >
            <Alert
                variant='filled'
                onClose={onClose}
                severity={severity}
                sx={{ width: '100%' }}
            >
                { message }
            </Alert>
        </Snackbar>
    );
}

export default Notifications;