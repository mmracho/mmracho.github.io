const menuItems = ["Home", 
                   "Projects", 
                   "About", 
                   "Contact", 
                   "Github"];
const menuLinks = ["https://mmracho.github.io/", 
                   " ", 
                   " ",
                   " ", 
                   "https://github.com/mmracho/mmracho.github.io"];

function createMenu(title, url) {
    return {
        title: title,
        url: url,
        cName: "cnameMenuitem",
        get getTitle() {
            return this.title;
        },
        get getUrl() {
            return this.url
        },
        get getCname() {
            return this.cName
        }
    };
}
const popMenuList = (items, urls) => (
    items.map((x, index) => createMenu(x, urls[index]))
)

const MenuItems = () => (
    popMenuList(menuItems, menuLinks)
)

export default MenuItems;