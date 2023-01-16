//Import core components
import accordion from './components/accordion';
import dropdown from './components/dropdown';
import highlightCode from './components/highlight';
import modal from './components/modal';
import themeSwitcher from './components/theme-switcher';
import sidebar from './components/sidebar';

//Import third party packages
import feather from 'feather-icons';

// Initialize code accordion
accordion.init();

// Initialize dropdowns
dropdown.init();

// Initialize code highlighting
highlightCode.init();

// Initialize modal
modal.init();

// Initialize themeSwitcher
themeSwitcher.init();

// Initialize sidebar
sidebar.init();

// Initialize feather icons Icons should be replaced at the end
feather.replace();