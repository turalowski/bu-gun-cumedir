import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Confetti from 'react-confetti';

export default function Home() {
  const [weekDay, setWeekDay] = useState<string>('salam');
  const [description, setDescription] = useState<string>('sagol');
  useEffect(() => {
    const date = new Date();
    const weekDay = date.getDay();
    switch (weekDay) {
      case 0:
        setWeekDay('Yox 😑');
        setDescription('Sabahın bazar ertəsi olma qorxusu...');
        break;
      case 1:
        setWeekDay('Yox 🤬');
        setDescription('Həftənin ən pis günü...');
        break;
      case 2:
        setWeekDay('Yox 🥲');
        setDescription('Həftənin ən pis gününə yaxın gün. (daha yaxşı)');
        break;
      case 3:
        setWeekDay('Yox 🫣');
        setDescription(
          'Məktəb vaxtı həftənin ən çətin dərslərinin olduğu gün.'
        );
        break;
      case 4:
        setWeekDay('Yox 🫡');
        setDescription('Möhtəşəm günə son gün.');
        break;
      case 5:
        setWeekDay('Hə 😍🥰😘');
        setDescription('Bu gün o gündür, bu gün həftənin ən möhtəşəm günüdür.');
        break;
      case 6:
        setWeekDay('Yox 🫠');
        setDescription('Möhtəşəm günün səhəri.');
        break;
    }
  }, []);

  return (
    <div className={styles.Home}>
      <div className={styles['not-friday-title']}>{weekDay}</div>
      <div style={{ fontSize: '20px' }}>{description}</div>
      {weekDay.split(' ')[0] === 'Hə' && <Confetti />}
    </div>
  );
}
