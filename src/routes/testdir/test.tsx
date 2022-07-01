import { createSignal } from 'solid-js';

const Test = () => {
  const [text, setText] = createSignal('')

  return (
    <div class="grid place-content-center h-screen">
      <input
        type="text"
        class="border border-black"
        value={text()}
        onInput={(e) => setText(e.currentTarget.value)}
      />
      <p>{text()}</p>
    </div>
  )
}
export default Test;