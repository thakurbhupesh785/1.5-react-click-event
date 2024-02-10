

function ProfilePicture () {

  const imageUrl = './src/assets/425761847_2055562858153718_3081855810315310958_n.jpg';

  const handleClick = (e) => e.target.style.display = "none";

return ( <img onClick={(e)=>handleClick(e)} src={imageUrl}></img>)
}

export default ProfilePicture