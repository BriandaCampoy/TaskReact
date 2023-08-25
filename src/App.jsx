import { lazy, Suspense } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Tasks from './layouts/Tasks';
import TasksList from './layouts/Tasks/pages/TasksList';
import Task from './layouts/Tasks/pages/Task';
import AddTask from './layouts/Tasks/pages/AddTask';
import EditTask from './layouts/Tasks/pages/EditTask';

import Subjects from './layouts/Subjects';
import SubjectsList from './layouts/Subjects/pages/SubjectsList';
import Subject from './layouts/Subjects/pages/Subject';
import AddSubject from './layouts/Subjects/pages/AddSubject';
import EditSubject from './layouts/Subjects/pages/EditSubject';

const SignIn = lazy(() => import('./layouts/SignIn'));
const Register = lazy(() => import('./layouts/Register'));
const ProtectedHome = lazy(() => import('./layouts/Home'));
const Profile = lazy(() => import('./layouts/Profile'));

function App() {
  return (
    <HashRouter>
      <Suspense>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedHome />}>
            <Route path="/" element={<Navigate to="task" />} />

            <Route path="subject" element={<Subjects />}>
              <Route path="" element={<SubjectsList />} />
              <Route path="add" element={<AddSubject />} />
              <Route path="edit/:id" element={<EditSubject />} />
              <Route path=":id" element={<Subject />} />
            </Route>

            <Route path="/task" element={<Tasks />}>
              <Route path="" element={<TasksList />} />
              <Route path="add" element={<AddTask />} />
              <Route path="edit/:id" element={<EditTask />} />
              <Route path=":id" element={<Task />} />
            </Route>

            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
