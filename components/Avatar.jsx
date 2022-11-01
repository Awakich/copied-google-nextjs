

const Avatar = ({url}) => {
  return (
    <img className="rounded-full h-10 cursor-pointer opacity-100 hover:opacity-90" src={url} alt="profile pic" />
  )
}

export default Avatar