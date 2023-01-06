const menuItems = ["Home", "Projects", "About", "Contact", "Base React Site"];

function createMenu(title, url) {
    return {
        title: title,
        url: url,
        get getTitle() {
            return this.title;
        },
        get getUrl() {
            return this.url
        }
    };
}
const popMenuList = items => (
    items.map((x) => createMenu(x, ' '))
)

const MenuItems = () => (
    popMenuList(menuItems)
)

export default MenuItems;