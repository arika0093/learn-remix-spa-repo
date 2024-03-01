import { RemixBrowser } from "@remix-run/react";
import { Provider } from "jotai";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <Provider>
        <RemixBrowser />
      </Provider>
    </StrictMode>
  );
});
