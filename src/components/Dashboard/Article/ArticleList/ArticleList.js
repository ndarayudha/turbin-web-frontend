import React, { useState } from "react";
import styles from "./ArticleList.module.css";
import { DataGrid } from "@mui/x-data-grid";
import IcDelete from "../../../../assets/ic_delete.png";
import IcEdit from "../../../../assets/ic_edit.png";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const rows = [
  {
    id: 1,
    title: "Best Article in the World",
    totalRead: "10",
    createdAt: "24-08-2021",
    updatedAt: "24-08-2021",
    writter: "Yofan",
  },
  {
    id: 2,
    title: "Best Article in the World",
    totalRead: "10",
    createdAt: "24-08-2021",
    updatedAt: "24-08-2021",
    writter: "Yofan",
  },
  {
    id: 3,
    title: "Best Article in the World",
    totalRead: "10",
    createdAt: "24-08-2021",
    updatedAt: "24-08-2021",
    writter: "Yofan",
  },
];

const ArticleList = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "Nomor", width: 90 },
    {
      field: "title",
      headerName: "Judul Artikel",
      width: 150,
      editable: false,
    },
    {
      field: "totalRead",
      headerName: "Total Dibaca",
      width: 120,
      editable: false,
    },
    {
      field: "createdAt",
      headerName: "Dibuat",
      width: 100,
      editable: false,
    },
    {
      field: "updatedAt",
      headerName: "Diperbaharui",
      width: 150,
      editable: false,
    },
    {
      field: "writter",
      headerName: "Penulis",
      width: 100,
      editable: false,
    },
    {
      field: "action",
      headerName: "Aksi",
      width: 300,
      editable: false,
      sortable: false,
      renderCell: (params) => {
        const onEdit = () => {
          console.log(`edit article with id ${params.id}`);
        };
        const onDelete = () => {
          handleClickOpen();
        };
        const handleOnDelete =() => {
            console.log(`delete article with id ${params.id}`);
            handleClose();
        }
        const onView = () => {
          console.log(params);
        };

        return (
          <div className={styles.action}>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Hapus artikel ini?"}
              </DialogTitle>
              <DialogActions>
                <Button onClick={handleClose}>Batal</Button>
                <Button onClick={handleOnDelete} autoFocus>
                  Hapus
                </Button>
              </DialogActions>
            </Dialog>
            <img src={IcEdit} alt="Icon Edit" onClick={onEdit} />
            <img src={IcDelete} alt="Icon Delete" onClick={onDelete} />
          </div>
        );
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
};

export default ArticleList;
