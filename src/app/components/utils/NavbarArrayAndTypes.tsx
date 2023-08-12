export interface NavbarItemType {
    label: string,
    href: string, 
    isDropDown: boolean,
    dropDownData?: Array<NavbarItemType>,
}

export const navbarArray: Array<NavbarItemType> = [
    {
        label: "Male",
        href: "/male/Male",
        isDropDown: true,
        dropDownData: [
            {
                label: "Jackets",
                href:"male/Jackets",
                isDropDown: false,
            },
            {
                label: "Sweaters",
                href:"male/Sweaters",
                isDropDown: false,
            },
        ]
    },
    {
        label: "Female",
        href: "/female/Female",
        isDropDown: true,
        dropDownData: [
            {
                label: "Dresses",
                href:"female/Dress",
                isDropDown: false,
            },
            {
                label: "Pants",
                href:"female/Pant",
                isDropDown: false,
            },
            {
                label: "T-Shirts",
                href:"female/T-shirt",
                isDropDown: false,
            },
            {
                label: "Jackets",
                href:"female/Jacket",
                isDropDown: false,
            },
            {
                label: "Sweaters",
                href:"female/Sweater",
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
        href: "/allProducts",
        isDropDown: false
    },
]