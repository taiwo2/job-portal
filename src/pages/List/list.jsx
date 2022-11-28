import "./list.scss"
import Sidebar from "../../components/SideBar/sidebar"
import Navbar from "../../components/NavBar/navBar"
import Datatable from "../../components/Datatable/datatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List