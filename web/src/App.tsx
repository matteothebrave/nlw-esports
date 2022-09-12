interface Buttonprops {
  title?: string;
}

function Button(props: Buttonprops) {
  return (
    <button>
      {props.title}
    </button>
  )
}
function App() {
  return (
    <div>
      <Button title="Send1" />
      <Button title="Send2" />
      <Button title="Send3" />
    </div>
  )
}


export default App
