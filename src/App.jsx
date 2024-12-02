import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import QuizCreate from "./Pages/QuizCreate";
import ViewQuiz from "./Pages/ViewQuiz";
import TakeQuiz from "./Pages/AttemptQuiz";
import QuizTest from "./Pages/QuizQues";

function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/quiz/create",
        element: <QuizCreate/>
      },
      {
        path: "/quiz/view",
        element: <ViewQuiz />
      },
      {
        path: "/quiz/solve",
        element: <TakeQuiz />
      },
      {
        path: "/quiz/questions",
        // element: <QuizQues />
        element: <QuizTest />
      }
    ],
    {
      future: {
        v7_startTransition: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod:   true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
        v7_relativeSplatPath: true,
      },
    }
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
