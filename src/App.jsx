import { lazy, Suspense } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

// Lazy-loaded components for the 'Tasks' section
const Tasks = lazy(() => import('./layouts/Tasks'));
const TasksList = lazy(() => import('./layouts/Tasks/pages/TasksList'));
const Task = lazy(() => import('./layouts/Tasks/pages/Task'));
const AddTask = lazy(() => import('./layouts/Tasks/pages/AddTask'));
const EditTask = lazy(() => import('./layouts/Tasks/pages/EditTask'));

// Lazy-loaded components for the 'Subjects' section
const Subjects = lazy(() => import('./layouts/Subjects'));
const SubjectsList = lazy(() =>
  import('./layouts/Subjects/pages/SubjectsList')
);
const Subject = lazy(() => import('./layouts/Subjects/pages/Subject'));
const AddSubject = lazy(() => import('./layouts/Subjects/pages/AddSubject'));
const EditSubject = lazy(() => import('./layouts/Subjects/pages/EditSubject'));

// Lazy-loaded components for other sections
const SignIn = lazy(() => import('./layouts/SignIn'));
const Register = lazy(() => import('./layouts/Register'));
const Home = lazy(() => import('./layouts/Home'));
const Profile = lazy(() => import('./layouts/Profile'));
const NotFound = lazy(() => import('./layouts/NotFound'));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Routes for authentication */}
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />

          {/* Main layout */}
          <Route path="/" element={<Home />}>
            {/* Redirect to the default page */}
            <Route path="/" element={<Navigate to="task" />} />

            {/* Subjects section */}
            <Route path="subject" element={<Subjects />}>
              <Route path="" element={<SubjectsList />} />
              <Route path="add" element={<AddSubject />} />
              <Route path="edit/:id" element={<EditSubject />} />
              <Route path=":id" element={<Subject />} />
            </Route>

            {/* Tasks section */}
            <Route path="/task" element={<Tasks />}>
              <Route path="" element={<TasksList />} />
              <Route path="add" element={<AddTask />} />
              <Route path="edit/:id" element={<EditTask />} />
              <Route path=":id" element={<Task />} />
            </Route>

            {/* User profile */}
            <Route path="profile" element={<Profile />} />

            {/* User profile */}
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
