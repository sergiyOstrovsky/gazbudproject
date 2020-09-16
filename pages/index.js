import Head from 'next/head';
import Slider from 'react-slick';
import styles from '../styles/Home.module.css';

export const priceSettings = {
  speed: 500,
  dots: true,
  swipe: false,
  arrows: true,
  infinite: true,
  initialSlide: 0,
  slidesToShow: 3,
  centerPadding: '50px',
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        swipe: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        swipe: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        swipe: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const certificates = [
  './1.png',
  './2.png',
  './3.png',
  './4.png',
  './5.png',
];

const Logo = () => (
  <div className={styles.logoWrapper}>
    <img src='./graphic-progression.svg' className={styles.logoImage} />
    <p className={styles.companyName}>Укргазбудпроект</p>
  </div>
);

export const phone = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={15} height={15} viewBox='0 0 30 30'>
    <path fill='#008adc' fillRule='nonzero' d='M9.42 9.932L2.49 3c.895-.894 1.788-1.79 2.684-2.686a1.065 1.065 0 0 1 1.5-.013l5.398 5.403a1.068 1.068 0 0 1-.005 1.507l-1.183 1.18-1.1 1.1a3.03 3.03 0 0 0-.363.44zm5.702 11.289a60.782 60.782 0 0 1-3.28-3.066 61.613 61.613 0 0 1-3.065-3.285c-.8-.925-.957-2.263-.539-3.39L1.125 4.368c-1.655 1.7-1.444 5.92.37 9.625.779 1.604 1.789 3.05 2.833 4.427a39.675 39.675 0 0 0 3.389 3.868 37.798 37.798 0 0 0 3.86 3.4c1.377 1.047 2.828 2.05 4.421 2.826 3.713 1.812 7.935 2.01 9.635.354l-7.115-7.112c-1.127.418-2.468.263-3.396-.535zm14.572 2.1l-5.399-5.4a1.075 1.075 0 0 0-1.508.006h-.003l-1.186 1.184-1.094 1.099a3.318 3.318 0 0 1-.439.364l6.928 6.929c.896-.898 1.79-1.79 2.689-2.684a1.056 1.056 0 0 0 .012-1.499z' />
  </svg>
);

export const mail = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={22} height={16} viewBox='0 0 37 31'>
    <g fill='#008adc' fillRule='nonzero'>
      <path d='M32.255 30.429a2.95 2.95 0 0 0 2.078-.826l-10.063-10.6-.696.527a46.492 46.492 0 0 1-1.834 1.368c-.47.327-1.094.661-1.873 1.002-.78.341-1.507.511-2.18.511h-.04c-.674 0-1.4-.17-2.18-.511-.78-.341-1.405-.675-1.874-1.002-.469-.327-1.08-.783-1.833-1.368-.21-.162-.443-.34-.695-.53L1 29.603a2.95 2.95 0 0 0 2.079.826h29.176zM2.107 11.931A11.284 11.284 0 0 1 0 10v17.143l9.333-9.931a721.695 721.695 0 0 0-7.226-5.281zM34.247 11.931A614.66 614.66 0 0 0 27 17.216l9.333 9.927V10a11.76 11.76 0 0 1-2.086 1.931zM32.785 0H3.215C2.181 0 1.388.36.833 1.078.278 1.796 0 2.694 0 3.772c0 .87.368 1.813 1.105 2.83.736 1.015 1.52 1.813 2.35 2.393a864.72 864.72 0 0 0 4.119 2.954 1331.14 1331.14 0 0 1 5.263 3.783 278.37 278.37 0 0 1 .854.632c.435.325.797.587 1.085.788.287.2.636.424 1.045.673a6.01 6.01 0 0 0 1.155.56c.362.124.696.186 1.004.186h.04a3.11 3.11 0 0 0 1.005-.186c.361-.124.746-.31 1.155-.56a21.32 21.32 0 0 0 1.045-.673c.288-.2.65-.463 1.085-.788a134.941 134.941 0 0 1 .854-.632 18946.774 18946.774 0 0 1 9.402-6.736 9.717 9.717 0 0 0 2.45-2.55c.655-.995.984-2.038.984-3.13a3.23 3.23 0 0 0-.954-2.342C34.41.324 33.656 0 32.786 0z' />
    </g>
  </svg>
);

const marker = () => (
  <svg
    version="1.1"
    width='15px'
    height='15px'
    xmlSpace="preserve"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <g>
        <path
          fill='#008adc' d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
          c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,469.729
          c-55.847-66.338-152.035-197.217-152.035-284.301c0-83.834,68.202-152.036,152.035-152.036s152.035,68.202,152.035,152.035
          C408.034,272.515,311.861,403.37,256,469.729z"/>
      </g>
    </g>
    <g>
      <g>
        <path fill='#008adc' d="M256,92.134c-51.442,0-93.292,41.851-93.292,93.293s41.851,93.293,93.292,93.293s93.291-41.851,93.291-93.293
          S307.441,92.134,256,92.134z M256,245.328c-33.03,0-59.9-26.871-59.9-59.901s26.871-59.901,59.9-59.901s59.9,26.871,59.9,59.901
          S289.029,245.328,256,245.328z"/>
      </g>
    </g>
  </svg>
);

