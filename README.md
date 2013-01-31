Qwik-Start
==========

Qwik Start is an [Initializr](http://www.initializr.com/) inspired mobile friendly web template based on the [HTML5 Boilerplate][h5bp] to get you started with your web applications.

## Quick start

See the [demo](http://gneatgeek.github.com/qwik-start/)!

Clone the git repo - `git clone git@github.com:gneatgeek/Qwik-Start.git` - or [download the current tag][tag].

## Features

* Built on the [HTML5 Boilerplate][h5bp]
* Menu button for smaller screens keeps navigation from cluttering up your limited space.
* Mobile first responsive design
* [Sassy CSS][sass] instead of vanilla CSS
* Simple, sleek design with drop-down menus in mind.

## Notes

* [SASS][sass] was used to make the CSS cleaner, more maintainable, and more dynamic.
    * I left an expanded compiled version of vanilla CSS in the css/ folder for those who don't want to mess with SASS.
    * Changing the color scheme is super easy. Just edit the $baseColor variable in sass/main.scss and the scheme will dynamically update based on the color you specify.
    * There are a few variables defined in the main.scss file which make changing the template quick and easy.
    * The main file serves as a home for variables and mixins; it imports all the other segments as include files which are denoted as _filename.scss
* This template currently only handles one level of dropdown. I might add a second level in the future.
* The file `htaccess` must be renamed to `.htaccess` in order to function.
    * As stated in the `htaccess` file: ".htaccess files are an overhead, this logic should be in your Apache config if possible: [Read the docs](http://httpd.apache.org/docs/2.2/howto/htaccess.html)"
    * I changed the filename to keep strange .htaccess related issues from popping up right away. Check it out and use what you need/want.
* Please contribute by [forking][fk] and sending a pull request.

[fk]: http://help.github.com/forking/
[h5bp]: http://html5boilerplate.com/
[sass]: http://sass-lang.com/
[tag]: https://github.com/gneatgeek/Qwik-Start/zipball/v1.0