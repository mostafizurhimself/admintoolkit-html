//Third party packages
import 'simplebar';
import '@fortawesome/fontawesome-free/js/all';
import feather from 'feather-icons';
import ResizeObserver from 'resize-observer-polyfill';

//Core components
import accordion from './components/accordion';
import alert from './components/alert';
import codeViewer from './components/code-viewer';
import dropdown from './components/dropdown';
import modal from './components/modal';
import sidebar from './components/sidebar';
import tabs from './components/tabs';
import datepicker from './components/datepicker';
import drawer from './components/drawer';
import themeSwitcher from './components/theme-switcher';
import carousel from './components/carousel';
import editor from './components/editor';
import select from './components/select';
import uploader from './components/uploader';
import apexCharts from './components/apex-charts';

// Initialize themeSwitcher
themeSwitcher.init();

// Initialize codeViewer
codeViewer.init();

// Initialize alert
alert.init();

// Initialize accordion
accordion.init();

// Initialize dropdown
dropdown.init();

// Initialize modal
modal.init();

// Initialize sidebar
sidebar.init();

// Initialize tabs
tabs.init();

// Initialize carousel
carousel.init();

// Initialize editor
editor.init();

// Initialize select
select.init();

// Initialize uploader
uploader.init();

// Initialize datepicker
datepicker.init();

// Initialize drawer
drawer.init();
// Initialize apex charts
apexCharts.init();

// Initialize feather-icons. Must be Initialize at the end.
feather.replace(); 

// Polyfill for ResizeObserver
window.ResizeObserver = ResizeObserver;
