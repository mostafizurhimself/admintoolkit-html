import dropdown from './dropdown';
import accordion from './accordion';
import theme from './theme';
import highlightCode from './highlight';
import sidebar from './sidebar';
import feather from 'feather-icons';

// Initialize code highlighting
highlightCode.init();

// Initialize dropdowns
dropdown.init();

// Initialize accordions
accordion.init();

// Initialize theme
theme.init();

// Initialize sidebar
sidebar.init();

// Initialize feather icons
feather.replace();
