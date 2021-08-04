import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="./images/me.jpg"
          alt=""
        />
        <h3 className="k">Khaled Redwan</h3>
        <h4 className="w">Web Developer</h4>
        <h4 className="c">Call: 01309354159</h4>
        
        <p>
        Web Design and Development, Software Engineering and provide proper services and solutions to the corporate problem is those skills where I want to lead my goals.
         I believe in Teamwork, Co-operation within a team, Multi-tasking, and take responsibility
          to do my work accurately for the well-being of my team and my organization.
        </p>
      </div>
      
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-linkedin"></i>
          <i className="sidebarIcon fab fa-github-square"></i>
          
        </div>
      </div>
    </div>
  );
}
