import React from 'react'

const i18n = {
  us:{
    title: 'Skills'
  },
  tw: {
    title: '技能'
  }
}
const skills = [
  {
    skill: 'HTML',
    val: 80
  },
  {
    skill: 'CSS',
    val: 70
  },
  {
    skill: 'JavaScript',
    val: 80
  },
  {
    skill: 'React.js',
    val: 80
  },
  {
    skill: 'jQuery',
    val: 80
  },
  {
    skill: 'Angular.js 2',
    val: 30
  },
  {
    skill: 'Vue.js',
    val: 30
  },
  {
    skill: 'Node.js',
    val: 30
  },
  {
    skill: 'ES6',
    val: 50
  }
]
const ValueBar = (props) => (
  <div className="value-bar">
    {props.skill}
    <div className="ui teal progress" data-percent={props.val}>
      <div className="bar">
        <div className="progress"></div>
      </div>
    </div>
  </div>
)
class Skill extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    $('.progress').progress();
  }
  render () {
    const valueBar = skills.map((skill)=>(
      <ValueBar skill={skill.skill} val={skill.val} />
    ))
    return (
      <div className="skill">
        <h2 className="ui header">{i18n[this.props.language].title}</h2>
        <div className="content">
          {valueBar}
        </div>
      </div>
    )
  }
};

export default Skill;
