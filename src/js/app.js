import dropdown from './components/dropdown';
import accordion from './components/accordion';
import themeSwitcher from './components/theme-switcher';
import highlightCode from './components/highlight';
import sidebar from './components/sidebar';
import feather from 'feather-icons';

// Initialize code highlighting
highlightCode.init();

// Initialize dropdowns
dropdown.init();

// Initialize accordions
accordion.init();

// Initialize themeSwitcher
themeSwitcher.init();

// Initialize sidebar
sidebar.init();

// Initialize feather icons
feather.replace();
