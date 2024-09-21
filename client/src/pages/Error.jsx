import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Sumimasen!</h1>
      <p>An error has unexpectedly occur</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
