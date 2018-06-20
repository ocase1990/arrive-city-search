import { connect } from 'react-redux';
import Carriers from './Carriers'

const mapStateToProps = (state) => ({
  carriers: state.carriers.carriers,
})

export default connect(mapStateToProps)(Carriers)
