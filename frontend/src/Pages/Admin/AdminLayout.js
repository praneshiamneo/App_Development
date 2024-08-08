import PropTypes from 'prop-types'
import Adminnav from './Adminnav'
import "../../Assets/CSS/adminstyling.css"
const AdminLayout = ({ children }) => {
    return (
        <div className="admin_container">
            <Adminnav />
            <div id='maindiv'>
                {children}
            </div>
        </div>
    )
}

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default AdminLayout