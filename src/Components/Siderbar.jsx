import SidebarItems from "./SidebarItems"
import Items from '../Data/sidebar.json'

export default function Sidebar() {

    return(
        <>
          <div className="sidebar ">
           
           {
            Items.map( (item,index )=> < SidebarItems key={index} item={item} />)
           }

          </div>
        </>
    )
}

