export interface NavbarItemType {
    label: string,
    href: string, 
    isDropDown: boolean,
    dropDownData?: Array<NavbarItemType>,
}

export const navbarArray: Array<NavbarItemType> = [
    {
        label: "Male",
        href: "/male",
        isDropDown: true,
        dropDownData: [
            {
                label: "Shirts",
                href:"male/shirts",
                isDropDown: false,
            },
            {
                label: "Pants",
                href:"male/pants",
                isDropDown: false,
            },
            {
                label: "Shorts",
                href:"male/shorts",
                isDropDown: false,
            },
            {
                label: "Shoes",
                href:"male/shoes",
                isDropDown: false,
            },
        ]
    },
    {
        label: "Female",
        href: "/female",
        isDropDown: true,
        dropDownData: [
            {
                label: "Shirts",
                href:"female/shirts",
                isDropDown: false,
            },
            {
                label: "Pants",
                href:"female/pants",
                isDropDown: false,
            },
            {
                label: "Shorts",
                href:"female/shorts",
                isDropDown: false,
            },
            {
                label: "Shoes",
                href:"female/shoes",
                isDropDown: false,
            },
        ]
    },
    {
        label: "Kids",
        href: "/kids",
        isDropDown: false
    },
    {
        label: "All Products",
        href: "/allproducts",
        isDropDown: false
    },
]