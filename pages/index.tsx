import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

import Confetti from 'react-confetti';

export default function Home() {
  const [title, setTitle] = useState<string>('salam');
  const [description, setDescription] = useState<string>('sagol');
  useEffect(() => {
    const date = new Date();
    const weekDay = date.getDay();
    switch (weekDay) {
      case 0:
        setTitle('Yox 😑');
        setDescription('Sabahın bazar ertəsi olma qorxusu...');
        break;
      case 1:
        setTitle('Yox 🤬');
        setDescription('Həftənin ən pis günü...');
        break;
      case 2:
        setTitle('Yox 🥲');
        setDescription('Həftənin ən pis gününə yaxın gün. (daha yaxşı)');
        break;
      case 3:
        setTitle('Yox 🫣');
        setDescription(
          'Məktəb vaxtı həftənin ən çətin dərslərinin olduğu gün.'
        );
        break;
      case 4:
        setTitle('Yox 🫡');
        setDescription('Möhtəşəm günə son gün.');
        break;
      case 5:
        setTitle('Hə 😍🥰😘');
        setDescription('Bu gün o gündür, bu gün həftənin ən möhtəşəm günüdür.');
        break;
      case 6:
        setTitle('Yox 🫠');
        setDescription('Möhtəşəm günün sabahı.');
        break;
    }
  }, []);

  return (
    <div className={styles.Home}>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{description}</span>
      {title.split(' ')[0] === 'Hə' && <Confetti />}
    </div>
  );
}
