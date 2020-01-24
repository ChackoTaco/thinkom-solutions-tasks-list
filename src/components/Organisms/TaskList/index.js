import React, {useState, useEffect} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Modal from '@material-ui/core/Modal';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import S from '../../Atoms';
import { Container, Row } from '../../Layout';
import MaterialTable from 'material-table';
import { FormLabel } from '@material-ui/core';
import CONSTANTS from '../../../global/constants/cssVariables'

const { colors } = CONSTANTS;
const Root = styled.div``;

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: colors.white,
    border: `2px solid ${colors.black}`,
    padding: '1rem 2rem 1.5rem',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)'
  },
  formControl: {
    margin: '1em'
  }
}));

/**
 * Returns a <TaskList> organism element.
 * Conatains the task list component and the associated functionality.
 * @param {*} props Props to be passed to the <TaskList> element
 */
const TaskList = props => {
  const classes = useStyles();

  // Application State
  const [priority, setPriority] = useState('1 - Low')
  const [error, setError] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [modalState, setModalState] = React.useState(false);
  const [columns] = useState([
    { title: 'Task', field: 'task'},
    { title: 'Priority', field: 'priority'},
  ]);

  // Side Effects
  useEffect(() => {
    const data = JSON.parse(window.sessionStorage.getItem('taskList')) || [];
    setTasks(data);
  }, [setTasks])

  useEffect(() => {
    window.sessionStorage.setItem('taskList', JSON.stringify(tasks));
  }, [tasks])

  // Methods
  const handleOpen = () => setModalState(true);

  const handleOnClose = () => setModalState(false);

  const handleError = task => setError(task ? false : true);

  const handlePriority = e => setPriority(e.target.value);

  const handleSubmit = ({ task, priority}) => {
    handleError(task);
    if (task) {
      setTasks([...tasks, { task, priority}])
      handleOnClose();
    }
  }
  
  const handleChange = e => {
    handleError(e.target.value)
    setTask(e.target.value);
  }

  const handleUpdateTask = (task, updatedTask) => {
    setTasks(tasks.map(item => item === task ? updatedTask : item));
  }
  

  return (
    <>
      <Container>
        <Root {...props}>
          <S.button onClick={handleOpen}>Add Task</S.button>
        </Root>
      </Container>
      <S.divider />
      <Container>
        <S.h1>Task List</S.h1>
        <MaterialTable 
          title="Tasks List"
          columns={columns}
          data={tasks}
          editable={{
            onRowAdd: task => 
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  setTasks([...tasks, task])
                }, 600);
              }),
            onRowUpdate: (newTask, oldTask) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  handleUpdateTask(oldTask, newTask)
                }, 600);
              }),
            onRowDelete: data =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                    setTasks(tasks.filter(task => task !== data));
                  }, 600);
              }),
            }}
        />
      </Container>
      <Modal
        className={classes.modal}
        open={modalState}
        onClose={handleOnClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={modalState}>
          <S.div className={classes.paper}>
            <S.h3>Add a task</S.h3>
            <Row>
              <FormControl>
                <InputLabel htmlFor="task-name">Name</InputLabel>
                <Input id="task-name" value={task} onChange={handleChange} error={error} />
              </FormControl>
            </Row>
            <Row style={{marginTop: '1em'}}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" name="legend">Priority</FormLabel>
                <RadioGroup name="priority" value={priority} onChange={handlePriority}>
                <FormControlLabel
                  value="3 - High"
                  control={<Radio color="primary" />}
                  label="High"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="2 - Medium"
                  control={<Radio color="primary" />}
                  label="Medium"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="1 - Low"
                  control={<Radio color="primary" />}
                  label="Low"
                  labelPlacement="start"
                />
                </RadioGroup>
              </FormControl>
            </Row>
            <Container>
              <S.button onClick={() => handleSubmit({ task, priority })}>Submit Task</S.button>
            </Container>
          </S.div>
        </Fade>
      </Modal>
    </>
  );
};

export default TaskList;
export {
  TaskList
}