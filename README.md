# React Redux Tutorial

## Test Redux in browser console (2nd Commit):

```javascript
  $ store.getState();
  >> {articles: Array(0)}articles: []__proto__: Object

  $ store.subscribe(() => console.log('Look ma, Redux!!'));
  >> ƒ unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        if (isDispatching) {
          throw new Error( false ? undefined : 'You may not unsubscribe from a store listener while the re…'

  $ store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );
  >> VM149:1 Look ma, Redux!!
  {type: "ADD_ARTICLE", payload: {…}}payload: {title: "React Redux Tutorial for Beginners", id: 1}type: "ADD_ARTICLE"__proto__: Object

  $ store.getState();
  >> {articles: Array(1)}articles: Array(1)0: {title: "React Redux Tutorial for Beginners", id: 1}length: 1__proto__: Array(0)__proto__: Object
```
<hr>

## React and Redux at work! (3rd Commit):

<div id="root">
  <div>
    <h2>Articles</h2>
    <ul>
      <li>Blog 1</li>
      <li>Blog 2</li>
    </ul>
  </div>
  <div>
    <h2>Add a new article</h2>
    <form>
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" value="">
      </div>
      <button type="submit">SAVE</button>
    </form>
  </div>
</div>
<hr>

## Added Redux Midleware (4th Commit):
When you try to add a article with spam/money in it, it Will not save the article and eventually will not appear in the list.
<hr>


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
