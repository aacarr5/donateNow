import Element from './MyElement'
import React from 'react'

const Component = React.createClass({
	render: function(){
		return(
			React.DOM.div({className:"myMain"},
				React.createElement(Element,{title:"IT'S CHANGING",color:'blanchedAlmond',})
			)
		)
	}
})

export default Component