const activity = {
  engineeringNetworks: [
    {
      title: 'ОВіК',
      price: '100 грн',
      services: [
        'Проектування систем опалення',
        'Проектуання систем вентиляції',
        'Проектування систем кондиціонування',
      ],
    },
    {
      title: 'ЕТР',
      price: '100 грн',
      services: [
        'Електропостачання (прокладання кабеля, повітряне, СІП- самонесучий ізольований провід). Силове обладнання. Системи зовнішнього та внутрішнього освітлення. Блискавкозахист, заземлення. Паспорти блискавкозахисту паспорт заземлення, паспорти на повітряні кабельні лінії та паспорти електроприміщення'
      ],
    },
    {
      price: '100 грн',
      title: 'Cлабострумні Kабельні Cистеми',
      services: [
        'Проектування телекомунікаційних мереж (телебачення, телефонія, інет)',
        'Проектування охоронних системи',
        'Проектвування систем пожежогасіння та димовидалення',
        'Проектування систем відеонагляду',
      ],
    },
    {
      services: [],
      price: '100 грн',
      title: 'Oцінка впливу на довкілля',
    },
    {
      services: [],
      price: '100 грн',
      title: 'Eнергозбереження та Pозробка Eнергопаспорта',
    },
  ],
  ecological: [
    {
      services: [],
      price: '100 грн',
      title: 'Розробка документації на викиди в атмосферне повітря',
    },
    {
      services: [],
      price: '100 грн',
      title: 'Оцінка впливу на довкілля',
    },
    {
      services: [],
      price: '100 грн',
      title: 'Рзробка індивідуальних балансових норм водоспоживання та водовідведення',
    },
    {
      services: [],
      price: '100 грн',
      title: 'Паспортизація відходів',
    },
  ],
};

const ActivitySection = ({ activityName, activityTitle }) => (
  <div className={styles.activityWrapper}>
    <div className={styles.activityHeader}>
      {activityTitle}
    </div>
    {
      activity[activityName].map(({ title, services }, index) => (
        <div key={index} style={{ borderBottom: index + 1 === activity[activityName].length ? 'none' : '1px solid black' }}>
          <div style={{ fontWeight: 'bold', padding: 10 }}>
          {index + 1}. {title}
          </div>
          {
            services.length > 0 &&
            <ul style={{ padding: '0 20px' }}>
              {
                services.map((item, index) => (
                  <li key={index} style={{ padding: '5px 0' }}>
                    {item}
                  </li>
                ))
              }
            </ul>
          }
        </div>
      ))
    }
  </div>
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Укргазбудпроект</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="j-9CrH-_vN5HY-u4yki83x243toKjNtNg2r6TDuDmKg" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Logo />
          <div className={styles.contacts}>
            <div style={{ fontWeight: 'bold', marginRight: 10 }}>
              Контакти:
            </div>
            <div>
              <a
                href='tel:0683377070'
                className={styles.contactPhone}
              >
                <span style={{ marginRight: 5 }}>{phone()}</span> (068) 337-70-70
              </a>
              <a
                href='tel:0503786869'
                className={styles.contactPhone}
              >
                <span style={{ marginRight: 5 }}>{phone()}</span> (050) 378-68-69
              </a>
              <a
                href='tel:0676790808'
                className={styles.contactPhone}
              >
                <span style={{ marginRight: 5 }}>{phone()}</span> (067) 679-08-08
              </a>
              <a
                className={styles.contactPhone}
                href='mailto:ukrgazbudproekt@ukr.net'
              >
                <span style={{ marginRight: 5 }}>{mail()}</span> ukrgazbudproekt@ukr.net
              </a>
              <p style={{ padding: 5, color: '#008adc' }}>
                <span style={{ marginRight: 5 }}>{marker()}</span> м. Львів, вул. Сахарова 43, офіс 407
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.frontSection}>
        <h1 className={styles.frontTitle}>ТзОВ "Укргазбудпроект" - Bаш надійний партнер </h1>
        <img src='./home.jpg' className={styles.frontImage} />
      </section>
      <main className={styles.mainWrapper}>
        <h2 className={styles.companyActivityTitle}>
          Діяльність Kомпанії
        </h2>
        <div className={styles.activitiesWrapper}>
          <ActivitySection
            activityName='engineeringNetworks'
            activityTitle='Проектування інженерних мереж' />
          <ActivitySection
            activityName='ecological'
            activityTitle='Послуги екологічного характеру' />
        </div>
        <div className={styles.certificatesSection}>
          <h2 className={styles.certificatesTitle}>
            Сертифікати
          </h2>
          <Slider {...priceSettings}>
            {certificates.map((item, index) => (
              <section key={index} className={styles.sliderItem}>
                <img src={item} width='100%' height='100%' />
              </section>
            ))}
          </Slider>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.headerContent}>
          <Logo />
          <div className={styles.contacts}>
            <div style={{ fontWeight: 'bold', marginRight: 10 }}>
              Контакти:
            </div>
            <div>
              <a
                href='tel:0683377070'
                className={styles.contactPhone}
              >
                <span style={{ marginRight: 5 }}>{phone()}</span> (068) 337-70-70
              </a>
              <a
                href='tel:0503786869'
                className={styles.contactPhone}
              >
                <span style={{ marginRight: 5 }}>{phone()}</span> (050) 378-68-69
              </a>
              <a
                href='tel:0676790808'
                className={styles.contactPhone}
              >
                <span style={{ marginRight: 5 }}>{phone()}</span> (067) 679-08-08
              </a>
              <a
                className={styles.contactPhone}
                href='mailto:ukrgazbudproekt@ukr.net'
              >
                <span style={{ marginRight: 5 }}>{mail()}</span> ukrgazbudproekt@ukr.net
              </a>
              <p style={{ padding: 5, color: '#008adc' }}>
                <span style={{ marginRight: 5 }}>{marker()}</span> м. Львів, вул. Сахарова 43, офіс 407
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
