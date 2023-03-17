import React from 'react'
import joinStyles from '@/styles/Join.module.css'
import PrimaryButton from '@/components/PrimaryButton'

const perks = [
  {
    img: './img/guidance.svg',
    title: 'SUPPORTING YOUR SUCCESS',
    desc: 'Whether you are new to sales or have years of experience under your belt, we give you the tools to learn, grow, and succeed. By coaching you whether on-site or remote, teaming up with more experienced colleagues until you’re confident, and attending conferences together, we put all the chips in to make you succeed.'
  },
  {
    img: './img/growth.svg',
    title: 'HELPING YOU GROW',
    desc: 'Nurture your skills in a plethora of fields such as time and money management, coaching, public speaking, and a lot more. We actively closely monitor the performance of each team member to ensure they recieve the adequate mentorship. Work with the latest technology and track your own progress overtime as you evolve.'
  },
  {
    img: './img/benefits.svg',
    title: 'LEARN MORE & EARN MORE',
    desc: 'Our compensation model encourages self-initiative and consistency. With no ciellings to how much you earn per week, month, year, you have the opportunity to be flexible in your work hours or maximize your income. We offer regular cash bonuses for high performers as well as dinners and social events. Work hard and play even harder!'
  },
]

export default function Join() {
  return (
    <div className={joinStyles.join}>
      <div className="container">
        <div className={joinStyles.join_body}>
          <h1 className={joinStyles.join_title}>An ambitious company and work environment.</h1>
          <p className={joinStyles.join_text}>As we are growing fast and expanding on more exciting campaigns, we are always looking for driven and passionate individuals to join our ranks. Our team consists of salespeople of all levels, all working together to satisfy the needs of our clients while growing and refining their skills.</p>
        </div>
        <h3 className={joinStyles.whats_working}>WHAT'S WORKING WITH US LIKE</h3>
        <ul className={joinStyles.perks}>
          {perks.map(({ img, title, desc }) => (
            <li className={joinStyles.perk}>
              <img src={img} alt="" />
              <h4>{title}</h4>
              <p>{desc}</p>
            </li>
          ))}
        </ul>
        <div className={joinStyles.apply_cont}>
          <PrimaryButton>Apply Now</PrimaryButton>
        </div>
      </div>
    </div>
  )
}
