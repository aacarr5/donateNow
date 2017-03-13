import React from 'react'

const Element = React.createClass({
	render: function(){
		return(
			React.DOM.h1({style:{color:this.props.color}},this.props.title)
		)
	}
})

export default Element