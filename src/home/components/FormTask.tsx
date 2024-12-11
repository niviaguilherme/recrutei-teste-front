import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { useHomeStyles } from "../styles/home.styles";
import { useTask } from "../hooks/useTask";
import { useUser } from "../hooks/useUser";
import { MenuItem, Select, FormControl } from "@mui/material";
import { toast } from "react-toastify";
import moment from "moment";
import "moment/locale/pt-br";
import { IDEA } from "../../common/constants";
import { useStage } from "../hooks/useStage";

function FormTask({ handleClose }: any) {
  const classes = useHomeStyles();

  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const { store, getAll } = useTask();
  const { getAllStages } = useStage();
  const { users } = useUser();

  const handleChange = (event) => {
    setSelectedIds(event.target.value as number[]);
  };

  const save = () => {
    if (title == "") {
      toast("Preencha o título da tarefa", {
        type: "error",
      });
      return;
    }

    if (description == "") {
      toast("Preencha a descrição da tarefa", {
        type: "error",
      });
      return;
    }

    if (selectedIds.length == 0) {
      toast("Selecione os responsáveis", {
        type: "error",
      });
      return;
    }

    if (date == "") {
      toast("Preencha a data limite", {
        type: "error",
      });
      return;
    }

    if (moment(date).format("YYYY-MM-DD") < moment().format("YYYY-MM-DD")) {
      toast("A data limite deve ser maior ou igual a atual", {
        type: "error",
      });
      return;
    }

    const data = {
      title: title,
      description: description,
      date: date,
      responsibles: selectedIds,
      stage: IDEA,
    };

    store(data);
    getAllStages();
    handleClose();
  };

  return (
    <Box>
      <Typography variant="h5">Adicionar tarefa</Typography>
      <Typography variant="caption">
        Preencha os detalhes da nova tarefa
      </Typography>
      <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
        Título da tarefa
      </Typography>
      <TextField
        size="small"
        fullWidth
        sx={{ borderRadius: "24px !important" }}
        variant="outlined"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
        Descrição da tarefa
      </Typography>
      <TextField
        multiline
        rows={6}
        variant="outlined"
        fullWidth
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />

      <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
        Responsáveis
      </Typography>
      <FormControl fullWidth>
        <Select
          labelId="multi-select-label"
          multiple
          value={selectedIds}
          onChange={handleChange}
          renderValue={(selected) =>
            users &&
            users
              .filter((option) => (selected as number[]).includes(option.id))
              .map((option) => option.name)
              .join(", ")
          }
        >
          {users &&
            users.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                <Checkbox checked={selectedIds.includes(option.id)} />
                <ListItemText primary={option.name} />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <Typography variant="subtitle2" sx={{ mt: 2, mb: 1 }}>
        Data limite
      </Typography>
      <TextField
        type="date"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event) => {
          setDate(event.target.value);
        }}
      />
      <Button variant="contained" onClick={save} fullWidth sx={{ mt: 2 }}>
        Adicionar tarefa
      </Button>
    </Box>
  );
}
export default FormTask;
