//Import core components
import alert from './components/alert';
import accordion from './components/accordion';
import dropdown from './components/dropdown';
import codeViewer from './components/code-viewer';
import modal from './components/modal';
import themeSwitcher from './components/theme-switcher';
import sidebar from './components/sidebar';
import tabs from './components/tabs';

//Import third party packages
import feather from 'feather-icons';

// Initialize code highlighting
codeViewer.init();

// Initialize alert
alert.init();

// Initialize code accordion
accordion.init();

// Initialize dropdowns
dropdown.init();

// Initialize modal
modal.init();

// Initialize themeSwitcher
themeSwitcher.init();

// Initialize sidebar
sidebar.init();

// Initialize tabs
tabs.init();

// Initialize feather icons Icons should be replaced at the end
feather.replace();
