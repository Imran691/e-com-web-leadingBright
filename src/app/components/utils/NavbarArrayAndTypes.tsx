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
                label: "Jackets",
                href:"male/jackets",
                isDropDown: false,
            },
            {
                label: "Sweaters",
                href:"male/sweaters",
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
                label: "Dresses",
                href:"female/dresses",
                isDropDown: false,
            },
            {
                label: "Pants",
                href:"female/pants",
                isDropDown: false,
            },
            {
                label: "T-Shirts",
                href:"female/t-shirts",
                isDropDown: false,
            },
            {
                label: "Jackets",
                href:"female/jackets",
                isDropDown: false,
            },
            {
                label: "Sweaters",
                href:"female/sweaters",
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