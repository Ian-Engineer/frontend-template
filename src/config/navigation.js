import routes from "./routes";

const navigationConfig = [
  {
    name: "Root",
    path: "/",
    element: <routes.Root />,
    errorElement: <routes.ErrorConfig />,
    children: [
      {
        name: "Home",
        path: "/",
        element: <routes.HomeConfig />,
        onMenu: true,
      },
      {
        name: "Login",
        path: "/login",
        element: <routes.LoginConfig />,
        onMenu: false,
      },
      {
        name: "Register",
        path: "/register",
        element: <routes.RegisterConfig />,
        onMenu: false,
      },
      {
        name: "Password Reset",
        path: "/password_reset",
        element: <routes.PasswordResetConfig />,
        onMenu: false,
        description: 'the page that the link "Forgot password?" goes to',
      },
      {
        name: "Password Reset Token",
        path: "/password_reset/:token",
        element: <routes.PasswordResetTokenConfig />,
        onMenu: false,
        description: "Navigated to from the forgot password email",
      },
      {
        name: "Account",
        path: "/account",
        element: <routes.AccountConfig />,
        onMenu: false,
        description: "Account page for particular user"
      },
      {
        name: "Contact Us",
        path: "/contact",
        element: <routes.ContactConfig />,
        onMenu: true,
        description: "The way a user can contact sol good media"
      },
      {
        name: "404",
        path: '/404',
        element: <routes.NoRouteConfig />,
        onMenu: false,
        description: 'end point if there is no route'
      },
      {
        name: 'Privacy Policy',
        path: '/privacy_policy',
        element: <routes.PrivacyPolicyConfig />,
        description: 'privacy policy for sol good',
        onMenu: true,
      },
      {
        name: 'Terms of Services',
        path: '/terms_of_services',
        element: <routes.TermsOfServiceConfig />,
        description: 'terms of services for the subscription of sol good media',
        onMenu: true,
      }
    ],
  },
];

export default navigationConfig;
