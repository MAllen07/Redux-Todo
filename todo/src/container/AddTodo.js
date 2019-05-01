import React from 'react'

//5. import connect 
import { connect } from 'react-redux';






//7. create the mapStateToProps function - you will have access to the store state here
const mapStateToProps = state => {
    return {
        todos: 
    }
}


//6. wire up connect
export default connect(
    mapStateToProps, // this will be a MapStateToProps function
)