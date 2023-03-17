import React from 'react'
import missionStyles from '@/styles/Mission.module.css'

const missions = [
  {
    img: './img/relationship.svg',
    title: 'BUILD LONG-LASTING RELATIONSHIPS',
    desc: 'Our team of sales experts take the time to learn the relevant needs of customers during direct interactions. This helps us fulfill those needs appropriatlely with your products.',
  },
  {
    img: './img/overhead.svg',
    title: 'AVOID EXPENSIVE OVERHEADS',
    desc: 'Growing an effective sales strategy takes significant resources over a long period of time. We take care of this expensive process in order for you to focus entirely on your mission.',
  },
  {
    img: './img/flexibility.svg',
    title: 'MAXIMIZE YOUR FLEXIBILITY',
    desc: 'Quickly adjust your sales workforce on–demand to anticipate market shifts. Respond to competitors’ campaigns. Avoid your sales force being the bottleneck for your new product launches.',
  }
]

export default function Mission() {
  return (
    <div id="mission" className={missionStyles.mission_cont}>
      <div className="container">
        <div className={missionStyles.mission_text}>
          <h2 className={missionStyles.mission_header}>We help deliver your products to a larger pool of customers.</h2>
          <p className={missionStyles.header_text}>Don’t wait for the perfect opportunity to scale your customer acquisition needs. Leverage our team of sales experts to lead your efforts by meeting new consumers wherever they happen to be.</p>
        </div>
        <div className={missionStyles.missions}>
          {missions.map(({ img, title, desc }) => (
            <div className={missionStyles.mission}>
              <img src={img} />
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
