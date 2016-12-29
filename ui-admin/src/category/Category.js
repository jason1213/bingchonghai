import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CategoryActions from './actions'

export function Category({name, description}) {
  return (
    <div>
      <h1>{name}</h1>
      <div className="description">{description}</div>
    </div>
  )
}

function mapStateToProps(state) {
  return {...state}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...CategoryActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)