import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

const UserLayout = ({ children }) => {
    return (
        <div className="user_container">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

UserLayout.propTypes = {
    children: PropTypes.node.isRequired
}

export default UserLayout