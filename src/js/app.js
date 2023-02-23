//Import third party packages
import 'simplebar';
import '@fortawesome/fontawesome-free/js/all';
import feather from 'feather-icons';
import ResizeObserver from 'resize-observer-polyfill';

//Import core components
import accordion from './components/accordion';
import alert from './components/alert';
import codeViewer from './components/code-viewer';
import dropdown from './components/dropdown';
import modal from './components/modal';
import sidebar from './components/sidebar';
import tabs from './components/tabs';

//Import third party packages
import themeSwitcher from './components/theme-switcher';
import carousel from './components/carousel';

import editor from './components/editor';
import select from './components/select';

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
// Initialize carousels
carousel.init();

// Initialize editor
editor.init();

// Initialize Select
select.init();

// Initialize feather icons Icons should be replaced at the end
feather.replace();

// Polyfill for ResizeObserver
window.ResizeObserver = ResizeObserver;
