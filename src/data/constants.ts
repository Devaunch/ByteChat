interface NavItem {
    name: string;
    path: string;
}

export const NavItems: NavItem[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Chat",
        path: "/user/chat",
    },
    {
        name: "Contact",
        path: "/contact",
    },
    {
        name: "Blog",
        path: "/blog",
    },
];
