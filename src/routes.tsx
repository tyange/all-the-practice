import MainPage from "./pages/MainPage";
import AsyncSelectPracticePage from "./pages/AsyncSelectPracticePage";

export const routes = [
  {
    path: "/",
    id: "Intro",
    element: <MainPage />,
  },
  {
    path: "/async-select-practice",
    id: "Async Select Practice",
    element: <AsyncSelectPracticePage />,
    children: [
      {
        path: "/async-select-practice/smartphones",
        id: "item 1",
      },
    ],
  },
];