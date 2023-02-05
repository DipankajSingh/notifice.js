# Notifice

notificeJS is a JavaScript library that allows you to easily create and display notifications on your web page.

## Installation

To use notificeJS, you will need to include the library in your project. You can do this by either downloading the library from the GitHub repository, or by using a package manager like npm.

## Downloading the Library

1. Download the library from the GitHub repository
   > https://github.com/DipankajSingh/notifice.js
2. Extract the contents of the downloaded zip file
3. Include the notifice.js file in your HTML file.

#### HTML

```html
<script src="./notificeJS/notifice.js"></script>
```

### Using NPM

1. Install the library using npm: **npm install notificeJS**
2. Import the library in your JavaScript file:

#### javascript

```js
import notificeJS from "notifice";
```

## Usage

To use notificeJS, you will need to create a new instance of the **Notifice** class, and configure it with your desired options.

#### javascript

```js
const notification = new Notifice({
  message: "Hello, World!",
  type: "success",
  position: "top-right",
});
```

The Notifice class accepts an options object, which can contain the following properties:

- **message**: The message to be displayed in the notification.
- **type**: The type of notification to be displayed. This can be one of: **success**, **info**, **warning**, or **error**.
- **position**: The position on the screen where the notification should be displayed. This can be one of: **top-left**, **top-right**, **bottom-left**, or **bottom-right**.

Once you have created a new instance of the **Notifice** class, you can display the notification by calling the **show()** method.

#### javascript

```js
notification.show();
```

# Examples

Here is an example of how you can use notificeJS to display a success notification in the top-right corner of the screen:

#### javascript

```js
const notification = new Notifice({
  message: "Task completed successfully!",
  type: "success",
  position: "top-right",
});

notification.show();
```

And here is an example of how you can display an error notification in the bottom-left corner of the screen:

#### javascript

```js
const notification = new Notifice({
  message: "An error occurred",
  type: "error",
  position: "bottom-left",
});

notification.show();
```

## Conclusion

notificeJS is a simple and easy-to-use library for creating and displaying notifications on your web page. With its flexibility and customizable options, notificeJS is a great tool for adding notifications to your web projects.
