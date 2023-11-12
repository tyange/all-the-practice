import MainPage from "./pages/MainPage";
import AsyncSelectPracticePage from "./pages/AsyncSelectPracticePage";
import ReactPdfPracticePage from "./pages/ReactPdfPracticePage";

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
        element: <AsyncSelectPracticePage />,
        id: "item 1",
      },
      {
        path: "/async-select-practice/laptops",
        element: <AsyncSelectPracticePage />,
        id: "item 2",
      },
    ],
  },
  {
    path: "/react-pdf-practice",
    id: "React PDF Practice",
    element: <ReactPdfPracticePage />,
  },
];
