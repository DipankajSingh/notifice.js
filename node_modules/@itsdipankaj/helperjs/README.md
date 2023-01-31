# HelperJs

The helperJS library provides several utility functions that can simplify and streamline the process of developing web applications.

## Installation

To use HelperJS, you will need to include the library in your project. You can do this by either downloading the library from the GitHub repository, or by using a package manager like npm.
Downloading the Library

Download the library from the GitHub repository:

    https://github.com/DipankajSingh/helperjs

- Extract the contents of the downloaded zip file
- Include the notificeJS.js file in your HTML file.

```html
<script src="./helperjs.js"></script>
```

### Using NPM

Install the library using npm:

```
npm install helperjs
```

Import the library in your JavaScript file:

```js
import help from "helperjs";
```

#### Here are some reasons why you might want to use this library:

- **Convenience**: helperJS provides functions that perform common tasks, like creating an element, adding a click event, or inserting a code snippet. By using these functions, you can save time and effort and write less code.

- **Consistency**: The functions in helperJS are written in a consistent style, which makes it easier to understand and use them.

- **Cross-browser** compatibility: The library has been tested on multiple browsers and ensures that its functions work seamlessly on all modern browsers.

- **Improved productivity**: By using helperJS, you can focus on the implementation of your application's logic, rather than dealing with the nitty-gritty details of JavaScript DOM manipulation.

- **Open-source**: The helperJS library is open-source, which means you can access the source code, use it freely, and even contribute to its development.

### $ function

The **$()** function returns a single element or a list of elements that match the selector.

**Syntax:**

```js
$((selector = "body"));
```

**Parameters:**

- **selector** (_Default:"body"_) - A string that specifies the selector for the elements to be returned. The default value is 'body'.

Return Value:

> The function returns an element or a list of elements that match the selector. If only one element is found, it returns that element. If multiple elements are found, it returns a list of those elements. If no elements are found, it returns null.

### GiveElement function

The **GiveElement** function creates a new HTML element with the specified tag name, class list and inner text.

**Syntax:**

```js
GiveElement((tagName = "div"), (classList = ""), (innerText = ""));
```

**Parameters:**

- **tagName** (_default:"div"_) - A string that specifies the tag name of the element to be created. The default value is 'div'.
- **classList** (_optional_) - A string that specifies the class list of the element to be created. The default value is an empty string.
- **innerText** (_optional_) - A string that specifies the inner text of the element to be created. The default value is an empty string.

Return Value:

> The function returns the newly created HTML element.

### altKeyEvent function

The **altKeyEvent** function adds an event listener to listen for a keyboard event where the alt key is pressed and the key matches a specified value.

**Syntax:**

```js
altKeyEvent((key = "b"), Callback);
```

**Parameters:**

- **key** (_defualt:"b"_) - A string that specifies the key to be listened for. The default value is 'b'.
- **Callback** - The function to be called when the event is triggered.

Return Value:

> The function does not return a value.

### codeHTML function

The **codeHTML** function takes a dictionary of key-value pairs and a string as inputs and returns the string with its values replaced with their corresponding keys.

**Syntax:**

```js
codeHTML((keyPairs = { _b_: "<b>" }), (onString = ""));
```

**Parameters:**

- **keyPairs** (_required_) - An object that specifies the key-value
  pairs to be used for replacing values in the string. The default value is :

```js
{ '*b*': '<b>' }"
```

- **onString** (**required**) - The string to be processed. The default value is an empty string.

Return Value:

> The function returns the processed string with its values replaced with their corresponding keys.

### insertSnippet function

The **insertSnippet** function is used to insert a pre-defined snippet of text at a specific location in a text area element.
**Parameters:**

- **snippet** (_Object_): A JavaScript object that contains the opening and closing text of the snippet. The default value is an empty object {}.
- **selectionTXT** (_String_): The text that will be inserted between the opening and closing text of the snippet. The default value is an empty string ''.
- **insertIn** (_HTMLTextAreaElement_): The text area element in which the snippet will be inserted.

Returns:

> Nothing. The function modifies the value property of the insertIn text area element.

- Example Usage:

```js
const snippet = { open: "<b>", close: "</b>" };
const selectionTXT = "bold text";
insertSnippet(snippet, selectionTXT, $("textarea"));
```

This code will insert the following text into the textarea element:

> "< b > b o l d t e x t < / b >"
