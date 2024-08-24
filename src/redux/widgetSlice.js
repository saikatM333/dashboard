// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   categories: {
// //     CSPM: [
// //       { id: 1, name: 'Cloud Accounts', text: 'Random Text 1' },
// //       { id: 2, name: 'Cloud Account Risk Assessment', text: 'Random Text 2' },
// //     ],
// //     CWPP: [],
// //   },
// //   allWidgets: [
// //     { id: 1, name: 'Cloud Accounts' },
// //     { id: 2, name: 'Cloud Account Risk Assessment' },
// //     { id: 3, name: 'Top 5 Namespace Specific Alerts' },
// //     { id: 4, name: 'Workload Alerts' },
// //     { id: 5, name: 'Image Risk Assessment' },
// //     { id: 6, name: 'Image Security Issues' },
// //   ]
// // };

// // const widgetSlice = createSlice({
// //   name: 'widget',
// //   initialState,
// //   reducers: {
// //     addWidget(state, action) {
// //       const { category, widget } = action.payload;
// //       state.categories[category].push(widget);
// //     },
// //     removeWidget(state, action) {
// //       const { category, widgetId } = action.payload;
// //       state.categories[category] = state.categories[category].filter(w => w.id !== widgetId);
// //     },
// //     addNewWidget: (state, action) => {
// //       state.allWidgets.push(action.payload);
// //     },
// //   },
// // });

// // export const { addWidget, removeWidget, addNewWidget } = widgetSlice.actions;
// // export default widgetSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   categories: {
//     CSPM: [
//       { id: 1, name: 'Cloud Accounts', text: 'Random Text 1' },
//       { id: 2, name: 'Cloud Account Risk Assessment', text: 'Random Text 2' },
//     ],
//     CWPP: [],
//   },
//   allWidgets: [
//     { id: 1, name: 'Cloud Accounts' },
//     { id: 2, name: 'Cloud Account Risk Assessment' },
//     { id: 3, name: 'Top 5 Namespace Specific Alerts' },
//     { id: 4, name: 'Workload Alerts' },
//     { id: 5, name: 'Image Risk Assessment' },
//     { id: 6, name: 'Image Security Issues' },
//   ],
// };

// const widgetSlice = createSlice({
//   name: 'widget',
//   initialState,
//   reducers: {
//     addWidget(state, action) {
//       const { category, widget } = action.payload;
//       state.categories[category].push(widget);
//     },
//     removeWidget(state, action) {
//       const { category, widgetId } = action.payload;
//       state.categories[category] = state.categories[category].filter(
//         (w) => w.id !== widgetId
//       );
//     },
//     addNewWidget(state, action) {
//       state.allWidgets.push(action.payload);
//     },
//     addCategory(state, action) {
//       const newCategory = action.payload;
//       if (!state.categories[newCategory]) {
//         state.categories[newCategory] = [];
//       }
//     },
//   },
// });

// export const { addWidget, removeWidget, addNewWidget, addCategory } = widgetSlice.actions;
// export default widgetSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: {
    CSPM: [
      { id: 1, name: 'Cloud Accounts', text: 'Random Text 1' },
      { id: 2, name: 'Cloud Account Risk Assessment', text: 'Random Text 2' },
    ],
    CWPP: [ { id: 3, name: 'Top 5 Namespace Specific Alerts' ,  text: 'Random Text 3' },
      { id: 4, name: 'Workload Alerts'  ,text: 'Random Text 4'},],
  },
  allWidgets: [
    { id: 1, name: 'Cloud Accounts' },
    { id: 2, name: 'Cloud Account Risk Assessment' },
    { id: 3, name: 'Top 5 Namespace Specific Alerts' },
    { id: 4, name: 'Workload Alerts' },
    { id: 5, name: 'Image Risk Assessment' },
    { id: 6, name: 'Image Security Issues' },
  ],
  filter: "",
};

const widgetSlice = createSlice({
  name: 'widget',
  initialState,
  reducers: {
    // addWidget(state, action) {
    //   const { category, widgets } = action.payload;
    //   state.categories[category].push(...widgets ,text : `random text ${}`);
    // },
    setFilter: (state, action) => {
        state.filter = action.payload;
      },
    addWidget(state, action) {
      const { category, widgets } = action.payload;
      const updatedWidgets = widgets.map(widget => ({
        ...widget,
        text: `random text ${widget.id}` // Assuming each widget has an `id` or unique identifier
      }));
      
      state.categories[category].push(...updatedWidgets);
    },
    removeWidget(state, action) {
        
      const { category, widgetId } = action.payload;
      console.log("after removing ",state.categories)
      state.categories[category] = state.categories[category].filter(
        (w) => w.id !== widgetId
      );
      
    },
    addNewWidget(state, action) {
      state.allWidgets.push(action.payload);
    },
    addCategory(state, action) {
      const newCategory = action.payload;
      if (!state.categories[newCategory]) {
        state.categories[newCategory] = [];
      }
    },
  },
});

export const { addWidget, removeWidget, addNewWidget, addCategory, setFilter } =
  widgetSlice.actions;
export default widgetSlice.reducer;
