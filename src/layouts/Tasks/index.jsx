import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * Tasks Component
 * This component serves as a container for rendering nested routes related to tasks.
 *
 * @returns {JSX.Element} The JSX element representing the Tasks component.
 */
const Tasks = () => {
  return <Outlet />;
};

export default Tasks;
