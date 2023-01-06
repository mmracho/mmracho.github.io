import './Navi.css';

const menuItems = ["Home", "Projects", "Original Site", "About", "Contact"];

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

const Navi = () => (
    <nav>
        <ul className="navStyle">
            {
                popMenuList(menuItems).map((item, index) => {
                    return (
                        <li><a href={item.getUrl}>{item.getTitle}</a></li>
                    )
                })
            }
        </ul>
    </nav>
);

export default Navi;