import React, { useState } from 'react';
import './sidebar.scss';
import Trigger from '../trigger/trigger.jsx';

export default function Sidebar() {
  const [classes, setClasses] = useState(['sidebar']);
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed((prevValue) => !prevValue);
    setClasses(() =>
      collapsed ? classes.filter((cls) => cls !== 'opened') : [...classes, 'opened']
    );
  };

  return (
    <aside className={classes.join(' ')}>
      <Trigger onClick={toggle} />
    </aside>
  );
}
