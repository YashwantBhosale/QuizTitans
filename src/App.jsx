import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import QuizCreate from "./Pages/QuizCreate";
import ViewQuiz from "./Pages/ViewQuiz";
import TakeQuiz from "./Pages/AttemptQuiz";
import QuizQues from "./Pages/QuizQues";
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  // const { user, isAuntheticated, logout } = useAuth0();

  const router = createBrowserRouter(
    [
      {
        path: "/",
        children: [{ path: '*', element: <Root />  }],
        element: <Root />
      },
      // {
      //   path: "/login",
      //   children: [{ path: '*', element: <Login />  }],
      //   element: <Login />
      // },
      {
        path: "/home",
        children: [{ path: '*', element: <Home />  }],
        element: <Home />
      },
      {
        path: "/quiz/create",
        children: [{ path: '*', element: <QuizCreate/>  }],
        element: <QuizCreate/>
      },
      {
        path: "/quiz/view",
        children: [{ path: '*', element: <ViewQuiz />  }],
        element: <ViewQuiz />
      },
      {
        path: "/quiz/solve",
        children: [{ path: '*', element: <TakeQuiz />  }],
        element: <TakeQuiz />
      },
      {
        path: "/quiz/questions",
        children: [{ path: '*', element: <QuizQues /> }],
        element: <QuizQues />
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
