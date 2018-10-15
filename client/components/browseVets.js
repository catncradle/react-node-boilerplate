import React, {Component} from 'react'
import {connect} from 'react-redux'

class BrowseVets extends Component {
  render() {
    return (
      <div>
        {this.props.vets
          ? this.props.vets.map(({id, companyName}) => {
              return <div key={id}>{companyName}</div>
            })
          : 'loading'}
      </div>
    )
  }
}

const mapState = ({vets}) => {
  return {vets}
}

export default connect(mapState, null)(BrowseVets)
