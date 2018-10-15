import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class BrowseVets extends Component {
  render() {
    return (
      <div>
        {this.props.vets
          ? this.props.vets.map(({id, companyName}) => {
              return (
                <Link key={id} to={`vets/${id}`}>
                  <div className="row">
                    <div className="col s12 m6">
                      <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                          <span className="card-title">{companyName}</span>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nulla, ipsam? Nostrum dolor aspernatur non
                            quaerat nam officia porro harum ducimus earum!
                            Accusamus rem error voluptatem vero, excepturi totam
                            suscipit perspiciatis?
                          </p>
                        </div>
                        <div className="card-action" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
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
