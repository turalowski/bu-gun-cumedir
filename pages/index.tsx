import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

import Confetti from 'react-confetti';

export default function Home() {
  const [title, setTitle] = useState<string>('salam');
  const [emoji, setEmoji] = useState<Array<string>>([]);
  const [description, setDescription] = useState<string>('sagol');
  const data = [
    {
      title:'Yox',
      icons:[
        '/icons/Noto_Emoji_1f611.svg',
      ],
      description:'Sabahın bazar ertəsi olma qorxusu...',
    },
    {
      title:'Yox',
      icons:[
        '/icons/Noto_Emoji_1f92c.svg',
      ],
      description:'Həftənin ən pis günü...',
    },
    {
      title:'Yox',
      icons:[
        '/icons/Noto_Emoji_1f972.svg',
      ],
      description:'Həftənin ən pis gününə yaxın gün. (daha yaxşı)',
    },
    {
      title:'Yox',
      icons:[
        '/icons/Noto_Emoji_1fae3.svg',
      ],
      description:'Məktəb vaxtı həftənin ən çətin dərslərinin olduğu gün.',
    },
    {
      title:'Yox',
      icons:[
        '/icons/Noto_Emoji_1fae1.svg',
      ],
      description:'Möhtəşəm günə son gün.',
    },
    {
      title:'Hə',
      icons:[
        '/icons/Noto_Emoji_1f60d.svg',
        '/icons/Noto_Emoji_1f618.svg',
        '/icons/Noto_Emoji_1f970.svg',
      ],
      description:'Bu gün o gündür, bu gün həftənin ən möhtəşəm günüdür.',
    },
    {
      title:'Yox',
      icons:[
        '/icons/Noto_Emoji_1fae0.svg',
      ],
      description:'Möhtəşəm günün sabahı.',
    }
]
  useEffect(() => {
    const date = new Date();
    const weekDay = date.getDay();

    setTitle(data[weekDay].title)
    setDescription(data[weekDay].description);
    setEmoji(data[weekDay].icons)
  }, []);

  return (
    <div className={styles.Home}>
      <div className={styles.box}>
        <span className={styles.title}>{title} </span>
        {emoji.map(icon =>(<img key={icon} className={styles.icon} src={icon}/>)) }
      </div>
      <span className={styles.description}>{description}</span>
      {title.split(' ')[0] === 'Hə' && <Confetti />}
    </div>
  );
}
