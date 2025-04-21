export interface NavItem {
    id: string;
    label: string;
}

export interface NavigationProps {
    scrollToSection: (sectionId: string) => void;
    items: NavItem[];
}
