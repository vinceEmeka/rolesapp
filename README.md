#  Role-Based Dashboard App (React + TypeScript)
This is a simple role-based dashboard application built with React and TypeScript. It features a fake login system where users can:
Enter a username
Select a role (admin, editor, or viewer)
Upon login, users are redirected to a dashboard with content tailored to their role.

## Features
#### Protected Routes:

/dashboard and /profile are accessible only after login
/settings is restricted to Admin users only
Unauthorized users are redirected to /login

#### Role-Based Views:
Each user sees a different dashboard layout based on their selected role

#### Navbar with Context Awareness:
Displays the user's name and role
Shows only allowed navigation links (e.g., hides Settings for non-admins)
Includes a logout button that clears user data and redirects to login

#### Global Auth Context:
User info is stored using React Context + useState

#### Minimal Styling:
Styled with plain CSS for simplicity and clarity

