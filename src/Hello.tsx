import { createSignal } from 'solid-js';

export const Hello = () => {
  return <div>
    {
      doExpr(() => {
        const [name, setName] = createSignal<string>('solidjs')
        return <>
          <h1>Hello, {name()}</h1>
          <input type="text" value={name()} onInput={(event) => setName(event.currentTarget.value)} />
        </>
      })
    }
  </div>
}

function doExpr<T>(fn: () => T): T {
  return fn();
}
