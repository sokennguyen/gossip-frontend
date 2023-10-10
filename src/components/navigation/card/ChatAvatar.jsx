const ChatAvatar = ({id}) => {
    const imgLink = `/avatar/${id}.png`
    return <>
        <a href="#">
            <img className="chat-avatar" src={imgLink} alt="user avatar" />
        </a>
    </>
}

export default ChatAvatar