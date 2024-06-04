function ProfilePicture() {
    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s'
  const handleClick = (e) => e.target.style.display = "none"
    return (
    <div>
        <img onClick={(e) => handleClick(e)} src={imageUrl} alt="" />
    </div>
  )
}

export default ProfilePicture