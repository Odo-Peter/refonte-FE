import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

const DashboardLayout = ({children} : {
    children: React.ReactNode;
}) => {
  return (
    <section className="h-full relative">
        <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 w-72 overflow-y-auto overflow-x-hidden">
            <div>
                <SideBar />
            </div>
        </div>
      
        <div className="md:ml-72">
            <NavBar />
            {children}
        </div>
    </section>
  )
}

export default DashboardLayout