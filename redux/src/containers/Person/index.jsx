import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'
import { nanoid } from 'nanoid'

class Person extends Component {
  addPer = () => {
    const name = this.name.value
    const age = this.age.value
    const personObj = {
      id: nanoid(),
      name,
      age
    }
    this.props.addPerson(personObj)
    this.age.value = ''
    this.name.value = ''
  }
  render () {
    return (
      <div>
        <input type="text" placeholder="name" ref={c => this.name = c} />
        <input type="text" placeholder="age" ref={c => this.age = c} />
        <button onClick={this.addPer}>add person</button>
        <h4>count: {this.props.count}</h4>
        <ul>
          {
            this.props.persons.map(item => {
              return <li key={item.id}>{item.name} -- {item.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    persons: state.persons,
    count: state.count
  }
}
const mapDispatchToProps = {
  addPerson
}
export default connect(mapStateToProps, mapDispatchToProps)(Person)