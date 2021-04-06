import React from 'react'

const UserItem = ({ user }) => {
	return (
		<li className="list-group-item">
			<h4> {user.name} </h4>
		</li>
	)
}

export default UserItem