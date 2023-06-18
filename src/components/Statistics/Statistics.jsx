import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        <li
          key={stats[0].id}
          className={s.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={s.label}>{stats[0].label}</span>
          <span className={s.percentage}>{stats[0].percentage}%</span>
        </li>
        <li
          key={stats[1].id}
          className={s.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={s.label}>{stats[1].label}</span>
          <span className={s.percentage}>{stats[1].percentage}%</span>
        </li>
        <li
          key={stats[2].id}
          className={s.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={s.label}>{stats[2].label}</span>
          <span className={s.percentage}>{stats[2].percentage}%</span>
        </li>
        <li
          key={stats[3].id}
          className={s.item}
          style={{ backgroundColor: getRandomHexColor() }}
        >
          <span className={s.label}>{stats[3].label}</span>
          <span className={s.percentage}>{stats[3].percentage}%</span>
        </li>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
