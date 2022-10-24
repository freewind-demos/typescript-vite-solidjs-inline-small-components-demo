import {createSignal} from 'solid-js';

const [name, setName] = createSignal<string>('solidjs')

export const Hello = () => {

  return <div>
    <h1>Hello, {name()}</h1>
    <input type="text" value={name()} onInput={(event) => setName(event.currentTarget.value)}/>
  </div>
}
