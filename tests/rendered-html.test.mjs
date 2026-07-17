import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Lix Mobility Home", async () => {
  const response = await render("/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /La nueva forma de moverte/);
  assert.match(html, /Así funciona/);
  assert.match(html, /Preguntas frecuentes/);
});

test("renders the Capitanes landing", async () => {
  const response = await render("/capitanes");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Convertite en Capitán de Lix/);
  assert.match(html, /¿Por qué navegar con Lix?/);
  assert.match(html, /¿Listo para navegar con Lix?/);
});
