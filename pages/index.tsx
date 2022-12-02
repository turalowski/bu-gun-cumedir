import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [weekDay, setWeekDay] = useState(0);
  useEffect(() => {
    const date = new Date();
    const weekDay = date.getDay();
    setWeekDay(weekDay);
  }, []);
  return (
    <div className={styles.Home}>
      {weekDay === 5 ? <div>Hə </div> : <div>Yox</div>}
    </div>
  );
}
