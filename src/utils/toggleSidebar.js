/**
 * Toggles the visibility of a sidebar by adding or removing CSS classes
 * to the body and the sidebar element.
 */
const toggleSidebar = () => {
  const body = document.body;
  const sidebar = document.querySelector('.sidebar');
  if (body.classList.contains('sidebar-toggled')) {
    body.classList.remove('sidebar-toggled');
    sidebar?.classList.remove('toggled');
  } else {
    body.classList.add('sidebar-toggled');
    sidebar?.classList.add('toggled');
  }
};

export default toggleSidebar;
