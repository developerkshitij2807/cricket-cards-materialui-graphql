import {
  Box,
  Button,
  Container,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const DeleteModal = (props) => {
  const { open, handleClose, deletePlayerConfirm } = props;

  const handleDeleteConfirm = () => {
    handleClose();
    deletePlayerConfirm();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: 5,
        }}
        component={Paper}
      >
        <Typography variant="h4" sx={{ marginBottom: 2.5 }}>
          Are you sure, you want to delete the Player card ??
        </Typography>
        <Container sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            color="error"
            variant="contained"
            onClick={handleDeleteConfirm}
          >
            Yes
          </Button>
        </Container>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
