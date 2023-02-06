//Import third party packages
import feather from 'feather-icons';
import ResizeObserver from 'resize-observer-polyfill';
import 'simplebar';

//Import core components
import accordion from './components/accordion';
import alert from './components/alert';
import codeViewer from './components/code-viewer';
import dropdown from './components/dropdown';
import modal from './components/modal';
import sidebar from './components/sidebar';
import tabs from './components/tabs';
import themeSwitcher from './components/theme-switcher';

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

// Polyfill for ResizeObserver
window.ResizeObserver = ResizeObserver;
