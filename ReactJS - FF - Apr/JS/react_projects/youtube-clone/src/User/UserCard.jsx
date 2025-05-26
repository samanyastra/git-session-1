import './userpage.css'

const UserCard = ({firstName, lastName, phoneNumber, gender}) => {
    return <div className="user-card">
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{phoneNumber}</div>
        <div>{gender}</div>
    </div>
}

export default UserCard;