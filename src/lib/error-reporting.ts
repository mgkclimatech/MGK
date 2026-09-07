// Central hook for reporting client-side errors caught by React error
// boundaries. Currently logs to the console; wire this to a telemetry provider
// (Sentry, etc.) when one is added.

export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  // Loaders and server fns commonly throw a raw Response; String(it) is the
  // opaque "[object Response]", so pull out the status and URL instead.
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  const stack = error instanceof Error ? error.stack : undefined;

  console.error("[error-boundary]", message, {
    route: window.location.pathname,
    ...(stack !== undefined && { stack }),
    ...context,
  });
}
