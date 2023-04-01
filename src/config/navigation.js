import routes from "./routes";

const navigationConfig = [
  {
    name: "Root",
    path: "/",
    element: <routes.Root />,
    errorElement: <routes.ErrorConfig />,
    children: [
      {
        name: "Template",
        path: "/template",
        element: <routes.TemplateConfig />,
      },
    ],
  },
];

export default navigationConfig;
