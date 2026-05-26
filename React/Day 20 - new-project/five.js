

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













