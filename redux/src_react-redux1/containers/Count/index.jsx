import { connect } from 'react-redux'
import Count from '../../components/Count'
import { addAction, minusAction, addActionAsync } from '../../redux/count_action'

const mapStateToProps = (state) => {
  return {
    count: state
  }
}
const mapDispatchToProps = {
  addAction,
  minusAction,
  addActionAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)