import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import css from './AppBar.module.css';
import { Button } from './../Button/Button';
import { useDispatch } from 'react-redux';
import { deleteCompleted } from './../../redux/actions';

export const AppBar = () => {
  const dispatch = useDispatch();
  const handleComplTasks = () => dispatch(deleteCompleted());

  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Tasks</h2>
        <TaskCounter />
      </section>
      <section className={css.section}>
        <h2 className={css.title}>---</h2>
        <Button onClick={() => handleComplTasks()}>Delete completed</Button>
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
