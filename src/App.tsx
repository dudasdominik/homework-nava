import { useEffect, useState } from "react";
import "./App.css";
import PhoneMainPage from "./pages/PhoneMainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PhoneMetadataPage from "./pages/PhoneMetadataPage";
import PhoneEditPage from "./pages/PhoneEditPage";
import DesktopMainPage from "./desktopView/components/DesktopMainPage";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [data, setData] = useState<unknown>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  useEffect(() => {
    fetch("/foto.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const phoneRouter = createBrowserRouter([
    {
      path: "/",
      element: <>{data && <PhoneMainPage data={data} />}</>,
    },
    {
      path: "/details/:id2",
      element: <>{data && <PhoneMetadataPage data={data} />}</>,
    },
    {
      path: "/edit/:id2",
      element: <>{data && <PhoneEditPage data={data} />}</>,
    },
  ]);

  const desktopRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <DesktopMainPage data={data} />
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      {windowWidth <= 600 ? (
        <>
          <RouterProvider router={phoneRouter} />
        </>
      ) : (
        <>
          <RouterProvider router={desktopRouter} />
        </>
      )}
    </div>
  );
}

export default App;
