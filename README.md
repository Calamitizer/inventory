# Parts Inventory Demo

#### Deployment instructions

Run `yarn` first to install dependencies. You may need to run `yarn --network-timeout 1000000` if yarn gives you a network error (see note below).

The server & client scripts are unchanged — `yarn server` & `yarn client`.

#### Overview

- The file structure is roughly analogous to the DOM structure, e.g. `<PartsTable />`, `<SidePanel />`, `<FilterWidgets />`, etc.
- This app uses the `material-ui` component library.
- The API & filter states are handled by `<PartsProvider /` & `<FilterProvider />` — tracing through those can give you a feel for the data flow.

#### Stuff that could be nice

- Generalizing low stock thresholding
  - It could take a wider range of values, controllable through the slider.
  - It could depend on the standards for a specific part (e.g. a thousand pistachios is low stock, but a thousand invisibility cloaks is plenty).
- Various other widgets for filtering by different part properties
- Sorting functionality for each column wouldn't be too bad
- A virtualized / infinite table could be cool, if there were a ton more parts
- Unit testing. For components re-used on a wider scale or projects held to enterprise standards, it's obviously a must.
  - I would probably have focused on unit-testing the part & filter logic first, e.g. testing `PartsClient` & `FilterReducer`.
  - Then, unit tests for the widgets. The two here are controlled components, so their state is controlled directly by business logic instead of native events. This means the state of your inputs is a first-class citizen & can be accessed anywhere it's needed, including mocking in a test.

#### A note on `yarn` errors & bundle size

The dependency of `@material-ui/icons` means that the raw size of `node_modules` is quite large. This is why yarn might complain about network connection when installing dependencies, thinking that something must be wrong. However, because of selective importing and bundling, only a very small fraction of this is actually minified to the browser.
