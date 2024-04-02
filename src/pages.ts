import ButtonProps from "./button-props";
import ChildRerender from "./child-rerender";
import LayoutShift from "./layout-shift";
import LazyLoading from "./lazy-loading";
import TogglePasswordVisibility from "./toggle-password-visibility";

export const PAGES = [
  {
    label: "Toggle password visibility",
    path: "/password-toggle-visibility",
    element: TogglePasswordVisibility,
  },
  {
    label: "Layout shift",
    path: "/layout-shift",
    element: LayoutShift,
  },
  {
    label: "Button Props",
    path: "/button-props",
    element: ButtonProps,
  },
  {
    label: "Child Component Rerender",
    path: "/child-rerender",
    element: ChildRerender,
  },
  {
    label: "Lazy Loading",
    path: "/lazy-loading",
    element: LazyLoading,
  },
];
