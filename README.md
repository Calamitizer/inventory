# Parts Inventory Demo

### Overview

This webapp is a dashboard for an inventory management system, providing an at-a-glance overview of current stock. It highlights low-stock or out-of-stock items, and allows filtering displayed parts by name or current stock.

##### Features / functionality

- Displays a table of all parts registered in inventory, along with unit price & current stock
- Highlights items with low or empty stock using color-coded icons (with tooltips)
- Allows searching by product name
  - Live search lists results as you type
  - Autocorrect functionality for known part names — with keyboard navigation support
- Allows filtering based on stock level with a customized slider
- Presents some basic derived statistics
- Serviceably responsive for screen sizes above ~medium
- Custom brand-consistent styling on table scrollbar, stock threshold slider, autocomplete navigation, &c. for a cohesive UX feel

### Deployment

Run `yarn` first to install dependencies. You may need to run `yarn --network-timeout 1000000` if yarn gives you a network error (see note below).

- `yarn server`
  - This script launches a simple `json-server` to serve `data/inventory.json` on port 8000.
- `yarn start`
  - This script builds the webapp & deploys it via a small dedicated server via `react-scripts`. It is served on port 3000.
- `yarn code`
  - If you use VS Code, this script will open this project as a workspace (`.vscode/inventory.code-workspace`).

### Stack & Structure Synopsis

- The file structure is roughly analogous to the DOM structure, e.g. `<PartsTable />`, `<SidePanel />`, `<FilterWidgets />`, etc.
- This app uses the `material-ui` component library.
- This project uses React hooks extensively:
  - `material-ui`'s `useStyles` for a CSS-in-JS paradigm
  - Custom state hooks for different slices of app state — `useParts` and `useFilter`.
- The API data & filter states are handled by `<PartsProvider /` & `<FilterProvider />` — tracing through those can give you a feel for the data flow.
  - For the simpler example, check out `src/state/parts`.
    - `part.model.ts` — the data object interface
    - `parts.context.ts` — a simple export barrel for instantiating the parts context & providing the dedicated `useParts` state hook
    - `parts.provider.tsx` — the state logic for wrapping interaction with the async API client into a provider for the `PartsContext`
  - The filter state is more complicated. As opposed to the one-off read-only API fetch for the parts data, the filter data is mutable by UI state and must dispatch actions for those mutations.
    - The `useFilter` hook provides filter state to *e.g.* `<PartsTable />`. (The state consumers themselves are stateless components; the filter is provided by their corresponding `<Container />`s).
    - `filter.state.ts` — The state slice corresponding to individual filters, namely the present values of the search box & stock threshold slider.
    - `stock-filter.ts` — The datamodel for the discrete stock thresholds. Serves as the source-of-truth for which values are presented by the UI slider.
    - `filter.reducer.ts` — the (purely functional) state mutation logic for the different UI-triggered actions defined in `filter.actions.ts`. Very Redux-flavored, which (like Redux) has its pros & cons.
    - `filter.context.ts` & `filter.provider.ts` — as above, the `useFilter` context wrapper & the state logic for providing filter state & dispatching possible actions thereupon. Consumed by all UI filter widgets and the `<PartsTable />` itself for doing the actual, y'know, filtering. (Filter application logic happens in `src/util/filter-parts.ts`.)

### Possible Improvements

- Generalizing stock thresholding
  - It could take a wider range of values, controllable through the slider.
  - It could depend on the standards for a specific part (e.g. a thousand pistachios is low stock, but a thousand invisibility cloaks is plenty).
  - For a more nuanced overview, we could implement user-configured thresholds by expanding on the filter state system.
- Various other widgets for filtering by different part properties
  - *e.g.* filtering by shelf-stability or unit price, or specifying a certain warehouse site.
- Sorting functionality for each column would be very feasible. As-is, the parts are presented in exactly the order of `inventory.json`.
- A virtualized / infinite table could be cool, if there were enough parts to warrant it.
- IIRC, the as-you-type search filtering is synchronous & could be made async.
- Unit testing. For components more widely re-used or projects held to enterprise standards, it's obviously a must.
  - I would probably have focused on unit-testing the part & filter logic first, e.g. testing `PartsClient` & `FilterReducer`.
  - Then, unit tests for the widgets. The two here are controlled components, so their state is controlled directly by business logic instead of native events. This means the state of your inputs is a first-class citizen & can be accessed anywhere it's needed, including mocking in a test.

### A note on `yarn` errors & bundle size

The dependency on `@material-ui/icons` means that the raw size of `node_modules` will be quite large. This large download is why yarn might complain about network connection when installing dependencies, thinking that something must be wrong. However, because of selective importing and bundling (tree-shaking), only a very small fraction of this is actually minified & sent to the browser.
