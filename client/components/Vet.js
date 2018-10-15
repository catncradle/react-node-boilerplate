import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addVet} from '../store'

class Vet extends Component {
  render() {
    const id = this.props.match.params.id
    const vet = this.props.vets.find(vet => {
      return vet.id == id
    })

    return vet ? (
      <div>
        you are viewing {vet.companyName}
        <div>
          We do small animal care
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum vero nihil quibusdam aut? Earum tempora iure ut similique
            officiis sapiente qui accusantium, molestiae debitis dolores quaerat
            itaque iste. Maiores!
          </span>
          <span>$$$$</span>
        </div>
        <div>
          <a className="waves-effect waves-light btn">connect with Vet!</a>
          <a className="waves-effect waves-light btn">swipe left</a>
        </div>
      </div>
    ) : (
      <div>loading</div>
    )
  }
}
const mapState = state => {
  return state
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(addVet)
    }
  }
}

export default connect(mapState, mapDispatch)(Vet)
