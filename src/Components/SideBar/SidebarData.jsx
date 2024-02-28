
const SidebarData =[
    {
    name: "Home",
    path:'/',
    icon:'bi bi-house',

},
{
    name: "BMRS",
    path:"/bmrs",
    icon: 'bi bi-journal-text', 
subMenus:[
    {
        name: "Bulk" ,
        path:"/"
    },
    {
        name: "Api" ,
        path:"/"
    },
    {
        name: "Tablet" ,
        path:"/"
    },
    {
        name: "OralSyrup" ,
        path:"/OralSyruptabs"
    },
]

},

{
    name: "BPRS",
    path:"/bprs",
    icon: 'bi bi-journal-text'
},

{
    name: "Product List",
    path:"/productlist",
    icon: 'bi bi-list-task'
},
{
    name: "Settings",
    path:"/settings",
    icon: 'bi bi-gear'
},
]
export default SidebarData









