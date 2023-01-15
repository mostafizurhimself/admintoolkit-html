import dropdown from './components/dropdown';
import accordion from './components/accordion';
import themeSwitcher from './components/theme-switcher';
import highlightCode from './components/highlight';
import sidebar from './components/sidebar';
import modal from './components/modal';
import feather from 'feather-icons';

// Initialize code highlighting
highlightCode.init();

// Initialize dropdowns
dropdown.init();

// Initialize modal
modal.init();

// Initialize themeSwitcher
themeSwitcher.init();

// Initialize sidebar
sidebar.init();

// Initialize feather icons
feather.replace();

