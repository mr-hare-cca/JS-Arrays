# Unit 8.5 – Arrays (Inputs + textContent)

## Notes 
- Arrays can hold **mixed types** (numbers, strings, booleans, etc.).
- Read/write by index (`arr[i]`) and use `arr.length` to access/append at the end.
- Useful methods: `push`, `pop`, `shift`, `unshift`, `splice`, `sort` (string compare by default).

## What you’ll build
A single button that runs `runJS()` and uses **page inputs** (not `prompt`) and **page outputs** with `textContent` (not `alert`).

### Required page elements (IDs)
- `color` – text input for traffic light color.
- `n1`..`n5` – five number inputs.
- `actionList` – where you print the action 5 times (you can use a `<ul>` or any container).
- `average` – where you show the average of the 5 numbers.
- `evenCount` – where you show how many of the 5 numbers are even.
- `feedback` – where you show an error like “Invalid color”.
- A button that calls **`runJS()`**.

## Requirements checked by the autograder
1) **Traffic light loop (color → action ×5)**  
   - Accept colors **red**, **yellow**, **green** (case-insensitive).  
   - If valid, show the matching action **five times** in `#actionList` using `textContent`/DOM (e.g., 5 `<li>` items).  
   - Mapping: red → “Stop”, yellow → “Slow”, green → “Go”.  
   - If invalid, show an error in `#feedback` and do **not** print the five actions.

2) **Collect 5 numbers (array)**  
   - Read values from `#n1..#n5`, store them in an **array**, compute the **average** and **even count**.  
   - Display the average in `#average` and the count of evens in `#evenCount` using `textContent`.

3) **No prompts/alerts**  
   - Don’t use `prompt()` or `alert()`; use the page UI + `textContent`.

> The grader will set the inputs in the DOM, click your button (call `runJS()`), and check the content of the output elements.

## Run locally
Open your page, fill inputs, click the button, and check the outputs on the page.
