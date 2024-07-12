import { SidebarLink } from "@/types";

export const themes = [
    { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
    { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
    { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
    {
        imgURL: "/assets/icons/home.svg",
        route: "/",
        label: "Home",
    },
    {
        imgURL: "/assets/icons/users.svg",
        route: "/community",
        label: "Community",
    },
    {
        imgURL: "/assets/icons/star.svg",
        route: "/collection",
        label: "Collections",
    },
    {
        imgURL: "/assets/icons/suitcase.svg",
        route: "/jobs",
        label: "Find Jobs",
    },
    {
        imgURL: "/assets/icons/tag.svg",
        route: "/tags",
        label: "Tags",
    },
    {
        imgURL: "/assets/icons/user.svg",
        route: "/profile",
        label: "Profile",
    },
    {
        imgURL: "/assets/icons/question.svg",
        route: "/ask-question",
        label: "Ask a question",
    },
];

export const BADGE_CRITERIA = {
    QUESTION_COUNT: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    ANSWER_COUNT: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    QUESTION_UPVOTES: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    ANSWER_UPVOTES: {
        BRONZE: 10,
        SILVER: 50,
        GOLD: 100,
    },
    TOTAL_VIEWS: {
        BRONZE: 1000,
        SILVER: 10000,
        GOLD: 100000,
    },
};

export const TINY_CSS_CLASSES = `
body {
  font-family: Figtree, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 28px;
}
body::-webkit-scrollbar {
  width: 3px;
  height: 3px;
  border-radius: 2px;
}

body::-webkit-scrollbar-track {
  background: #ffffff;
}

body::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

body::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;