import "./topbar.css"

export default function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft">
            <i className=" topIcon fab fa-facebook-square"></i>
            <i className=" topIcon fab fa-linkedin"></i>
            <i className=" topIcon fab fa-github-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem" >HOME</li>
                    <li className="topListItem" >ABOUT</li>
                    <li className="topListItem" >CONTACT</li>
                    <li className="topListItem" >WRITE</li>
                    <li className="topListItem" >LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="./images\01.png" alt="" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
