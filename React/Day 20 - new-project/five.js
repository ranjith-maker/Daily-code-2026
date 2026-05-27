

// When we write:
// const refId = useRef(null)
// we are basically saying:
// “Right now there is no interval running.”
// null is used because it clearly represents the absence of a value. Before the user clicks Start, no timer exists yet, so the ref should naturally hold “nothing.” This makes the code more meaningful and readable. Later, when setInterval() runs, the ref changes from null to the actual interval ID returned by the browser.
// If you use 0 instead, the code may still technically work in many browsers because clearInterval(0) does nothing harmlessly, but conceptually it is less correct. 0 is still a number, so it looks like a real interval ID. Someone reading the code may think interval 0 actually exists. null communicates intent better. It tells other developers, “No interval has been created yet.” Good code is not only about making the computer understand; it is also about making humans understand.
// The reason we clear the interval before starting a new one is because setInterval() never replaces the old timer automatically. Every time the Start button is clicked, a completely new interval is created. If we don’t stop the previous one, multiple timers keep running in the background together. Imagine clicking Start three times. Now three intervals are all updating the countdown every second. The countdown may appear to speed up, flicker, or behave unpredictably because several intervals are competing to update the same state.
// So this line:
// clearInterval(refId.current)
// is defensive programming. It means:
// “Before creating a new timer, make sure any old timer is removed.”
// This guarantees that only one interval exists at a time. Even on the very first click, when refId.current is still null, calling clearInterval(null) is safe and simply does nothing. That is why we can confidently call it every time before creating a new interval. It keeps the logic simple, predictable, and bug-free.





/*----------------
There 3 ways you can to validate/ submission of the form
1) Full Fledged 3rd party libraries – React Hook ,Zod
2) Controlled Components
3)Uncontrolled Components



CC
It involves manual state management which can cause irrelevant re-renders, when using a CC you write an event handler for every way your data can change, like onchange 
It also require you to maintain all the validation logic

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit() {
    console.log("Name value: " + name);
    console.log("Email value: " + email);
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"   name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input  type="email"  name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
Here we have two states: name and email. These states are assigned to the value property of the name and email input elements.
The name state holds the value of the name input element. When a value is being typed in the name input, the onChange event attached to it sets the value of the input to the name state using the setName updater function.
The email state holds the value of the email input element. The onChange event attached to the email input changes the email state via setEmail() to hold the value typed into the element.
As you can see, the values of our input elements name and email are controlled by the React state; the state becomes the “single source of truth” for the input elements. Therefore, the App component shown above is a controlled component.

*/





