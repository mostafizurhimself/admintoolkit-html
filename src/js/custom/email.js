import Quill from 'quill';
//  Chat List Toggle
const emailList = document.getElementById('email-list');
const hideEmailList = document.getElementById('hide-email-list');
const openEmailList = document.getElementById('open-email-list');
const overlay = document.getElementById('overlay');
// Open Email List
const getOpenEmailList = () => {
  emailList.classList.remove('-translate-x-[350px]');
  emailList.classList.add('translate-x-0');
  overlay.classList.remove('invisible', 'opacity-0');
  overlay.classList.add('visible', 'opacity-100');
};

// Hide Email List
const getHideEmailList = () => {
  overlay.classList.remove('opacity-100');
  overlay.classList.add('opacity-0');
  overlay.classList.remove('visible');
  setTimeout(() => {
    emailList.classList.remove('translate-x-0');
    emailList.classList.add('-translate-x-[350px]');
    overlay.classList.add('invisible');
  }, 100);
};

//  EventListeners
openEmailList.addEventListener('click', getOpenEmailList);
overlay.addEventListener('click', getHideEmailList);
hideEmailList.addEventListener('click', getHideEmailList);
emailList.addEventListener('click', (event) => {
  if (event.target === emailList) getHideEmailList();
});

// Email Compose
const emailEditor = document.getElementById('email-editor');
const ccToggle = document.getElementById('cc-toggle');
const bccToggle = document.getElementById('bcc-toggle');
bccToggle.addEventListener('click', () => {
  document.getElementById('bcc-input').classList.toggle('hidden');
});
ccToggle.addEventListener('click', () => {
  document.getElementById('cc-input').classList.toggle('hidden');
});
// Email Editor
const editor = new Quill(emailEditor, {
  theme: 'snow',
  bounds: emailEditor,
  placeholder: 'write your message',
});

//++++++++++++++++ Email Badge For Email Compose Start  ++++++++++++++
(function () {
  "use strict";

  // Plugin Constructor
  var TagsInput = function (opts) {
    this.options = Object.assign(TagsInput.defaults, opts);
    this.init();
  };

  // Initialize the plugin
  TagsInput.prototype.init = function (opts) {
    this.options = opts ? Object.assign(this.options, opts) : this.options;

    if (this.initialized) this.destroy();

    if (
      !(this.orignal_input = document.getElementById(this.options.selector))
    ) {
      console.error(
        "tags-input couldn't find an element with the specified ID"
      );
      return this;
    }

    this.arr = [];
    this.wrapper = document.createElement("div");
    this.input = document.createElement("input");
    init(this);
    initEvents(this);

    this.initialized = true;
    return this;
  };

  // Add Tags
  TagsInput.prototype.addTag = function (string) {
    if (this.anyErrors(string)) return;

    this.arr.push(string);
    var tagInput = this;

    var tag = document.createElement("span");
    tag.className = this.options.tagClass;
    tag.innerText = string;

    var closeIcon = document.createElement("a");
    closeIcon.innerHTML = "&times;";

    // delete the tag when icon is clicked
    closeIcon.addEventListener("click", function (e) {
      e.preventDefault();
      var tag = this.parentNode;

      for (var i = 0; i < tagInput.wrapper.childNodes.length; i++) {
        if (tagInput.wrapper.childNodes[i] == tag) tagInput.deleteTag(tag, i);
      }
    });

    tag.appendChild(closeIcon);
    this.wrapper.insertBefore(tag, this.input);
    this.orignal_input.value = this.arr.join(",");

    return this;
  };

  // Delete Tags
  TagsInput.prototype.deleteTag = function (tag, i) {
    tag.remove();
    this.arr.splice(i, 1);
    this.orignal_input.value = this.arr.join(",");
    return this;
  };

  // Make sure input string have no error with the plugin
  TagsInput.prototype.anyErrors = function (string) {
    if (this.options.max != null && this.arr.length >= this.options.max) {
      console.log("max tags limit reached");
      return true;
    }

    if (!this.options.duplicate && this.arr.indexOf(string) != -1) {
      console.log('duplicate found " ' + string + ' " ');
      return true;
    }

    return false;
  };

  // Add tags programmatically
  TagsInput.prototype.addData = function (array) {
    var plugin = this;

    array.forEach(function (string) {
      plugin.addTag(string);
    });
    return this;
  };

  // Get the Input String
  TagsInput.prototype.getInputString = function () {
    return this.arr.join(",");
  };

  // destroy the plugin
  TagsInput.prototype.destroy = function () {
    this.orignal_input.removeAttribute("hidden");

    delete this.orignal_input;
    var self = this;

    Object.keys(this).forEach(function (key) {
      if (self[key] instanceof HTMLElement) self[key].remove();

      if (key != "options") delete self[key];
    });

    this.initialized = false;
  };

  // Private function to initialize the tag input plugin
  function init(tags) {
    tags.wrapper.append(tags.input);
    tags.wrapper.classList.add(tags.options.wrapperClass);
    tags.orignal_input.setAttribute("hidden", "true");
    tags.orignal_input.parentNode.insertBefore(
      tags.wrapper,
      tags.orignal_input
    );
  }

  // initialize the Events
  function initEvents(tags) {
    tags.wrapper.addEventListener("click", function () {
      tags.input.focus();
    });

    tags.input.addEventListener("keydown", function (e) {
      var str = tags.input.value.trim();

      if (!!~[9, 13, 188].indexOf(e.keyCode)) {
        e.preventDefault();
        tags.input.value = "";
        if (str != "") tags.addTag(str);
      }
    });
  }

  // Set All the Default Values
  TagsInput.defaults = {
    selector: "",
    wrapperClass: "tags-input-wrapper",
    tagClass: "tag",
    max: null,
    duplicate: false,
  };

  window.TagsInput = TagsInput;
})();

const emailInputs = document.querySelectorAll(".email-tags");
emailInputs.forEach((emailInput) => {
  let tagInput = new TagsInput({
    selector: emailInput.id,
    duplicate: false,
  });
  tagInput.addData([]);
  
});

//++++++++++++++++ Email Badge For Email Compose End ++++++++++++++
